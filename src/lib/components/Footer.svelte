<script lang="ts">
    import { animate, stagger } from "animejs";
    import { onMount } from "svelte";

    type Link = {
        name: string;
        href: string;
        icon: string;
        hover: string;
        glow: string;
    };

    const links: Link[] = [
        {
            name: "YouTube",
            href: "https://www.youtube.com/c/1540FlamingChickens",
            icon: "fa-youtube",
            hover: "bg-[#FF0000]",
            glow: "shadow-[0_0_18px_#ff0000aa]",
        },
        {
            name: "Twitch",
            href: "https://www.twitch.tv/team1540",
            icon: "fa-twitch",
            hover: "bg-[#9146FF]",
            glow: "shadow-[0_0_18px_#9146ffaa]",
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/FRC1540/",
            icon: "fa-facebook-f",
            hover: "bg-[#1877F2]",
            glow: "shadow-[0_0_18px_#1877f2aa]",
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/1540flamingchickens/?hl=en",
            icon: "fa-instagram",
            hover: "bg-gradient-to-tr from-[#FBDA61] to-[#FF5ACD]",
            glow: "shadow-[0_0_18px_#ff5acd99]",
        },
        {
            name: "X",
            href: "https://x.com/flamingchickens",
            icon: "fa-x-twitter",
            hover: "bg-[#1C1C1C]",
            glow: "shadow-[0_0_18px_#ffffff66]",
        },
        {
            name: "GitHub",
            href: "https://github.com/flamingchickens1540",
            icon: "fa-github",
            hover: "bg-[#24292e]",
            glow: "shadow-[0_0_18px_#ffffff66]",
        },
    ];

    function enter(label: HTMLSpanElement, icon: HTMLElement) {
        animate(label, {
            width: label.scrollWidth,
            opacity: 1,
            marginInline: "0.75rem",
            duration: 400,
            easing: "ease-out-cubic",
        });

        animate(icon, {
            scale: [1, 1.25, 1.1],
            rotate: [0, 10, -8, 0],
            duration: 500,
            easing: "ease-out-back",
        });
    }

    function leave(label: HTMLSpanElement, icon: HTMLElement) {
        animate(label, {
            width: 0,
            opacity: 0,
            marginInline: 0,
            duration: 250,
            easing: "ease-in-cubic",
        });

        animate(icon, {
            scale: 1,
            rotate: 0,
            duration: 200,
        });
    }

    onMount(() => {
        animate(".social-pill", {
            translateY: [20, 0],
            opacity: [0, 1],
            delay: stagger(90),
            duration: 600,
            easing: "ease-out-cubic",
        });
    });
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
</svelte:head>

<footer class="bg-[#20282c] border-t border-white/10">
    <div class="max-w-6xl mx-auto py-8 flex justify-center">
        <div class="flex flex-wrap justify-center gap-4">
            {#each links as link}
                <div
                    class="social-pill bg-white/10 backdrop-blur-xl rounded-full border border-white/10 shadow-lg"
                >
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        class="flex items-center text-white focus:outline-none focus-visible:ring-2 ring-white/70 rounded-full"
                        onmouseenter={(e) =>
                            enter(
                                e.currentTarget.querySelector("span")!,
                                e.currentTarget.querySelector(".icon")!
                            )
                        }
                        onmouseleave={(e) =>
                            leave(
                                e.currentTarget.querySelector("span")!,
                                e.currentTarget.querySelector(".icon")!
                            )
                        }
                    >
                        <div
                            class={`icon h-12 w-12 flex items-center justify-center rounded-full text-2xl transition-all duration-300 ${link.hover} ${link.glow}`}
                        >
                            <i class={`fa-brands ${link.icon}`}></i>
                        </div>

                        <span
                            class="text-sm font-semibold tracking-wide overflow-hidden whitespace-nowrap"
                            style="width:0; opacity:0"
                        >
                            {link.name}
                        </span>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</footer>
