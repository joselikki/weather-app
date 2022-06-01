<script>
import Banner from "./components/Banner.svelte"
import WeatherCard from "./components/WeatherCard.svelte"
import CloudLeft from "./svgs/CloudLeft.svelte"
import CloudRight from "./svgs/CloudRight.svelte"

	let address
	let data
	let showData = 'no'

	const mockData = {
		cloud_cover: 8,
		feels_like: 12,
		humidity:65,
		is_day: "no",
		local_time: "2022-06-01 01:37",
		location: "Paris, France",
		temperature: 12,
		weather_description: "Clear",
		wind_speed: 7,
	}

	const getWeather = async (address) =>{
		const res = await fetch(`/weather?address=${address}`)
		const weatherData = await res.json()	
		if (res.ok) {
			return weatherData
		} else {
			throw new Error(res)
		}
	}	

	const  handleSubmit = async () =>{
		showData = 'loading'
		data = await getWeather(address)
		showData = 'yes'
	}

</script>

<main>

	<Banner />

	<div class="search-container">
		<h1>WeatherApp</h1>
			<form on:submit|preventDefault = {handleSubmit} >		
				<input  bind:value={address} placeholder="Location" type="text">
				<button>Search</button>
			</form>
	</div>

	{#if showData === 'yes'}
		<WeatherCard {...data}/>
	{:else if showData === 'loading'}
	<div class="place-holder">
		<h2>Loading ....</h2>
	</div>
	{:else}
	<div class="place-holder">
			<h2>Nothing to show yet</h2>
			<h3>Please enter the location and hit search!</h3>
		</div>
			{/if} 
</main>

<style>

	h1 {
		color: #fff;
		font-size: 2.5em;
		font-weight: bold;
		letter-spacing: -0.03em;
	}

	.place-holder{
		text-align: center;
	}
	.search-container {
		text-align: center;
		padding: 0 1em;
		margin: 0 auto;
		max-width: 650px;
		transform: translateY(-30vh);
	}
	
</style>