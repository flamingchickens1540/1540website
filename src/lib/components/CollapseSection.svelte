<script lang="ts">
    import { animate } from "animejs";
    import { onMount } from "svelte";

    let {
        title,
        items,
    }: {
        title: string;
        items: string[];
    } = $props();

    let isOpen = false;
    let contentEl: HTMLUListElement;
    let containerEl: HTMLDivElement;
    let caretEl: SVGSVGElement;

    function open() {
        contentEl.style.display = "block";
        contentEl.style.overflow = "hidden";
        contentEl.style.height = "0px";
        contentEl.style.opacity = "0";

        requestAnimationFrame(() => {
            const fullHeight = contentEl.scrollHeight;

            animate(contentEl, {
                height: [0, fullHeight],
                opacity: [0, 1],
                duration: 400,
                easing: "easeOutCubic",
                complete: () => {
                    contentEl.style.height = "auto";
                },
            });
        });
    }

    function close() {
        const fullHeight = contentEl.scrollHeight;

        contentEl.style.height = `${fullHeight}px`;
        contentEl.style.overflow = "hidden";

        requestAnimationFrame(() => {
            animate(contentEl, {
                height: [fullHeight, 0],
                opacity: [1, 0],
                duration: 350,
                easing: "easeInCubic",
                complete: () => {
                    contentEl.style.display = "none";
                },
            });
        });
    }

    function toggle() {
        if (!contentEl || !caretEl) return;

        if (isOpen) {
            close();
            animate(caretEl, {
                rotate: 0,
                duration: 300,
                easing: "easeInOutCubic",
            });
        } else {
            open();
            animate(caretEl, {
                rotate: 180,
                duration: 300,
                easing: "easeInOutCubic",
            });
        }

        isOpen = !isOpen;
    }

    onMount(() => {
        contentEl.style.display = "none";
        contentEl.style.height = "0px";
        contentEl.style.overflow = "hidden";
        contentEl.style.opacity = "0";

        animate(containerEl, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            easing: "easeOutExpo",
        });
    });
</script>

<div class="faq-item" bind:this={containerEl}>
    <button
        onclick={toggle}
        class="faq-toggle font-[Teko] text-3xl text-[#F6B14B] uppercase
        border-0 rounded-md cursor-pointer
        w-full text-left focus:outline-none
        flex items-center justify-between"
    >
        <span>{title}</span>

        <svg
            bind:this={caretEl}
            class="w-5 h-5 ml-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        >
            <polyline points="6 15  12 9  18 15" />
        </svg>
    </button>

    <ul
        bind:this={contentEl}
        class="pt-1 space-y-2 text-gray-300 font-[Poppins] text-[15px] leading-relaxed"
    >
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ul>
</div>

<style>
    .faq-item:not(:last-child) {
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 1rem;
    }
</style>
