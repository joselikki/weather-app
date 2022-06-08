<script>
    import Rain from './rain/Rain.svelte'

    let click = false
    let show = false

    $: if (click) {
        show = true
    } else {
        show = false
    }
</script>

<div class="banner">
    <slot />
    {#if show}
        <Rain />
    {/if}
</div>

<style>
    .banner {
        position: relative;
        background: #3d40eb;
        height: 100%;
        min-height: 300px;
        overflow: hidden;
        display: grid;
        place-items: center;
    }
</style>
