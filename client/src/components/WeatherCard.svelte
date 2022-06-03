<script>
import { onMount } from "svelte";

    export let  cloud_cover,
                //feels_like,
                humidity,
                //is_day,
                //local_time,
                location,
                temperature,
                weather_description,
                wind_speed  = "";


    import CloudCoverIcon from "../svgs/CloudCoverIcon.svelte";
    import HumidityIcon from "../svgs/HumidityIcon.svelte";
    import WindIcon from "../svgs/WindIcon.svelte";

    let count = 0
    const speed = 200
    
    const updateCount = () =>{
        if (count < temperature){
            count = count + 1
            setTimeout( updateCount, 30);
        } else {
            count = temperature
        }
    }

    onMount(()=> {
        updateCount()
    })
</script>



<div class="wather-card-container">
    <h3 class="wather-description">{weather_description} </h3>
    <h2 >{count} &#176;C </h2>
    <h4 class="wather-location">{location}</h4>
    <div class="card-details">
        <div class="metric">
            <CloudCoverIcon />
            <p>{cloud_cover}%</p>
            <span>Cloud Cover</span>
        </div>

        <div class="metric">
            <WindIcon />
            <p>{wind_speed} km/h</p>
            <span>Wind Speed</span>
        </div>
        
        <div class="metric">
            <HumidityIcon />
            <p>{humidity}%</p>
            <span>Humidity</span>
        </div>
        
    </div>
    <!-- <p>Time: {local_time}</p> -->

</div>

<style>

    .wather-card-container{
        min-width: 350px;
        margin: 0 auto;
        text-align: center;
    }

    h2,h3,h4{
        margin: 0;
    }

    h2 {
        font-size: 3em;
        letter-spacing: -0.045em;
    }

    p{
        margin: 0;
    }

    .wather-description{
        margin-bottom: 1em;
    }

    .wather-location{
        margin-top: 1em;
    }

    .card-details {
        margin-top: 3em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .metric p{
        margin-top: 0.5em;
        font-weight: bold;
    }

    .metric span{
        display: block;
        margin-top: 0.6em;
        font-size: 0.75em;
    }
</style>