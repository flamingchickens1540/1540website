<script lang="ts">
    import { animate } from "animejs";
    import { onMount } from "svelte";

    let { year, title } = $props();

    let el: HTMLDivElement;

    onMount(() => {
        animate(el, {
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 600,
            easing: "ease-out-back",
        });
    });
</script>

<div bind:this={el} class="p-6 bg-white border border-[##1C1C1C] rounded-lg">
    <div class="text-circuit font-[Teko] text-xl">{year}</div>
    <div class="mt-2 text-lg">{title}</div>
</div>
