<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Counter from "$lib/components/Counter.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Robot from "$lib/components/Robot.svelte";
  import { animate, stagger } from "animejs";
  import { onMount } from "svelte";

  let sponsors = [
    "Catlin Gabel School",
    "Gene Haas Foundation",
    "Autodesk",
    "H.E.L.P., The Charity",
    "Lam Research",
    "Xerox",
  ];

  function introSponsors() {
    animate(".sponsor", {
      opacity: [0, 1],
      translateY: [16, 0],
      scale: [0.98, 1],
      filter: ["blur(4px)", "blur(0px)"],
      boxShadow: [
        "0 0 0 rgba(246,177,75,0)",
        "0 8px 24px rgba(246,177,75,0.12)",
      ],
      delay: stagger(120),
      duration: 650,
      easing: "easeOutCubic",
    });
  }

  onMount(() => {
    animate(".hero-line", {
      translateY: [80, 0],
      opacity: [0, 1],
      delay: stagger(200),
      duration: 650,
      easing: "easeOutExpo",
    });
  });
</script>

<svelte:head>
  <title>Team 1540 | The Flaming Chickens</title>
</svelte:head>

<Navbar active="home" />

<section
  class="relative flex flex-col items-center justify-center text-center py-24 px-6
  overflow-hidden before:absolute before:inset-0
  before:bg-center before:bg-no-repeat before:bg-cover before:contrast-50
  before:content-['']"
>
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
      bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
      bg-clip-text text-transparent animate-glow uppercase tracking-wider
      drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      The Flaming Chickens
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md
      stroke-[0.5px] stroke-[#1C1C1C]"
    >
      Built from Scratch
    </p>

    <div class="hero-line mt-6 flex justify-center gap-6">
      <a
        href="/register"
        class="px-8 py-3 border-2 border-white text-white font-[Teko]
        uppercase rounded-lg shadow hover:bg-white hover:text-[#1c1c1c]
        transition-all duration-300"
      >
        Join the Team
      </a>

      <a
        href="/information/about"
        class="px-8 py-3 border-2 border-white text-white font-[Teko]
        uppercase rounded-lg shadow hover:bg-white hover:text-[#1c1c1c]
        transition-all duration-300"
      >
        Learn More
      </a>
    </div>
  </div>
</section>

<section
  class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-10"
>
  <Counter label="Years Active" value={21} />
  <Counter label="Robots Built" value={36} />
  <Counter label="Awards Won" value={65} />
</section>

<section class="max-w-6xl mx-auto px-6 py-10">
  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">Our Sponsors</span>
    <div class="grow border-t border-gray-400"></div>
  </div>

  <div
    class="grid grid-cols-2 md:grid-cols-3 gap-8"
    onintrostart={introSponsors}
  >
    {#each sponsors as sponsor}
      <div
        class="sponsor-card p-5 rounded-xl text-center font-[Poppins] text-white
        bg-white/5 backdrop-blur-md border border-gray-400 shadow-inner
        transition-all duration-300 hover:bg-white/10 hover:border-[#F6B14B]/40
        hover:shadow-lg hover:shadow-[#F6B14B]/20
        flex items-center justify-center"
      >
        {sponsor}
      </div>
    {/each}
  </div>
</section>

<Footer />

<style>
  :global(body) {
    margin: 0;
    background-color: #1c1c1c;
  }
</style>
