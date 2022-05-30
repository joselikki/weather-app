 <script>
    export let percentage
    export let randomFiver
    export let randomHundo
    export let position

    const bottom = randomFiver + randomFiver - 1 + 100
    const dropStyle = `${position}: ${percentage}%; bottom: ${bottom}%; animation-delay:0.${randomHundo}s; animation-duration: 0.6${randomHundo}s;`
    const steamStyle = `animation-delay: 0.${randomHundo}s; animation-duration:0.6${randomHundo}s;`
 </script>
 
<div class="drop" style={dropStyle}>
    <div class="stem" style={steamStyle}></div>
</div>
