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
        class="text-5xl md:text-6xl font-[Teko] text-[#F6B14B]
        bg-clip-text animate-glow drop-shadow-xl"
    >
        {count}
    </div>
    <div
        class="mt-2 text-gray-400 font-[Poppins] uppercase tracking-wider drop-shadow-sm"
    >
        {label}
    </div>
</div>