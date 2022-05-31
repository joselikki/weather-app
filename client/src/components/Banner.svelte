<script>
    import Rain from './rain/Rain.svelte'
    import Clouds from './Clouds.svelte'

    let click = false
    let show = false

    $: if(click){
        show = true
    } else {
        show = false
    }

</script>   

<div class="banner">

    <!-- <Clouds /> -->
    
    <!-- rain effect -->
    {#if show}
        <Rain />
    {/if}

</div>

<style>

    .banner{
        position: relative;
        height: 45vh;
        background: #3d40eb;
        overflow: hidden;
    }
  
</style>