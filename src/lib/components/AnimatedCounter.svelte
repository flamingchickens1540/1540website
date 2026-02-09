<script lang="ts">
    import { animate } from "animejs";
    import { onMount } from "svelte";

    let { value, label } = $props();
    let count = $state(0);

    onMount(() => {
        const state = { count: 0 };

        animate(state, {
            count: value,
            duration: 2000,
            easing: "easeOutExpo",
            onUpdate: () => {
                count = Math.round(state.count);
            },
        });
    });
</script>

<div>
    <div
        class="text-5xl md:text-6xl font-[Teko] bg-linear-to-r from-[#F6B14B] via-[#FF8547] to-[#F6B14B] bg-clip-text text-transparent animate-glow drop-shadow-xl"
    >
        {count}
    </div>
    <div
        class="mt-2 text-[#1C1C1C] font-[Poppins] uppercase tracking-wider drop-shadow-sm"
    >
        {label}
    </div>
</div>