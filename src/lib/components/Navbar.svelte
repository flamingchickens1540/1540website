<script lang="ts">
    let { active = "home" } = $props();

    const linkBase = "text-[24px] text-white py-3.5 px-4 hover:bg-[#8CB3DF]";
    const activeClass = "underline underline-offset-8";

    const baseUrl = import.meta.env.BASE_URL;
</script>

<div
    class="bg-[#20282c] font-[Teko] overflow-visible flex flex-row-reverse items-center"
>
    <img class="absolute h-15 left-0" src="{baseUrl}src/lib/assets/logos-01.png" alt="Team 1540 Logo"/>

    <div class="relative group">
        <button
            class={`text-[24px] text-white py-3.5 px-4 flex items-center gap-1 hover:bg-[#8CB3DF] ${
                ["about", "awards"].includes(
                    active,
                )
                    ? activeClass
                    : ""
            }`}
        >
            TEAM INFORMATION
            <em class="fa fa-caret-down"></em>
        </button>

        <div
            class="absolute right-0 hidden min-w-40 bg-[#f9f9f9] shadow-lg group-hover:block z-10"
        >
            <a
                href="/information/about"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300">ABOUT US</a
            >
            <a
                href="/information/awards"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300">AWARDS</a
            >
        </div>
    </div>

    <a
        href={"/register"}
        class={`${linkBase} ${active === "register" ? activeClass : ""}`}
    >
        REGISTER
    </a>

    <a href="/" class={`${linkBase} ${active === "home" ? activeClass : ""}`}>
        HOME
    </a>
</div>
