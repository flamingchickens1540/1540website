<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import CollapseSection from "$lib/components/CollapseSection.svelte";
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

    animate(".form-section", {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 800,
      delay: 600,
      easing: "easeOutExpo",
    });

    animate(".faq-item", {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(150),
      easing: "easeOutExpo",
    });
  });

  onMount(() => {
    const faqToggles = document.querySelectorAll(".faq-toggle");
    faqToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;
        if (content !== null) {
          content.classList.toggle("hidden");
        }
      });
    });
  });
</script>

<svelte:head>
  <title>Team 1540 | Contact Us</title>
</svelte:head>

<Navbar active="contact" />

<section
  class="relative flex flex-col items-center justify-center text-center pt-32 pb-0 px-6"
>
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
      bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
      bg-clip-text text-transparent animate-glow uppercase tracking-wider
      drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      Contact Team 1540
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white
      drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
    >
      Sponsors. Students. Media. Teams.
    </p>
  </div>
</section>

<section class="flex pt-16 max-w-7xl mx-auto px-6 pb-16 gap-8">
  <div
    class="form-section flex-1 max-w-3xl mx-auto bg-[#2a2a2a] text-white
    p-10 rounded-lg shadow-lg"
  >
    <form action="#">
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            for="first_name"
            class="block text-sm font-[Poppins] text-gray-400 mb-2 uppercase tracking-wide"
          >
            First Name *
          </label>
          <input
            type="text"
            id="first_name"
            required
            class="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#F6B14B]"
          />
        </div>

        <div>
          <label
            for="last_name"
            class="block text-sm font-[Poppins] text-gray-400 mb-2 uppercase tracking-wide"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="last_name"
            required
            class="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-[#F6B14B]"
          />
        </div>
      </div>

      <div class="mb-6">
        <label
          for="email"
          class="block text-sm font-[Poppins] text-gray-400 mb-2 uppercase tracking-wide"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          class="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#F6B14B]"
        />
      </div>

      <div class="mb-6">
        <label
          for="organization"
          class="block text-sm font-[Poppins] text-gray-400 mb-2 uppercase tracking-wide"
        >
          Organization / Company (if applicable)
        </label>
        <input
          type="text"
          id="organization"
          class="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#F6B14B]"
        />
      </div>

      <div class="mb-6">
        <label
          for="inquiry_type"
          class="block text-sm font-[Poppins] text-gray-400 mb-2 uppercase tracking-wide"
        >
          Inquiry Type *
        </label>
        <select
          id="inquiry_type"
          required
          class="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#F6B14B]"
        >
          <option value="">Select an option</option>
          <option value="student">Prospective Student</option>
          <option value="sponsor">Sponsorship / Partnership</option>
          <option value="mentor">Mentorship</option>
          <option value="media">Media / Press</option>
          <option value="team">Other Robotics Team</option>
          <option value="general">General Question</option>
        </select>
      </div>

      <div class="mb-6">
        <label
          for="subject"
          class="block text-sm font-[Poppins] text-gray-400 mb-2 uppercase tracking-wide"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          required
          class="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#F6B14B]"
        />
      </div>

      <div class="mb-8">
        <label
          for="message"
          class="block text-sm font-[Poppins] text-gray-400 mb-2 uppercase tracking-wide"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows="5"
          required
          class="w-full p-3 bg-[#1c1c1c] border border-gray-700 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-[#F6B14B]"
          placeholder="Tell us how we can help..."
        ></textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="w-full py-4 bg-[#F6B14B] text-[#1c1c1c] font-[Teko]
          uppercase text-xl rounded-lg hover:scale-[1.02]
          transition-all duration-300 shadow-lg"
          onclick={() => {
            const fields = [
              "first_name",
              "last_name",
              "email",
              "organization",
              "inquiry_type",
              "subject",
              "message",
            ];

            const values = Object.fromEntries(
              fields.map((id) => {
                const el = document.getElementById(id) as
                  | HTMLInputElement
                  | HTMLTextAreaElement
                  | HTMLSelectElement;
                return [id, el?.value];
              }),
            );

            console.log(values);

            fields.forEach((id) => {
              const el = document.getElementById(id) as
                | HTMLInputElement
                | HTMLTextAreaElement
                | HTMLSelectElement;
              if (el) el.value = "";
            });
          }}
        >
          Send Message
        </button>
      </div>
    </form>
  </div>

  <div
    class="form-section flex-1 max-w-3xl mx-auto bg-[#2a2a2a]
    text-white p-8 rounded-lg shadow-lg"
  >
    <h2 class="text-3xl font-[Teko] font-medium text-gray-200 mb-4">
      Frequently Asked Questions
    </h2>

    <div class="space-y-4">
      <CollapseSection
        title="What is the time commitment?"
        items={[
          `Members on the Varsity team (1540) are required to log 50 hours in
          the fall to be on team during the build season and another 50 hours
          are required during the build season to be allowed to miss school to
          attend events.`,

          `Community Engineering commitments are based on the project and
          student schedules, but you can expect to put in around 50 hours over
          the course of the year.`,

          `We also have all-team meetings once a week during the school day,
          which usually last around 30 minutes.`,
        ]}
      />

      <CollapseSection
        title="What happens after I register?"
        items={[
          `We will contact you in the first few weeks of the school year with
            more information. There is no up-front obligation: you are free to
            try out various departments before the Nov 1st cutoff.`,
        ]}
      />

      <CollapseSection
        title="When does the team meet?"
        items={[
          `The team meets once a week during the school day. Time and location
            will be announced at the beginning of the year. Meetings are
            mandatory.`,
        ]}
      />

      <CollapseSection
        title="How much does it cost?"
        items={[
          `For robotics, there is an activity fee of $350 in the fall and $350
            in the spring to cover material and registration costs. Community
            Engineering is $350 for the year, and waived for students
            participating in both.`,
          `There is no obligation at this time, but fees will be charged to
            those who remain a part of the program after November 1st.`,
          `Financial aid is available, contact Kevin Forbes
            (forbesk@catlin.edu) for more information.`,
        ]}
      />

      <CollapseSection
        title="I don't attend the school, can I join?"
        items={[
          `Unfortunately, you must be actively enrolled at Catlin Gabel to join
            Team 1540.`,
        ]}
      />

      <CollapseSection
        title="What grades can join the team?"
        items={[`Team 1540 is currently accepting members from grades 9-12.`]}
      />

      <CollapseSection
        title="I play sports. Can I join?"
        items={[
          `Yes! There are many opportunities to participate in robotics while
            still participating in sports.`,
        ]}
      />

      <CollapseSection
        title="I've never done robotics before. Can I join?"
        items={[
          `Yes! We will help you learn new skills needed to participate. No
            prior experience required; this is how you build it.`,
        ]}
      />
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
