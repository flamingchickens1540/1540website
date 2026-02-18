<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Counter from "$lib/components/Counter.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { animate, stagger } from "animejs";
  import { onMount } from "svelte";
  import Robot from "$lib/components/Robot.svelte";

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
      translateY: [24, 0],
      delay: stagger(120),
      duration: 700,
      easing: "easeOutExpo",
    });
  }

  onMount(() => {
    animate(".hero-line", {
      translateY: [60, 0],
      opacity: [0, 1],
      delay: stagger(150),
      duration: 700,
      easing: "easeOutExpo",
    });
  });
</script>

<svelte:head>
  <title>Team 1540 | The Flaming Chickens</title>
</svelte:head>

<Navbar active="home" />

<section
  class="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden"
>
  <div class="relative z-10 flex flex-col items-center gap-6">
    <h1
      class="hero-line font-[Teko] text-6xl md:text-8xl uppercase tracking-wider
      bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
      bg-clip-text text-transparent"
    >
      Team 1540
    </h1>

    <h2 class="hero-line font-[Teko] text-3xl md:text-4xl text-white uppercase">
      The Flaming Chickens
    </h2>

    <p class="hero-line font-[Poppins] text-xl md:text-2xl text-gray-300">
      14× World Championship competitors.<br />
      Student-built robots. Pacific Northwest dominance.
    </p>

    <div class="hero-line mt-4 flex flex-wrap justify-center gap-6">
      <a
        href="/contact"
        class="px-8 py-3 border-2 border-white text-white font-[Teko]
        uppercase rounded-lg shadow transition-all duration-300
        hover:scale-105 hover:bg-[#f6b14b] hover:text-[#1c1c1c]
        hover:border-[#F6B14B]"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

<!-- robot here once i figure out how the hell i fix it -->

<section class="mx-auto px-6 py-20">
  <h2
    class="font-[Teko] text-4xl md:text-5xl uppercase text-[#F6B14B] text-center"
  >
    Built Differently
  </h2>

  <section
    class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-10"
  >
    <Counter label="Years of Competition" value={21} />
    <Counter label="Robots Built" value={36} />
    <Counter label="Awards Won" value={65} />
  </section>
  <section
    class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center py-10 content-center"
  >
    <Counter label="World Championship Appearances" value={14} />
    <Counter label="Non-Male Representation (%)" value={53} />
  </section>

  <p class="mt-6 text-lg text-gray-300 font-[Poppins] leading-relaxed">
    Welcome to the official website of Team 1540, the Flaming Chickens! We are a
    high school FIRST Robotics Competition team based in Portland, Oregon,
    dedicated to fostering a love for science, technology, engineering, and
    mathematics (STEM) in our members and the community. Through hands-on
    learning, mentorship, and teamwork, our students develop essential skills in
    engineering, programming, and leadership.
  </p>

  <p class="mt-6 text-lg text-gray-300 font-[Poppins] leading-relaxed">
    As passionate advocates for STEM education, Team 1540 engages in numerous
    outreach events and initiatives to inspire and support younger generations.
    With a strong track record of innovation and success, the Flaming Chickens
    are proud to represent our school and community in regional, national, and
    international robotics competitions.
  </p>

  <br />
  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">What is FIRST?</span>
    <div class="grow border-t border-gray-400"></div>
  </div>

  <div class="mb-4 rounded-2xl overflow-hidden border border-gray-800">
    <img
      src="/src/lib/assets/first.jpg"
      alt="Team with FIRST sign"
      class="w-full object-cover"
    />
  </div>

  <p class="text-lg text-gray-300 font-[Poppins] leading-relaxed">
    FIRST Robotics is a global organization dedicated to inspiring and engaging
    young minds in the field of robotics. FIRST (For Inspiration and Recognition
    of Science and Technology) strives to cultivate a passion for science,
    technology, engineering, and math (STEM) among students. Under strict rules,
    limited time and resources, teams of students are challenged to raise funds,
    design a team "brand," hone teamwork skills, and build and program
    industrial-size robots to play a difficult field game against like-minded
    competitors. It’s as close to real-world engineering as a student can get.
    Volunteer professional mentors lend their time and talents to guide each
    team.
  </p>

  <br />
  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">Adults Don’t Touch the Robot</span>
    <div class="grow border-t border-gray-400"></div>
  </div>

  <div class="mb-4 rounded-2xl overflow-hidden border border-gray-800">
    <img
      src="/src/lib/assets/team.jpg"
      alt="Team with CRESCENDO award"
      class="w-full object-cover"
    />
  </div>

  <p class="text-lg text-gray-300 font-[Poppins] leading-relaxed">
    Catlin Gabel’s Engineering program is among the largest extracurricular
    activities on campus, with around 20% of the student body participating.<br
    />
    At Team 1540, adults don’t touch the robot. Mentors advise; students build.
  </p>

  <p class="mt-6 text-lg text-gray-300 font-[Poppins] leading-relaxed">
    Every competition robot, every line of code, every CAD model, and every
    nontechnical project is designed, fabricated, wired, and programmed by
    students. Our mentors from Catlin Gabel and local companies guide us, but
    when the robot hits the field, it represents 100% student work.
  </p>
  <p class="mt-6 text-lg text-gray-300 font-[Poppins] leading-relaxed">
    Competing in the FIRST Robotics Competition at the highest level requires
    technical precision, disciplined systems, and sustained excellence. For over
    two decades, we’ve built exactly that.
  </p>
  <br />

  <div class="flex justify-center">
    <a
      href="/history/robotics"
      class="mt-2 px-8 py-3 border-2 border-white text-white font-[Teko]
        uppercase rounded-lg shadow transition-all duration-300
        hover:scale-105 hover:bg-[#f6b14b] hover:text-[#1c1c1c]
        hover:border-[#F6B14B] text-center"
    >
      View Our Robots
    </a>
  </div>

  <h2
    class="font-[Teko] text-4xl md:text-5xl uppercase text-[#F6B14B] text-center mt-20"
  >
    More Than Robots
  </h2>

  <section
    class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-10 content-center"
  >
    <Counter label="Years Active" value={10} />
    <Counter label="Projects Built" value={16} />
    <Counter label="Community Engineering Awards ($)" value={60000} />
  </section>

  <p class="text-lg text-gray-300 font-[Poppins] leading-relaxed">
    While many know us for robotics, our engineering extends far beyond
    competition. Team 1540 has earned over $60,000 in awards for community
    engineering projects and outreach.
  </p>

  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">Community Engineering</span>
    <div class="grow border-t border-gray-400"></div>
  </div>

  <p class="text-lg text-gray-300 font-[Poppins] leading-relaxed">
    We have been using robotics and engineering to help our community ever since
    we innovated a robotic fire hydrant for our local fire department. Each
    year, students from Team 1540 have the opportunity to participate in
    different community engineering (CE) projects. Our projects develop
    solutions to help local communities by partnering with nonprofits, corporate
    partners, and other FIRST robotics teams. We often submit these projects to
    competitions like the Conrad Challenge, Clean Tech, and InvenTeam.
  </p>

  <p class="mt-6 text-lg text-gray-300 font-[Poppins] leading-relaxed">
    3x LEXUS ECO CHALLENGE WINNER<br />
    2x SOURCE AMERICA CHALLENGE WINNER<br />
    2x CONGRESS APP CHALLENGE WINNER<br />
    1x CLEAN TECH CHALLENGE WINNER<br />
    1x MIT INVENTEAM GRANT RECIPIENT
  </p>

  <p class="mt-6 text-lg text-gray-300 font-[Poppins] leading-relaxed">
    We create robots.<br />
    We also create solutions.
  </p>

  <div class="flex justify-center">
    <a
      href="/history/robotics"
      class="mt-2 px-8 py-3 border-2 border-white text-white font-[Teko]
        uppercase rounded-lg shadow transition-all duration-300
        hover:scale-105 hover:bg-[#f6b14b] hover:text-[#1c1c1c]
        hover:border-[#F6B14B] text-center"
    >
      View Our CE Projects
    </a>
  </div>

  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">Outreach</span>
    <div class="grow border-t border-gray-400"></div>
  </div>

  <p class="text-lg text-gray-300 font-[Poppins] leading-relaxed">
    Since 2006, we have mentored over 15 teams and created community resources
    such as STEMcentric.
  </p>

  <p class="mt-6 text-lg text-gray-300 font-[Poppins] leading-relaxed">
    As a team, we pride ourselves in our engagement with the community. We
    engage in mentoring teams, presenting at events, creating resources for the
    community, and so much more.
  </p>

  <div class="flex justify-center">
    <a
      href="/history/robotics"
      class="mt-2 px-8 py-3 border-2 border-white text-white font-[Teko]
        uppercase rounded-lg shadow transition-all duration-300
        hover:scale-105 hover:bg-[#f6b14b] hover:text-[#1c1c1c]
        hover:border-[#F6B14B] text-center"
    >
      View Our Outreach Projects
    </a>
  </div>
</section>

<section id="why1540" class="mx-auto px-6 py-20">
  <div class="text-center mb-12">
    <h2
      class="font-[Teko] text-4xl md:text-5xl uppercase text-[#F6B14B] text-center"
    >
      Backed by Industry Leaders
    </h2>
    <p class="mt-4 text-gray-400 font-[Poppins]">
      Elite performance requires elite support.
    </p>
  </div>

  <div
    class="grid grid-cols-2 md:grid-cols-3 gap-8"
    onintrostart={introSponsors}
  >
    {#each sponsors as sponsor}
      <div
        class="sponsor p-6 rounded-xl text-center font-[Poppins] text-white
        bg-white/5 backdrop-blur-md border border-gray-700
        hover:border-[#F6B14B]/50 hover:shadow-lg hover:shadow-[#F6B14B]/20
        transition-all duration-300"
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
