<script lang="ts">
    let { active = "home" } = $props();

    const linkBase = "text-[24px] text-white py-3.5 px-4 hover:bg-[#8CB3DF]";
    const activeClass = "underline underline-offset-8";

    const baseUrl = import.meta.env.BASE_URL;
</script>

<div
    class="bg-[#20282c] font-[Teko] overflow-visible flex flex-row-reverse items-center z-1000"
>
    <img
        class="absolute h-15 left-0"
        src="{baseUrl}src/lib/assets/logos-01.png"
        alt="Team 1540 Logo"
    />

    <div class="relative group">
        <button
            class={`text-[24px] text-white py-3.5 px-4 flex items-center gap-1 hover:bg-[#8CB3DF]`}
        >
            <span
                class={`${
                    ["member-resources", "calendar"].includes(active)
                        ? "underline underline-offset-8"
                        : ""
                }`}
            >
                TEAM INFORMATION
            </span>
            <em class="text-[16px] fa fa-caret-down"></em>
        </button>

        <div
            class="absolute right-0 hidden min-w-40 bg-[#f9f9f9] shadow-lg group-hover:block z-10"
        >
            <a
                href="https://docs.google.com/document/d/1M-8U9p4j4Rpe9YSt-q45k-KpJn7FrQcDGEIq7thfduw/edit?tab=t.0"
                target="_blank"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300"
                >MEMBER RESOURCES</a
            >
            <a
                href="/calendar"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300"
                >CALENDAR</a
            >
        </div>
    </div>

    <div class="relative group">
        <button
            class={`text-[24px] text-white py-3.5 px-4 flex items-center gap-1 hover:bg-[#8CB3DF]`}
        >
            <span
                class={`${
                    [
                        "robotics",
                        "bunnybots",
                        "community-engineering",
                        "outreach",
                    ].includes(active)
                        ? "underline underline-offset-8"
                        : ""
                }`}
            >
                HISTORY
            </span>
            <em class="text-[16px] fa fa-caret-down"></em>
        </button>

        <div
            class="absolute right-0 hidden min-w-40 bg-[#f9f9f9] shadow-lg group-hover:block z-10"
        >
            <a
                href="/history/robotics"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300"
                >ROBOTICS</a
            >
            <a
                href="/history/community-engineering"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300"
                >COMMUNITY ENGINEERING</a
            >
            <a
                href="/history/bunnybots"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300"
                >BUNNYBOTS</a
            >
            <a
                href="/history/outreach"
                class="block px-4 py-3 text-[#1C1C1C] hover:bg-gray-300"
                >OUTREACH</a
            >
        </div>
    </div>

    <a
        href="/contact"
        class={`${linkBase} ${active === "contact" ? activeClass : ""}`}
    >
        CONTACT
    </a>

    <a href="/" class={`${linkBase} ${active === "home" ? activeClass : ""}`}>
        HOME
    </a>
</div>
