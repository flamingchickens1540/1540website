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
  <title>Team 1540 | Join Us</title>
</svelte:head>

<Navbar active="register" />

<section
  class="relative flex flex-col items-center justify-center text-center pt-32 pb-0 px-6"
>
  <div class="relative z-10 flex flex-col items-center gap-4">
    <h1
      class="hero-line font-medium font-[Teko] text-5xl md:text-7xl
      bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B]
      bg-clip-text text-transparent animate-glow uppercase tracking-wider drop-shadow-lg [-webkit-text-stroke:0.5px_#1C1C1C]"
    >
      Join Team 1540
    </h1>

    <p
      class="hero-line font-[Poppins] text-xl md:text-2xl text-white drop-shadow-md stroke-[0.5px] stroke-[#1C1C1C]"
    >
      Become Part of Something Amazing
    </p>
  </div>
</section>

<section class="flex pt-16 max-w-7xl mx-auto px-6 pb-6 gap-8">
  <div
    class="form-section flex-1 max-w-3xl mx-auto bg-[#333] text-[#1c1c1c] p-8 rounded-lg shadow-lg"
  >
    <form action="#">
      <div class="mb-6">
        <label
          for="first_name"
          class="block text-lg font-[Poppins] font-medium text-gray-300 mb-2"
          >First Name (required)</label
        >
        <input
          type="text"
          id="first_name"
          name="first_name"
          required
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]"
        />
      </div>

      <div class="mb-6">
        <label
          for="last_name"
          class="block text-lg font-[Poppins] font-medium text-gray-300 mb-2"
          >Last Name (required)</label
        >
        <input
          type="text"
          id="last_name"
          name="last_name"
          required
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]"
        />
      </div>

      <div class="mb-6">
        <label for="email" class="block text-lg font-[Poppins] font-medium text-gray-300 mb-2"
          >Email (required)</label
        >
        <input
          type="email"
          id="email"
          name="email"
          required
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]"
        />
      </div>

      <div class="mb-6">
        <label for="grade" class="block text-lg font-[Poppins] font-medium text-gray-300 mb-2"
          >Grade (required)</label
        >
        <select
          id="grade"
          name="grade"
          required
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]"
        >
          <option value="">Select Grade</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
      </div>

      <div class="mb-6">
        <label
          for="programs"
          class="block text-lg font-[Poppins] font-medium text-gray-300 mb-2"
          >Program(s) of Interest</label
        >
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="robotics"
              name="programs[]"
              value="Robotics"
              class="focus:ring-2 focus:ring-[#3581B8]"
            />
            <label for="robotics" class="text-gray-300 font-[Poppins]">Robotics</label>
          </div>
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="community_engineering"
              name="programs[]"
              value="Community Engineering"
              class="focus:ring-2 focus:ring-[#3581B8]"
            />
            <label for="community_engineering" class="text-gray-300 font-[Poppins]"
              >Community Engineering</label
            >
          </div>
        </div>
      </div>

      <div class="mb-6">
        <label
          for="comments"
          class="block text-lg font-[Poppins] font-medium text-gray-300 mb-2"
          >Comments/Questions</label
        >
        <textarea
          id="comments"
          name="comments"
          rows="4"
          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3581B8]"
          placeholder="Enter your comments or questions here..."
        ></textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="w-full py-3 bg-[#FF4848] text-white rounded-lg hover:bg-[#FF8547] focus:outline-none focus:ring-2 focus:ring-[#FF4848]"
          onclick={() => {
            const firstName = document.getElementById(
              "first_name",
            ) as HTMLInputElement;
            const lastName = document.getElementById(
              "last_name",
            ) as HTMLInputElement;
            const email = document.getElementById("email") as HTMLInputElement;
            const grade = document.getElementById("grade") as HTMLSelectElement;
            const programs = Array.from(
              document.querySelectorAll("input[name='programs[]']:checked"),
            ).map((checkbox) => (checkbox as HTMLInputElement).value);
            const comments = document.getElementById(
              "comments",
            ) as HTMLTextAreaElement;

            console.log({
              firstName: firstName.value,
              lastName: lastName.value,
              email: email.value,
              grade: grade.value,
              programs: programs,
              comments: comments.value,
            });

            firstName.value = "";
            lastName.value = "";
            email.value = "";
            grade.value = "";
            programs.forEach(() => {
              document
                .querySelectorAll("input[name='programs[]']")
                .forEach((checkbox) => {
                  (checkbox as HTMLInputElement).checked = false;
                });
            });
            comments.value = "";
          }}
        >
          Submit
        </button>
      </div>
    </form>
  </div>

  <div
    class="form-section flex-1 max-w-3xl mx-auto bg-[#333] text-white p-8 rounded-lg shadow-lg"
  >
    <h2 class="text-3xl font-[Teko] font-medium text-gray-200 mb-4">
      Frequently Asked Questions
    </h2>

    <div class="space-y-4">
      <div class="faq-item">
        <button
          class="faq-toggle font-[Teko] px-4 py-3 bg-orange-400 text-white border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 w-full text-left text-xl focus:outline-none"
          >What is the time commitment?</button
        >
        <div class="pl-6 font-[Poppins] pt-4 hidden text-white mt-2">
          <p>
            Members on the Varsity team (1540) are required to log 50 hours in
            the fall to be on team during the build season and another 50 hours
            are required during the build season to be allowed to miss school to
            attend events.
          </p>
          <p>
            Community Engineering commitments are based on the project and
            student schedules, but you can expect to put in around 50 hours over
            the course of the year.
          </p>
          <p>
            We also have all-team meetings once a week during the school day,
            which usually last around 30 minutes.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button
          class="px-4 py-3 bg-orange-400 text-white  text-left w-full border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 text-xl focus:outline-none faq-toggle font-[Teko]"
        >
          What happens after I register?
        </button>
        <div class="pt-4 hidden pl-6 font-[Poppins] text-white mt-2">
          <p>
            We will contact you in the first few weeks of the school year with
            more information. There is no up-front obligation: you are free to
            try out various departments before the Nov 1st cutoff.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button
          class="px-4 py-3 bg-orange-400 text-white  text-left w-full border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 text-xl focus:outline-none faq-toggle font-[Teko]"
        >
          When does the team meet?
        </button>
        <div class="pt-4 hidden pl-6 font-[Poppins] text-white mt-2">
          <p>
            The team meets once a week during the school day. Time and location
            will be announced at the beginning of the year. Meetings are
            mandatory.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button
          class="px-4 py-3 bg-orange-400 text-white  text-left w-full border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 text-xl focus:outline-none faq-toggle font-[Teko]"
        >
          How much does it cost?
        </button>
        <div class="pt-4 hidden pl-6 font-[Poppins] text-white mt-2">
          <p>
            For robotics, there is an activity fee of $350 in the fall and $350
            in the spring to cover material and registration costs. Community
            Engineering is $350 for the year, and waived for students
            participating in both.
          </p>
          <p>
            There is no obligation at this time, but fees will be charged to
            those who remain a part of the program after November 1st.
          </p>
          <p>
            Financial aid is available, contact Kevin Forbes
            (forbesk@catlin.edu) for more information.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button
          class="px-4 py-3 bg-orange-400 text-white  text-left w-full border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 text-xl focus:outline-none faq-toggle font-[Teko]"
        >
          I don't attend the school, can I join?
        </button>
        <div class="pt-4 hidden pl-6 font-[Poppins] text-white mt-2">
          <p>
            Unfortunately, you must be actively enrolled at Catlin Gabel to join
            Team 1540.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button
          class="px-4 py-3 bg-orange-400 text-white  text-left w-full border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 text-xl focus:outline-none faq-toggle font-[Teko]"
        >
          What grades can join the team?
        </button>
        <div class="pt-4 hidden pl-6 font-[Poppins] text-white mt-2">
          <p>Team 1540 is currently accepting members from grades 9-12.</p>
        </div>
      </div>

      <div class="faq-item">
        <button
          class="px-4 py-3 bg-orange-400 text-white  text-left w-full border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 text-xl focus:outline-none faq-toggle font-[Teko]"
        >
          I play sports. Can I join?
        </button>
        <div class="pt-4 hidden pl-6 font-[Poppins] text-white mt-2">
          <p>
            Yes! There are many opportunities to participate in robotics while
            still participating in sports.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button
          class="px-4 py-3 bg-orange-400 text-white  text-left w-full border-0 rounded-md cursor-pointer transition-colors duration-300 hover:bg-orange-500 text-xl focus:outline-none faq-toggle font-[Teko]"
        >
          I've never done robotics before. Can I join?
        </button>
        <div class="pt-4 hidden pl-6 font-[Poppins] text-white mt-2">
          <p>
            Yes! We will help you learn new skills needed to participate. No
            prior experience required; this is how you build it.
          </p>
        </div>
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

  .faq-item:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 1rem;
  }
</style>
