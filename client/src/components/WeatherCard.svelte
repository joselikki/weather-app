<script>
    export let  cloud_cover,
                feels_like,
                humidity,
                is_day,
                local_time,
                location,
                temperature,
                weather_description,
                wind_speed  = "";
</script>

<div class="wather-card-container">
    <h3>{weather_description} </h3>
    <h2 >{temperature} &#176;C </h2>
    <h4 >{location}</h4>

    <br>
    <p>Cloud Cover: {cloud_cover}%</p>
    <p>Humidity: {humidity}%</p>
    <p>Wind Speed: {wind_speed} km/h.</p>
    <p>Time: {local_time}</p>

</div>

<style>

    .wather-card-container{
        transform: translateY(-15vh);
        width: 300px;
        margin: 0 auto;
        text-align: center;
    }

    h2,h3,h4{
        margin: 0;
    }

    h2 {
        font-size: 3em;
    }

    p{
        margin: 0;
    }
</style>