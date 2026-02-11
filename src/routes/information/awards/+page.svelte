<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from "svelte";
  import { animate, stagger } from "animejs";

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
  <title>Team 1540 | Awards & Publicity</title>
</svelte:head>

<Navbar active="awards" />

<section class="relative flex flex-col items-center justify-center text-center py-24 px-6">
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
    bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
    bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      Awards & Publicity
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
    >
      something catchy
    </p>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 pt-10 pb-0">
  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">FIRST Robotics Competition Awards</span>
    <div class="grow border-t border-gray-400"></div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6">
  <ul class="list-inside text-white text-xl space-y-2">
    <li>2024 Wilsonville Event Winner</li>
    <li>2024 PNW District Event Winner</li>
    <li>2024 Excellence in Engineering Award</li>
    <li>2023 World Championship Innovation in Control</li>
    <li>2023 OSF Event Finalist</li>
    <li>2023 Gracious Professionalism Award</li>
    <li>2023 Quality Award</li>
    <li>2023 CAIS District Event Winner</li>
    <li>2023 Industrial Design Award</li>
    <li>2022 Imagery Award PNW Championships</li>
    <li>2022 District Finalist</li>
    <li>2022 Autonomous Award</li>
    <li>2020 Qualifying Tournament #1 Ranked team (Season cut short)</li>
    <li>2020 World Dean’s List Winner - Tiffany Toh</li>
    <li>2020 Autonomous Award</li>
    <li>2019 Qualifying Tournament #1 Ranked team x 2</li>
    <li>2019 Championship alliance captain</li>
    <li>2019 Quality Award</li>
    <li>2018 Championship division finalists</li>
    <li>2017 Championship Engineering Inspiration</li>
    <li>2017 Chairman’s Award PNW Championships</li>
    <li>2017 Championship quarter finalist</li>
    <li>2017 District finalist</li>
    <li>2016 Chairman’s Award PNW Championships</li>
    <li>2016 Championship quarter finalist</li>
    <li>2016 Innovation in Controls - World Championship</li>
    <li>2016 District Champions - Oregon City</li>
    <li>2015 Chairman’s Award PNW Championships</li>
    <li>2015 World Dean’s List Finalist - Jacob Bendicksen</li>
    <li>2015 Engineering Inspiration, Wilsonville</li>
    <li>2014 Chairman’s Award PNW Championships</li>
    <li>2014 Innovation in Controls World Championships</li>
    <li>2014 Innovation in Controls World Championships</li>
    <li>2013 Chairman’s Award Oregon</li>
    <li>2013 Finalist Oklahoma</li>
    <li>2012 Chairman’s Award Oklahoma</li>
    <li>2012 Winner Oklahoma</li>
    <li>2012 World Dean’s List Winner - Marina Dimitrov</li>
    <li>2011 Alliance Captain & Finalist San Diego</li>
    <li>2011 Innovation in Controls Award San Diego</li>
    <li>2010 Chairman’s Award Oregon</li>
    <li>2010 Winner & Captain Colorado</li>
    <li>2010 Dean’s List Finalist – Henry Gordon</li>
    <li>2009 Engineering Inspiration Award</li>
    <li>2008 Engineering Inspiration Award</li>
    <li>2008 Winner & Captain Oregon</li>
    <li>2007 Chairman’s Award, Oregon</li>
    <li>2007 Finalist & Captain Oregon</li>
    <li>2005 Rookie Inspiration Award, PNW</li>
    <li>2005 Best Website, Region & World Championship</li>
  </ul>
</section>

