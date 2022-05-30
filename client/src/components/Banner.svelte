<script>
    import CloudLeft from '../svgs/CloudLeft.svelte'
    import CloudRigth from '../svgs/CloudRigth.svelte'
    import Drop from './Drop.svelte'

    export let click
    
    let drops = []
    const makeItRain = () => {
        let dropList = []
        let increment = 0
        while(increment < 100){
            let randomHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
            let randomFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2))
            let settings = {
                percentage : increment,
                randomFiver,
                randomHundo
            }

            dropList.push(settings)
            increment += randomFiver - 1;    
        }
    return dropList
    }

    $: if (click){
        drops = makeItRain()
    } else {
        drops = []
    }

</script>   

<div class="banner" {click}>

        <div class="cloud-left-container">
            <CloudLeft />
        </div>

        <div class="cloud-rigth-container">
            <CloudRigth />
        </div>
    {#each  drops as settings}
        <Drop {...settings} position='left'/>
        <Drop {...settings} position='right'/>
    {/each}

</div>


<style>

    .banner{
        position: relative;
        height: 45vh;
        background: #0d134b;
        overflow: hidden;
    }
  

    .cloud-rigth-container {   
        opacity: 0.3;
        position: absolute;
        right: -10%;
        top: 15%;
        transform: scaleY(-1) scale(2.5);
        
    }

    .cloud-left-container {
        opacity: 0.3;
        position: absolute;
        left: 0%;
        bottom: -15%;
        transform: scale(2);

    }
    


</style>