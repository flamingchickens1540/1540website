<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import AwardCard from "$lib/components/AwardCard.svelte";

  const awards = [
    { year: 2025, title: "award1" },
    { year: 2024, title: "award2" },
    { year: 2023, title: "award3" },
  ];
</script>

<Navbar active="awards" />

<section class="pt-32 max-w-6xl mx-auto px-6">
  <h1 class="font-[Teko] text-4xl text-[#F6B14B] mb-12">Awards</h1>

  <div class="grid md:grid-cols-3 gap-8">
    {#each awards as award}
      <AwardCard {...award} />
    {/each}
  </div>
</section>
