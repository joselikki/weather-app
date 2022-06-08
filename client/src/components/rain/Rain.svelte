<script>
  import { onMount } from 'svelte'
  import Drop from './Drop.svelte'

  let drops = []
  const makeItRain = () => {
    let dropList = []
    let increment = 0

    while (increment < 100) {
      let randomHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1)
      let randomFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2)
      let settings = {
        percentage: increment,
        randomFiver,
        randomHundo,
      }

      dropList.push(settings)
      increment += randomFiver - 1
    }
    return dropList
  }

  onMount(() => {
    drops = makeItRain()
  })
</script>

<div class="rain">
  {#each drops as settings}
    <Drop {...settings} position="left" />
    <Drop {...settings} position="right" />
  {/each}
</div>
