<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import AnimatedCounter from "$lib/components/AnimatedCounter.svelte";
import { animate, stagger } from "animejs";
  import { onMount } from "svelte";

  let sponsors = ['gay', ':3']

  onMount(() => {
    animate(".hero-line", {
      translateY: [80, 0],
      opacity: [0, 1],
      delay: stagger(200),
      easing: "easeOutExpo",
    });
  });
</script>

<svelte:head>
  <title>Team 1540 | The Flaming Chickens</title>
</svelte:head>

<Navbar active="home" />

<section
  class="relative flex items-center justify-center text-center py-24 px-6
         before:absolute before:inset-0
         before:bg-[url('src/lib/assets/kowalski-climb.png')]
         before:bg-center before:bg-no-repeat before:bg-cover
         before:contrast-50
         before:content-['']
         overflow-hidden"
>
  <div class="relative z-10">
    <h1
  class="hero-line font-medium font-[Teko] text-5xl md:text-7xl bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B] bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
>
  The Flaming Chickens
</h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
    >
      Built from Scratch
    </p>

    <div class="hero-line mt-8 flex justify-center gap-6">
      <a
        href="/register"
        class="px-8 py-3 border-2 border-white text-white font-[Teko] uppercase rounded-lg shadow hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
      >
        Join the Team
      </a>

      <a
        href="/information/about"
        class="px-8 py-3 border-2 border-white text-white font-[Teko] uppercase rounded-lg shadow hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"      >
        Learn More
      </a>
    </div>
  </div>
</section>

<section
  class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-10"
>
  <AnimatedCounter label="Years Active" value={20} />
  <AnimatedCounter label="Robots Built" value={36} />
  <AnimatedCounter label="Awards Won" value={65} />
</section>

<div
    class="grid grid-cols-2 md:grid-cols-4 gap-8"
    onintrostart={() =>
        animate(".sponsor", {
            opacity: [0, 1],
            translateY: [20, 0],
            delay: stagger(100),
            easing: "ease-out-cubic",
        })}
>
    {#each sponsors as s}
        <div class="sponsor p-4 bg-white/5 rounded text-center">
            {s}
        </div>
    {/each}
</div>