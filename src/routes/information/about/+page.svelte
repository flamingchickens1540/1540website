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
    <title>Team 1540 | About Us</title>
</svelte:head>

<Navbar active="about" />

<section
    class="relative flex flex-col items-center justify-center text-center py-24 px-6"
>
    <div class="relative z-10 flex flex-col items-center gap-4">
        <h1
            class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
    bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
    bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
        >
            About Us
        </h1>

        <p
            class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
        >
            Our Mission, Our Values, Our Vision
        </p>
    </div>
</section>

<section class="max-w-6xl mx-auto px-6 py-10">
    <h2 class="text-3xl font-[Teko] text-[#F6B14B]">Our Story</h2>
    <p class="text-white text-xl mt-4">
        Catlin Gabel’s Engineering program is among the largest extracurricular
        activities on campus, with around 20% of the student body participating.
        It’s also one of the most inclusive engineering programs around, with
        50% of our team being non-male.
    </p>
    <p class="text-white text-xl mt-4">
        Many know us as a FIRST Robotics team, but we are also deeply involved
        with community engineering projects. In fact, we’ve earned over $60,000
        in prizes for our projects over the years. And on the Robotics side, we
        frequently qualify for the world robotics competition in Houston, having
        gone 14 times.
    </p>
    <p class="text-white text-xl mt-4">
        On our team, adults don’t touch the robot or the keyboard. Our mentors
        from the Catlin Gabel faculty and local companies help us develop our
        skills and are available for questions and advice, but our competition
        robots and community projects are entirely student designed, built, and
        programmed.
    </p>
    <p class="text-white text-xl mt-4">
        While our team has done extremely well at robotics competitions and
        various other STEM contests over the years, that success is not due to a
        single-minded drive toward winning, but due to our team’s focus on
        building up a strong team year after year and using our collective
        expertise to build amazing robots and innovative community engineering
        projects. This extends even beyond our team, as we are known for helping
        other teams with their expertise, knowledge, and the occasional spare
        part.
    </p>
    <p class="text-white text-xl mt-4">
        Recognizing the need for learning and practice opportunities for our new
        members, we started two regional events, and currently run one of them.
        The first event we created was BunnyBots which is an easy, small scale,
        off-season competition to get new members the expertise they need before
        the main season. This is one of our key methods of training new members,
        and is part of our skills certification standards. The second event we
        created was Girls Generation, which is an off-season competition
        entirely for non-male team members to get experience in roles they may
        not otherwise get a chance to do, enabling them to work towards these
        roles in future seasons. These events have been the inspiration for
        other FRC teams across the country and many spinoffs of these events
        have been created.
    </p>
</section>

<Footer />

<style>
:global(body) {
  margin: 0;
  background-color: #1c1c1c;
}
</style>