<section class="max-w-6xl mx-auto px-6 pt-10 pb-0">
  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">Community Engineering Awards</span>
    <div class="grow border-t border-gray-400"></div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6">
  <ul class="list-inside text-white text-xl space-y-2">
    <li>2022 SnapRamp (Source America Challenge, Conrad Challenge)</li>
    <li>2021 ZipBag (1st place & People’s Choice, Source America Challenge)</li>
    <li>2021 4T Thread Trimmer (Source America Challenge)</li>
    <li>2021 TaskTime (Source America Challenge)</li>
    <li>2020 cTrace (internal CG app)</li>
    <li>2019 AbleMail (Congressional App Challenge Winner)</li>
    <li>
      2018 JonApp (Congressional App Challenge Winner, Source America Challenge)
    </li>
    <li>2018 WashPod (Lexus Eco Challenge Winner)</li>
    <li>2018 Water Wand (Surfrider Foundation)</li>
    <li>2017 JuiceBox (Lexus Eco Challenge Winner)</li>
    <li>2016 Lost Exhaust (Lexus Eco Challenge Winner)</li>
    <li>2015 Water Trotter (1st place, Clean Tech Challenge)</li>
    <li>2014 ScumBot (MIT InvenTeam Grant Recipient)</li>
  </ul>
</section>

<section class="max-w-6xl mx-auto px-6 pt-10 pb-0">
  <div class="relative flex py-5 items-center">
    <div class="grow border-t border-gray-400"></div>
    <span class="shrink mx-4 text-gray-400">Team Publicity</span>
    <div class="grow border-t border-gray-400"></div>
  </div>
</section>

<section class="max-w-6xl mx-auto px-6 pb-12">
  <div class="space-y-4 text-white text-xl">
    <a
      href="https://www.congressionalappchallenge.us/19-OR03/"
      class="underline hover:text-[#F6B14B]"
      >AbleMail Wins Rep. Blumenauer’s (OR-03) 2019 Congressional App Challenge</a
    >
    <a
      href="https://www.oregonlive.com/business-watch/2017/02/portland_teens_win_10000_prize.html"
      class="underline hover:text-[#F6B14B]"
      >Portland Teens Win $10,000 Prize for Pod-House Power Invention</a
    >
    <a
      href="https://www.wweek.com/culture/2017/03/09/high-school-students-invention-is-providing-power-to-portland-homeless/"
      class="underline hover:text-[#F6B14B]"
    >
      High School Students' Invention Is Providing Power to Portland Homeless
    </a>
    <a
      href="https://www.oregonlive.com/portland/2017/03/high_school_students_provide_j.html"
      class="underline hover:text-[#F6B14B]"
      >Portland teens' solar device gives electricity to homeless</a
    >
    <a
      href="https://gazettetimes.com/news/local/crescent-valley-robotics-focused-on-developing-freshmen/article_d6b76612-ea0b-551e-9fc2-936d60e316a0.html"
      class="underline hover:text-[#F6B14B]"
      >Crescent Valley robotics focused on developing freshmen</a
    >
    <a
      href="https://www.oregonlive.com/education/2015/01/two_middle_school_teams_one_fr.html"
      class="underline hover:text-[#F6B14B]"
    >
      Two Oregon robotics teams, one from Catlin Gabel, one all children of Intel employees, win state title, head to world competition
    </a>
    <p class="font-[Poppins] text-lg text-gray-400">Letter from city commissioner Amanda Fritz</p>
    <a
      href="https://www.oregonlive.com/north-of-26/2013/10/catlin_gabel_school_team_gets.html"
      class="underline hover:text-[#F6B14B]"
      >Catlin Gabel School team gets $10,000 grant for ScumBot project</a
    >
    <a
      href="https://www.oregonlive.com/my-north-of-26/2012/01/local_student_revives_an_old_f.html"
      class="underline hover:text-[#F6B14B]"
      >Catlin Gabel student revives an old friend of TVF&R</a
    >
    <a
      href="https://www.oregonlive.com/my-north-of-26/2010/11/girls_rock_in_robotics.html"
      class="underline hover:text-[#F6B14B]"
      >Girls rock in robotics at Catlin Gabel competition</a
    >
  </div>
</section>

<Footer />

<style>
  :global(body) {
    margin: 0;
    background-color: #1c1c1c;
  }
  ul li {
    margin-bottom: 1rem;
  }
</style>