<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import { onMount } from "svelte";
  import { animate, stagger } from "animejs";

  onMount(() => {
    animate(".hero-line", {
      translateY: [60, 0],
      opacity: [0, 1],
      delay: stagger(200),
      duration: 700,
      easing: "easeOutExpo",
    });
  });
</script>

<svelte:head>
  <title>Team 1540 | Outreach</title>
</svelte:head>

<Navbar active="outreach" />

<section
  class="relative flex flex-col items-center justify-center text-center pt-24 pb-8 px-6"
>
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
      bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
      bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      OUTREACH
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md"
    >
      Engaging. Mentoring. Inspiring.
    </p>
  </div>
</section>

<div class="mb-4 mx-6 rounded-2xl overflow-hidden border border-gray-800">
  <img
    src="/src/lib/assets/outreach.jpg"
    alt="Team at an outreach event"
    class="w-full object-cover"
  />
</div>

<p class="hmt-6 text-gray-300 font-[Poppins] max-w-3xl mx-auto">
  As a team, we pride ourselves on our engagement with the community. From
  mentoring teams and presenting at events to creating educational resources, we
  are committed to expanding access to STEM and robotics.
</p>

<section class="max-w-5xl mx-auto px-6 pb-20 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">Open Houses</h3>

  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    <a href="https://www.catlin.edu/" class="text-[#F6B14B]" target="_blank"
      >Catlin Gabel School</a
    >
    is a private school that welcomes prospective families through open houses each
    year. Students and faculty work together to showcase the Catlin community: from
    academic classes to assemblies and extracurriculars.
  </p>

  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    Our robotics team participates in the majority of these events,
    demonstrating that engineering and hands-on STEM education are vital parts
    of the Catlin experience.
    <br />

    <a
      href="https://www.oregonlive.com/my-north-of-26/2012/01/local_student_revives_an_old_f.html"
      target="_blank"
      class="underline hover:text-[#F6B14B]"
      >2012 Catlin Gabel student revives an old friend of TVF&R</a
    >
  </p>
</section>

<section class="mx-auto px-6 pb-20 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">
    Competition Outreach
  </h3>

  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    During the regular spring season, we attend multiple competitions where we
    actively engage in outreach with other teams, mentors, and judges. We share
    knowledge, exchange ideas, and build lasting connections within the robotics
    community.
  </p>
</section>

<section class="mx-auto px-6 pb-20 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">Community Events</h3>

  <div class="mb-4 mx-6 rounded-2xl overflow-hidden border border-gray-800">
    <img
      src="/src/lib/assets/girlsgen.jpg"
      alt="Girl's Gen team 2025"
      class="w-full object-cover"
    />
  </div>

  <div class="mt-10 grid md:grid-cols-2 gap-8">
    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">Girl’s Generation</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        Girl’s Generation is an outreach initiative designed to empower and
        inspire young women in STEM. Through workshops and hands-on activities,
        participants explore engineering in a supportive and collaborative
        environment.<br class="mb-4" />
        <a
          href="https://www.oregonlive.com/my-north-of-26/2010/11/girls_rock_in_robotics.html"
          class="underline hover:text-[#F6B14B]"
          target="_blank"
          >Girls rock in robotics at Catlin Gabel competition</a
        >
      </p>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">BunnyBots</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        BunnyBots is our annual preseason robotics competition that brings
        together local teams for a fun, competitive, and skill-building
        experience. The event strengthens collaboration across the region and
        prepares teams for the official build season.
      </p>
    </div>
  </div>
</section>

<section class="max-w-5xl mx-auto px-6 pb-20 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">STEMcentric</h3>

  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    STEMcentric is our LEGO tutorial channel focused on teaching students how to
    program using NXT and EV3 platforms. Through engaging and interactive
    videos, students learn how to control and program their LEGO robots, from
    beginner concepts to advanced topics like sensors and autonomous routines.
  </p>

  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    With over one million views, our online LEGO programming tutorials have
    supported teachers and students around the world. Regardless of prior
    robotics experience, educators can use these resources as an effective tool
    to inspire students and introduce them to STEM.
  </p>

  <div
    class="mt-8 flex flex-col md:flex-row justify-center gap-6 text-[#F6B14B] font-[Teko] uppercase text-xl"
  >
    <a href="https://www.youtube.com/@STEMcentric">NXT Tutorial →</a>
    <a href="https://www.youtube.com/@daleyocum">EV3 Tutorial →</a>
  </div>
</section>

<section class="max-w-5xl mx-auto px-6 pb-24 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">FLL Events</h3>

  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    Each year, we host one to two FIRST LEGO League (FLL) tournaments at Catlin
    Gabel School, along with FLL showcases that give students the opportunity to
    present their projects and demonstrate their robots after the main season
    concludes.
  </p>
</section>

<Footer />

<style>
  :global(body) {
    margin: 0;
    background-color: #1c1c1c;
  }
</style>
