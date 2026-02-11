<!---pretty much entirely doesn't work; will fix eventually
but ill figure out the rest of the site first-->

<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
  import * as THREE from "three";
  import { createTimeline } from "animejs";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { browser } from "$app/environment";

  let canvasEl!: HTMLCanvasElement;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let robot!: THREE.Group;

  let activeSubsystem: string | null = null;
  let allowRotation = true;

  let rafId: number;
  let destroyed = false;

  let onResize: () => void;

  type Subsystem = {
    key: string;
    color: number;
    label: string;
    description: string;
    parts: string[];
    anchor?: THREE.Object3D;
    hudAnchor?: THREE.Object3D;
    line?: THREE.Line;
  };

  const SUBSYSTEMS: Subsystem[] = [
    {
      key: "DRIVETRAIN",
      color: 0x6b7280,
      label: "Drivetrain",
      description: "Chassis & transmission",
      parts: [
        "occurrence_of_drivetrain",
        "occurrence_of_Bellypan",
        "occurrence_of_Bumpers",
      ],
    },
    {
      key: "INTAKE",
      color: 0xf6b14b,
      label: "Intake",
      description: "Game piece acquisition",
      parts: ["occurrence_of_intake", "occurrence_of_intake_mount"],
    },
    {
      key: "HOPPER",
      color: 0xff8547,
      label: "Hopper",
      description: "Storage and flow control",
      parts: ["occurrence_of_hopper_extension", "occurrence_of_hopper_wall"],
    },
    {
      key: "SPINDEXER",
      color: 0x3581b8,
      label: "Spindexer",
      description: "Indexing & feeding",
      parts: ["occurrence_of_Spindexer_Ring", "occurrence_of_Feeder"],
    },
    {
      key: "SHOOTER",
      color: 0xff4848,
      label: "Shooter",
      description: "Velocity and targeting",
      parts: [
        "occurrence_of_shooter",
        "occurrence_of_hood",
        "occurrence_of_turret",
      ],
    },
  ];

  type ExplodePart = {
    original: THREE.Mesh;
    wire: THREE.Mesh;
    collapsed: THREE.Vector3;
    exploded: THREE.Vector3;
    dir: THREE.Vector3;
  };

  const explodeMap = new Map<string, ExplodePart[]>();
  const tempVec = new THREE.Vector3();
  const tempVec2 = new THREE.Vector3();
  const sizeVec = new THREE.Vector2();

  function worldToScreen(pos: THREE.Vector3) {
    if (!camera || !renderer) return null;

    renderer.getSize(sizeVec);
    if (sizeVec.x === 0 || sizeVec.y === 0) return null;

    const v = pos.clone().project(camera);
    return {
      x: (v.x * 0.5 + 0.5) * sizeVec.x,
      y: (-v.y * 0.5 + 0.5) * sizeVec.y,
    };
  }

  let resizeObserver: ResizeObserver;

  onMount(async () => {
    if (!browser) return;
    await tick();
    if (!canvasEl) return;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.6, 4);

    renderer = new THREE.WebGLRenderer({
      canvas: canvasEl,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    resizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    });
    resizeObserver.observe(canvasEl);

    const rect = canvasEl.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height, false);

    onResize = () => {
      camera.aspect = canvasEl.clientWidth / canvasEl.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasEl.clientWidth, canvasEl.clientHeight);
    };
    window.addEventListener("resize", onResize);

    render();

    const loader = new GLTFLoader();
    loader.load("/assets/BlockAssembly.gltf", (gltf) => {
      robot = gltf.scene;
      scene.add(robot);

      buildAnchors();
      buildExplodeData();
      buildLeaderLines();
      startTimeline();
    });
  });

  onDestroy(() => {
    if (!browser) return;
    destroyed = true;

    cancelAnimationFrame(rafId);
    if (onResize) window.removeEventListener("resize", onResize);
    resizeObserver?.disconnect();

    explodeMap.forEach((parts) => {
      parts.forEach((p) => scene.remove(p.wire));
    });

    scene?.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      mesh.geometry?.dispose();
      if (mesh.material) {
        Array.isArray(mesh.material)
          ? mesh.material.forEach((m) => m.dispose())
          : mesh.material.dispose();
      }
    });

    renderer?.dispose();
  });

  function buildAnchors() {
    const radius = 1.4;
    SUBSYSTEMS.forEach((sys, i) => {
      const center = new THREE.Vector3();
      let count = 0;

      sys.parts.forEach((name) => {
        const obj = robot.getObjectByName(name);
        if (obj) {
          obj.getWorldPosition(tempVec);
          center.add(tempVec);
          count++;
        }
      });
      if (count > 0) center.divideScalar(count);

      const angle = (i / SUBSYSTEMS.length) * Math.PI * 2;
      const anchor = new THREE.Object3D();
      const hud = new THREE.Object3D();

      anchor.position.copy(center);
      anchor.position.x += Math.cos(angle) * radius;
      anchor.position.y += Math.sin(angle) * radius * 0.6;
      hud.position.copy(anchor.position).add(new THREE.Vector3(0.4, 0.25, 0));

      robot.add(anchor);
      robot.add(hud);

      sys.anchor = anchor;
      sys.hudAnchor = hud;
    });
  }

  function buildExplodeData() {
    SUBSYSTEMS.forEach((sys) => {
      const parts: ExplodePart[] = [];

      sys.parts.forEach((name) => {
        const mesh = robot.getObjectByName(name);
        if (!(mesh instanceof THREE.Mesh)) return;

        const material = mesh.material;
        if (!(material instanceof THREE.MeshStandardMaterial)) return;

        mesh.material = material.clone();
        mesh.material.color.setHex(sys.color);

        const wireMat = mesh.material.clone();
        wireMat.wireframe = true;
        wireMat.transparent = true;

        const wire = new THREE.Mesh(mesh.geometry.clone(), wireMat);
        mesh.getWorldPosition(wire.position);
        wire.rotation.copy(mesh.rotation);
        wire.scale.copy(mesh.scale);
        wire.visible = false;

        scene.add(wire);

        parts.push({
          original: mesh,
          wire,
          collapsed: new THREE.Vector3(),
          exploded: new THREE.Vector3(),
          dir: new THREE.Vector3(),
        });
      });

      explodeMap.set(sys.key, parts);
    });
  }

  function buildLeaderLines() {
    SUBSYSTEMS.forEach((sys) => {
      const mat = new THREE.LineBasicMaterial({
        color: sys.color,
        transparent: true,
        opacity: 0,
      });
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]);
      const line = new THREE.Line(geo, mat);
      line.visible = false;
      scene.add(line);
      sys.line = line;
    });
  }

  function startTimeline() {
    const tl = createTimeline({ loop: true });

    tl.add({
      duration: 3000,
      onBegin: () => {
        allowRotation = true;
        activeSubsystem = null;
      },
    });

    SUBSYSTEMS.forEach((sys) => {
      tl.add({
        duration: 100,
        onBegin: () => {
          allowRotation = false;
          activeSubsystem = sys.key;
          sys.line!.visible = true;
        },
      });

      tl.add({
        duration: 1200,
        onBegin: () => {
          const mat = sys.line!.material as THREE.LineBasicMaterial;
          mat.opacity = 0;
          mat.needsUpdate = true;

          explodeMap.get(sys.key)!.forEach((p) => {
            p.original.getWorldPosition(p.collapsed);
            p.wire.position.copy(p.collapsed);

            p.dir
              .copy(p.collapsed)
              .sub(sys.anchor!.getWorldPosition(tempVec))
              .normalize();
            p.exploded.copy(p.collapsed).addScaledVector(p.dir, 0.6);

            p.original.visible = false;
            p.wire.visible = true;
          });
        },
        onUpdate: (t) => {
          const k = Math.min(t.progress / 100, 1);
          explodeMap
            .get(sys.key)!
            .forEach((p) =>
              p.wire.position.lerpVectors(p.collapsed, p.exploded, k),
            );

          const mat = sys.line!.material as THREE.LineBasicMaterial;
          mat.opacity = k;
          mat.needsUpdate = true;
        },
      });

      tl.add({ duration: 800 });

      tl.add({
        duration: 1000,
        onUpdate: (t) => {
          const k = Math.min(t.progress / 100, 1);
          explodeMap
            .get(sys.key)!
            .forEach((p) =>
              p.wire.position.lerpVectors(p.exploded, p.collapsed, k),
            );

          const mat = sys.line!.material as THREE.LineBasicMaterial;
          mat.opacity = 1 - k;
          mat.needsUpdate = true;
        },
        onComplete: () => {
          explodeMap.get(sys.key)!.forEach((p) => {
            p.wire.visible = false;
            p.original.visible = true;
          });
          sys.line!.visible = false;
          activeSubsystem = null;
        },
      });
    });

    tl.play();
  }

  function render() {
    if (destroyed) return;

    rafId = requestAnimationFrame(render);
    if (robot && allowRotation) robot.rotation.z += 0.008;

    SUBSYSTEMS.forEach((sys) => {
      if (!sys.line || !sys.anchor || !sys.hudAnchor || !sys.line.visible)
        return;

      const start = sys.anchor.getWorldPosition(tempVec);
      const end = sys.hudAnchor.getWorldPosition(tempVec2);
      const positions = sys.line.geometry.attributes.position
        .array as Float32Array;
      positions[0] = start.x;
      positions[1] = start.y;
      positions[2] = start.z;
      positions[3] = end.x;
      positions[4] = end.y;
      positions[5] = end.z;
      sys.line.geometry.attributes.position.needsUpdate = true;
    });

    renderer.render(scene, camera);
  }
</script>

<div class="relative w-full h-full">
  <canvas bind:this={canvasEl} class="w-full h-full"></canvas>

  {#if browser && activeSubsystem}
    {@const sys = SUBSYSTEMS.find((s) => s.key === activeSubsystem)}

    {#if sys && sys.hudAnchor}
      {@const p = worldToScreen(sys.hudAnchor.getWorldPosition(tempVec))}

      {#if p}
        <div
          class="absolute px-4 py-3 rounded-lg pointer-events-none
          bg-black/50 backdrop-blur-xl border border-white/10
          text-xs text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] animate-hud"
          style="
            left: {p.x}px;
            top: {p.y}px;
            transform: translate(-50%, -50%);
          "
        >
          <div class="font-bold tracking-widest">{sys.label}</div>
          <div class="opacity-70 mt-1">{sys.description}</div>
        </div>
      {/if}
    {/if}
  {/if}
</div>

<style>
  @keyframes hud {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
      filter: blur(4px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
      filter: blur(0);
    }
  }
  .animate-hud {
    animation: hud 0.45s ease forwards;
  }
</style>
