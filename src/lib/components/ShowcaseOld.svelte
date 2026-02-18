<script lang="ts">
  import CollapseSection from "./CollapseSection.svelte";

  type Specification = {
    title: string;
    items: string[];
    fullWidth?: boolean;
  };

  type Award = {
    title: string;
    description: string;
  };

  type Publicity = {
    title: string;
    description: string;
    link: string;
  };

  let {
    name,
    subtitle,
    gameOverviewLink,
    revealLink,
    heroImage,
    galleryImages = [],
    specifications = [],
    awards = [],
    publicity = null,
  }: {
    name: string;
    subtitle: string;
    gameOverviewLink?: string;
    revealLink?: string;
    heroImage: string;
    galleryImages?: string[];
    specifications?: Specification[];
    awards?: Award[];
    publicity?: Publicity[] | null;
  } = $props();
</script>

<section class="py-20 px-6 mx-auto">
  <div class="text-center mb-14">
    <h2
      class="font-[Teko] text-4xl md:text-5xl uppercase text-[#F6B14B] text-center"
    >
      {name}
    </h2>

    <p class="text-gray-400 font-[Poppins] text-lg mt-4">
      {subtitle}
    </p>

    <div class="flex justify-center gap-8 mt-6 flex-wrap">
      {#if gameOverviewLink}
        <a
          href={gameOverviewLink}
          target="_blank"
          class="text-[#F6B14B] font-[Teko] uppercase tracking-wide text-xl"
        >
          Game Overview →
        </a>
      {/if}

      {#if revealLink}
        <a
          href={revealLink}
          target="_blank"
          class="text-[#F6B14B] font-[Teko] uppercase tracking-wide text-xl"
        >
          Robot Reveal →
        </a>
      {/if}
    </div>
  </div>

  <div class="mb-4 rounded-2xl overflow-hidden border border-gray-800">
    <img
      src={heroImage}
      alt="{name} Competition Robot"
      class="w-full object-cover"
    />
  </div>

  <div>
    {#if specifications.length}
      <br />
      <div class="relative flex py-5 items-center">
        <div class="grow border-t border-gray-400"></div>
        <span class="shrink mx-4 text-gray-400">Technical Specifications</span>
        <div class="grow border-t border-gray-400"></div>
      </div>
    {/if}

    <div class="grid grid-cols-2 gap-x-16 gap-y-4">
      {#each specifications as spec}
        <div class={spec.fullWidth ? "col-span-2" : ""}>
          <CollapseSection title={spec.title} items={spec.items} />
        </div>
      {/each}
    </div>

    {#if galleryImages.length}
      <div class="flex gap-4 w-full mt-4">
        {#each galleryImages as img}
          <img
            src={img}
            alt="Robot Detail"
            class="flex-1 min-w-0 w-full h-auto object-contain rounded-xl border border-gray-800"
          />
        {/each}
      </div>
    {/if}
  </div>

  {#if awards.length}
    <div>
      <br />
      <div class="relative flex py-5 items-center">
        <div class="grow border-t border-gray-400"></div>
        <span class="shrink mx-4 text-gray-400">Awards</span>
        <div class="grow border-t border-gray-400"></div>
      </div>
      <div class="grid grid-cols-2 gap-8">
        {#each awards as award}
          <div class="bg-[#242424] p-6 rounded-xl border border-gray-800">
            <h3 class="font-[Teko] text-2xl text-[#F6B14B] uppercase">
              {award.title}
            </h3>
            <p class="text-gray-400 font-[Poppins] mt-3">
              {award.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  {#if publicity && publicity.length}
    <div>
      <br />
      <div class="relative flex py-5 items-center">
        <div class="grow border-t border-gray-400"></div>
        <span class="shrink mx-4 text-gray-400">Publicity</span>
        <div class="grow border-t border-gray-400"></div>
      </div>

      <div class="grid grid-cols-2 gap-8">
        {#each publicity as item}
          <a
            href={item.link}
            target="_blank"
            class="bg-[#242424] p-6 rounded-xl border border-gray-800 hover:border-[#F6B14B]/40 transition block"
          >
            <h3 class="font-[Teko] text-2xl text-[#F6B14B] uppercase">
              {item.title}
            </h3>
            <p class="text-gray-400 font-[Poppins] mt-3">
              {item.description}
            </p>
          </a>
        {/each}
      </div>
    </div>
  {/if}
</section>
