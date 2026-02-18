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
  <title>Team 1540 | Bunnybots</title>
</svelte:head>

<Navbar active="bunnybots" />

<section
  class="relative flex flex-col items-center justify-center text-center pt-24 pb-8 px-6"
>
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
    bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
    bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      BUNNYBOTS 2025
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
    >
      Carrot Chaos
    </p>
  </div>
  <p class="hero-line mt-6 text-gray-400 font-[Poppins] max-w-3xl mx-auto">
    Alliances battle for bunny favor by launching “carrots” into their petting
    zoo while minibots support the cause.
  </p>
</section>

<div class="flex items-center justify-center pb-24">
  <img
    class="w-80 h-80"
    alt="Bunnybots Logo 2025"
    src="/src/lib/assets/bunnybots2025.png"
  />
</div>

<section class="max-w-5xl mx-auto px-6 pb-20 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">Results & Media</h3>

  <p class="mt-6 text-gray-400 font-[Poppins]">
    See match results and the recorded live stream below:
  </p>

  <div class="mt-8 flex flex-col md:flex-row justify-center gap-6">
    <a
      href="https://www.thebluealliance.com/event/2025orbb"
      class="text-[#F6B14B] font-[Teko] uppercase text-xl"
    >
      Match Results & Rankings (TBA)
    </a>
    <a
      href="https://www.youtube.com/live/kCvKrodbJr8"
      class="text-[#F6B14B] font-[Teko] uppercase text-xl"
    >
      Live Stream (YouTube)
    </a>
  </div>
</section>

<section class="max-w-5xl mx-auto px-6 pb-20 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">Event Dates</h3>

  <div class="mt-10 grid md:grid-cols-2 gap-8">
    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <a
        href="https://docs.google.com/document/d/1NqVmZ4HW0TZKDrdBiIJ6XkrO_dCnR3StM3cru7M66gM/edit?usp=sharing"
        class="font-[Teko] text-2xl text-[#F6B14B]">Oregon →</a
      >
      <p class="text-gray-400 font-[Poppins] mt-4">
        Catlin Gabel School<br />
        Portland, OR<br />
        December 13
      </p>
      <a
        href="https://forms.gle/BtXf8E6h8ZdYZEG68"
        class="mt-6 inline-block text-[#F6B14B] font-[Teko] uppercase"
      >
        Register →
      </a>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <a
        href="https://www.frc3218.org/bunnybots"
        class="font-[Teko] text-2xl text-[#F6B14B]">Washington →</a
      >
      <p class="text-gray-400 font-[Poppins] mt-4">
        Bonney Lake High School<br />
        Bonney Lake, WA<br />
        December 20
      </p>
      <a
        href="https://www.frc3218.org/bunnybots"
        class="mt-6 inline-block text-[#F6B14B] font-[Teko] uppercase"
      >
        Register →
      </a>
    </div>
  </div>
</section>

<section class="max-w-5xl mx-auto px-6 pb-24 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">Resources</h3>

  <div
    class="mt-10 grid md:grid-cols-2 gap-6 text-[#F6B14B] font-[Teko] uppercase text-xl"
  >
    <a
      href="https://docs.google.com/document/d/1ZImXE_zOINx79a8W_TCM3aLzRcb6L5WmAKApBRYJ_kY/edit?usp=sharing"
      >Game Manual</a
    >
    <a
      href="https://cad.onshape.com/documents/642b88347826d3bcc6e633e9/w/eb60b00ee2a42f4f55069e08/e/da9426052865263b69848c42?renderMode=0&uiState=68b5c092bb9df7b98db2db01"
      >Onshape Model</a
    >
    <a
      href="https://drive.google.com/drive/folders/1_CPWPvgJrDphLaCpRHYBo4l3h_yRjK6T?usp=sharing"
      >STEP Model / Drawings</a
    >
    <a href="https://www.chiefdelphi.com/t/bunnybots-2025/505718"
      >Official Q & A</a
    >
    <a
      href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYLEk6OfEXkJVHw1nZeUj8I-v9qCQCOH39zNAnzqd9i466teiSK16EvoIOxINbqLA8HZrdkt2JurZx/pubhtml?gid=395283885&single=true"
      >Registered Teams (OR)</a
    >
  </div>
</section>

<section class="max-w-4xl mx-auto px-6 pb-24 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">What is BunnyBots?</h3>
  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    Now entering its 16th year, BunnyBots is an integral part of many Oregon
    teams’ fall preparation for build season. Rookies develop machining and
    design fundamentals while veterans refine leadership and project management
    skills over the course of a full three-and-a-half-month build cycle in a
    lower-pressure environment.
  </p>
  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    Each year, Team 1540’s mentors and alumni design the game and provide the
    primary volunteer force to run the event. New FRC teams and members gain
    critical skills before the official season begins.
  </p>

  <p class="mt-6 text-gray-400 font-[Poppins] leading-relaxed">
    The game design process begins after competition season ends. Alumni and
    mentors brainstorm concepts and develop rules, which are released in early
    September. Registration opens on a first-come, first-served basis.
  </p>
</section>

