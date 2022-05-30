<script>
    import Rain from './rain/Rain.svelte'
    import Clouds from './Clouds.svelte'

    export let click
    let show = false

    $: if(click){
        show = true
    } else {
        show = false
    }

</script>   

<div class="banner" {click}>

    <Clouds />
    
    <!-- rain effect -->
    {#if show}
        <Rain />
    {/if}

</div>

<style>

    .banner{
        position: relative;
        height: 45vh;
        background: #0d134b;
        overflow: hidden;
    }
  
</style>