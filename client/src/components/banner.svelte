<script>
    import { onMount } from "svelte";

    
    const makeItRain = () => {
        let dropList = []
    
        for(let i = 0; i<100; i = i + 1){
            
            let randomHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            let randomFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2))

            let settings = {
                left : i,
                randomFiver,
                randomHundo
            }

        dropList.push(settings)
    }

    return dropList
    }
    let drops = makeItRain()
</script>

<div class="banner">
    {#each  drops as drop}
        <div class="drop" 
        style="left: {drop.left}%; bottom: {drop.randomFiver + drop.randomFiver - 1 + 100}%; animation-delay:0.{drop.randomHundo}s; animation-duration: 0.8{drop.randoHundo}s;">
            <div class="stem" style="animation-delay: 0.{drop.randomHundo}s; animation-duration:0.5{drop.randomHundo}s;"></div>
        </div>
    {/each}

</div>


<style>
    .banner{
        position: relative;
        height: 50vh;
        background: #060D56;
    }


    .drop {
        position: absolute;
        bottom: 100%;
        width: 15px;
        height: 120px;
        pointer-events: none;
        animation: drop 0.5s linear infinite;
    }

    @keyframes drop {
    0% {
        transform: translateY(0vh);
    }
    75% {
        transform: translateY(55vh);
    }
    100% {
        transform: translateY(55vh);
    }
    }

    .stem {
        width: 2px;
        height: 60%;
        margin-left: 7px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3));
        animation: stem 0.5s linear infinite;
    }

    @keyframes stem {
    0% {
        opacity: 1;
    }
    65% {
        opacity: 1;
    }
    75% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
    }


</style>