<section class="max-w-4xl mx-auto px-6 pb-24 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">Program Impact</h3>

  <div class="mt-8 space-y-6 text-gray-400 font-[Poppins] leading-relaxed">
    <p>
      The BunnyBots program develops the technical foundation of rookie members
      while teaching veteran members leadership and project management skills.
      Rookies gain machining experience and design fundamentals to prepare for
      the intensity of build season.
    </p>

    <p>
      This preseason project strengthens team dynamics, increases rookie
      retention, and improves productivity. Mentors engage in hands-on preseason
      training, build stronger relationships with students, and prepare for the
      official build season.
    </p>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 pb-32 text-center">
  <h3 class="font-[Teko] text-4xl text-white uppercase">Previous Years</h3>

  <p class="mt-6 text-gray-400 font-[Poppins] max-w-3xl mx-auto">
    Explore past BunnyBots games and download complete rule sets. Future games
    are inspired by these events, but never identical.
  </p>

  <div class="mt-12 grid md:grid-cols-2 gap-8 text-left">
    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">
        2024 – Balloon-A-Palooza
      </h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        Bunnybots 2024, “Balloon-A-Palooza” was played on a carpeted competition
        field with two alliances of three robots each. Alliances autonomously
        placed balloon-bunnies into totes to elevate their score before pulling
        balloons from a central corral and scoring them in totes or low zones.
      </p>
      <div class="mt-6 flex gap-6 font-[Teko] uppercase text-[#F6B14B]">
        <a href="https://www.thebluealliance.com/event/2024orbb">Results</a>
        <a href="https://youtu.be/CN-v_x0tKrA">Live Stream</a>
        <a
          href="https://docs.google.com/document/d/150Onx2mld3fbUyDcNvxash_WiWKi9acEJVMp4FKZ_Ws/edit?usp=sharing"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2023 – Rabbit Roundup</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        Bunnybots 2023, “Rabbit Roundup” was played on a carpeted competition
        field with two alliances of three robots each. Teams collected yellow
        wiffle balls to shoot at targets mounted to opponent robots, brought
        captured bunnies to their home zones for extra points at the end of the
        match.
      </p>
      <div class="mt-6 flex gap-6 font-[Teko] uppercase text-[#F6B14B]">
        <a href="https://www.thebluealliance.com/event/2023orbb">Results</a>
        <a href="https://www.youtube.com/live/QxP-tWoO42E">Live Stream</a>
        <a
          href="https://docs.google.com/document/d/1sV4mFD8HMxusoQ0s2Kh9qcMsJYfh1TyOskX2dVHbl3w/edit"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">
        2022 – Totally Tubular
      </h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        BunnyBots 2022, “Totally Tubular” was played on a standard competition
        field with two alliances of 3 robots each. Teams collected tubes
        randomly placed on the field to place into scoring areas in the middle
        of the field. Bunnies could also be scored to double the points in a
        bin.
      </p>
      <div class="mt-6 flex gap-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://www.youtube.com/playlist?list=PL4NHbFGi3VjzZ-itL8P8UtX27Ef404P2z"
          >Live Stream</a
        >
        <a
          href="https://docs.google.com/document/d/1VOB0ZHq3EoizGnCoItG39bnBpNsXiQuJjNSs8ILUsz0/edit"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2021 – Splash’n Dash</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        BunnyBots 2021, “Splash’n Dash” was a water game played outside due to
        COVID concerns. Teams collected blue and red balls and placed them in
        crates while avoid water canons from opposing robots.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1dMIQFmQS5qcVmAkYuzQBkWJOXDZaUySgQGdzvfPZens/edit?usp=sharing"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2020 – Cancelled</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        With COVID-19, 2020’s BunnyBots had to be scrapped. A sad, sad day for
        all.
      </p>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2019 – Knockout</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        BunnyBots 2019 , “Knockout”, was played on a carpeted field with two
        alliances of three teams each. 120 2” wooden cubes are distributed among
        eight tubs starting straddling the midline lengthwise. These cubes score
        two points each for the alliance if, at the end of the game, they are in
        contact with a platform (called the bed) of one of the alliance’s
        robots. Bunnies act as spoilers and negate all the cubes collected by a
        particular robot.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1XWFQnptv_ObcPJ8a2sJQiFy_IAqlBvAFb6cXmz8Exfg/edit?usp=sharing"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2018 – Box ‘Em Up</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        BunnyBots 2018, Box ‘Em Up, was played on standard carpeted field with
        two alliances. 15 plastic crates from FIRST’s 2018 game “Power Up” were
        present on each half of the field. There are also 120 red racket balls
        and 120 blue racket balls placed by teams in the middle third of the
        field. The goal was to “claim” as many crates as possible by having the
        obvious majority of the balls supported by the crates be of your
        alliance’s color.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1Re33SrOL1ymZ3bB4WJHJ3uAM_lzh-Qviq32b2K_Eecg/edit?usp=sharing"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2017 – Hide and Seek</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        Hide and Seek was played by two alliances of three robots each on a
        FRC-sized field. During setup, each alliance places 10 stuffed bunnies
        into 20 buckets on their half of the field by hand. They can be as
        secretive as they like about which of the buckets on their half of the
        field have bunnies placed in them. After a 15 second autonomous period,
        the 2:15 teleop period begins. During teleop, robots seek to get as many
        bunnies as possible in contact with the carpet their half of the field.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1xf1Lrw6vRuilEYKbpzTX1HGIVlZkFlFHTXgRjSJUZ5Q/edit"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2016 – Round-a-BOUT</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        Round-a-BOUT was played by two alliances of three robots each. After a
        10 second autonomous period, the 2:20 teleop period begins. During
        teleop, robots race around the track in a figure-8 pattern trying to
        cross as many track lines as possible, all while dodging Nerf darts
        launched by other robots. Significant points are also awarded for
        depositing stuffed bunnies into a burrow. This was a fast paced game
        that put a premium on a agile, robust drive train and driving skill.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1ItMayhq-m5vM8F0JOjG9dMsjMT1eik94Yukpg8JIuLo/edit?usp=sharing"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2015 – Danger Zone</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        Danger Zone was played by two alliances of three robots each. After a 10
        second autonomous period, the 2:20 teleoperation period begins. During
        teleop, robots attempt to score as many touchdowns as possible by
        transporting foam footballs the length of the field to the alliance’s
        end zone. Additional points are awarded depending on how the scoring
        robot acquired the ball. Additionally, three stuffed bunnies start off
        in each alliance’s home zone. Bunnies score 10 points each in each
        alliance’s end zone at the end of the match.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://drive.google.com/file/d/1RRs5nAjphSSfkckiIisLcZKuWFD780XV/view?usp=sharing"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2014 – PANdemonium</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        PANdemonium was played by two alliances of three robots each. The goal
        of the game is to place as many team-provided “widgets” as possible onto
        the “pans” of the team’s robot, or that of their alliance partners,
        while simultaneously attempting to de-score the widgets on the robots of
        the opposing alliance.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/13c9ZSBSMToHzOLPph8ct8iC2epKX0bkkclfDrwY3iP4/edit?tab=t.0"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2013 – Pool Party</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        In "Pool Party" Three robots form an alliance in 3 vs 3 style on a full
        size field. Vaguely similar to pool, the object of the game is to score
        more balls of your alliance’s color in pockets than the opposing
        alliance.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1N1gYudEGB8ZhSYmRKk8wzWx-TWIjOkAGCJQa4hA8trA/edit?usp=drive_link"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">
        2012 – Ping Pong Panic
      </h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        This game, Ping Pong Panic" involved Ping Pong balls, and a lot of them.
        The matches started with a 15 second autonomous period during which
        robots tried to get bunnies into the goals, which were 30" square
        plywood bases with raised edges. For the rest of the match, robots tried
        to get Ping Pong balls into the goals, along with (optionally) shooting
        other robots with the Ping Pong balls for point deductions against the
        hit robots.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1IcSL8D2RIc-4V1F46qfvSHmD2gZuE6aEcsrj_PY1l7o/edit?usp=sharing"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">
        2011 – Bunnies & Darts
      </h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        This game was all about bunnies and Nerf darts. Teams tried to get as
        many bunnies as they could onto their side of the field, while also
        defending their bunnies and shooting other robots with Nerf darts. The
        result was a bunch of FRC-class robots with Nerf guns strapped on, which
        was pretty entertaining to watch.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1M2vRcp6Nm2qvxWkt91a9zhbJoeAv0156PARb80rYhvI/edit?usp=drive_link"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2010 – Widgets</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        This game had an interesting interactive element, 'widgets.' Widgets
        were items that teams brought, and they could be just about anything
        that could fit into an 18" cube. This gave teams an additional
        engineering challenge beyond just building robots, as some tried to
        build self-scoring widgets. Bunnies were treated as 'super-widgets.' The
        variation in game piece size gave rise to some very neat and
        sophisticated manipulators.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://docs.google.com/document/d/1jHoA88FeKk59xDGF-OokdfMqPuKlyp5bM-75_nf2u9s/edit?usp=drive_link"
          >Rules</a
        >
      </div>
    </div>

    <div class="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800">
      <h4 class="font-[Teko] text-2xl text-[#F6B14B]">2009 – Bolas</h4>
      <p class="mt-4 text-gray-400 font-[Poppins] text-sm leading-relaxed">
        This game had some very unusual game pieces, 'bolas.' Bolas were two
        tennis balls strung together with nylon cord, and they had to be hung on
        racks made of PVC pipe. Adding to the challenge was the fact that other
        pieces 'spoilers,' could completely eliminate any bolas hung on one
        level of the rack, so strategically this was an interesting game. It was
        a robotic version of the popular backyard game Ladder Ball.
      </p>
      <div class="mt-6 font-[Teko] uppercase text-[#F6B14B]">
        <a
          href="https://drive.google.com/file/d/1xWi0dGbigHpE9oCBwKcoxkUn-CgsJJF1/view?usp=drive_link"
          >Rules</a
        >
      </div>
    </div>
  </div>
</section>

<Footer />

<style>
  :global(body) {
    margin: 0;
    background-color: #1c1c1c;
  }
</style>
