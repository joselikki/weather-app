<script>
    import CloudRight from '../svgs/CloudRight.svelte';
    import CloudLeft from '../svgs/CloudLeft.svelte';
</script>




<div class="cloud-left-container">
    <CloudLeft />
</div>

<div class="cloud-rigth-container">
    <CloudRight />
</div>

<style>
     .cloud-rigth-container {   
        opacity: 0.5;
        position: absolute;
        right: -10%;
        top: 10%;
        transform: scaleY(-1) scale(2.5);
        
    }
    
    .cloud-left-container {
        opacity: 0.5;
        position: absolute;
        left: 0%;
        bottom: -15%;
        transform: scale(2);
    }

</style>