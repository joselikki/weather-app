<script>
    import { onMount } from 'svelte'

    export let cloud_cover,
        feels_like,
        humidity,
        is_day,
        local_time,
        location,
        temperature,
        weather_description,
        wind_speed = ''

    import CloudCoverIcon from '../svgs/CloudCoverIcon.svelte'
    import HumidityIcon from '../svgs/HumidityIcon.svelte'
    import WindIcon from '../svgs/WindIcon.svelte'

    let count = 0
    const updateCount = () => {
        if (count < temperature) {
            count = count + 1
            setTimeout(updateCount, 30)
        } else {
            count = temperature
        }
    }

    onMount(() => {
        updateCount()
    })
</script>

<div class="wather-card-container">
    <h3 class="wather-description">{weather_description}</h3>
    <h2>{count} &#176;C</h2>
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
</div>

<style>
    .wather-card-container {
        min-width: 350px;
        margin: 0 auto;
        text-align: center;
        overflow: hidden;
        padding-bottom: 0.5em;
    }

    h2,
    h3,
    h4 {
        margin: 0;
    }

    h2 {
        font-size: 3em;
        letter-spacing: -0.045em;
    }

    p {
        margin: 0;
    }

    .wather-description {
        margin-bottom: 1em;
    }

    .wather-location {
        margin-top: 1em;
    }

    .card-details {
        margin-top: 3em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .metric {
        transform: translateY(100px);
        animation: metrics 0.8s ease-out;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
    }
    .metric p {
        margin-top: 0.5em;
        font-weight: bold;
    }

    .metric span {
        display: block;
        margin-top: 0.6em;
        font-size: 0.75em;
    }

    @keyframes metrics {
        0% {
            transform: translateY(100px);
        }
        50% {
            transform: translateY(-10px);
        }

        60% {
            transform: translateY(10px);
        }
        75% {
            transform: translateY(-5px);
        }
        95% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(0px);
        }
    }
</style>
