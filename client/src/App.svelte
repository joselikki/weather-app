<script>
import Banner from "./components/Banner.svelte"
	let address
	let data
	let showData = false

	const mockData = {
		location: "Guatemala, Guatemala",
		temperature: 21,
		weather: "Cloudy"
	}

	const getWeather = async (address) =>{
		const res = await fetch(`http://localhost:3000/weather?address=${address}`)
		const weatherData = await res.json()	
		if (res.ok) {
			console.log(weatherData)
			return weatherData
		} else {
			throw new Error(res)
		}
	}	

	const  handleSubmit = async () =>{
		data = await getWeather(address)
		showData = true
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

	{#if showData}
		<div class="data-container">
			<p>{data.weather} </p>
			<p class="data-temperature">{data.temperature} &#176;C </p>
			<p class="data-location">{data.location}</p>
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
	
	.search-container {
		text-align: center;
		padding: 0 1em;
		margin: 0 auto;
		max-width: 650px;
		transform: translateY(-30vh);
	}
	p {
		margin: 10px 0;
	}
	.data-container{
		
		text-align: center;
		transform: translateY(-12vh);
		max-width: 300px;
		margin: 0 auto;
		font-size: 1em;
		font-weight: bold;
		padding: 2em;
		border-radius: 10px;
	}

	.data-temperature {
		font-size: 3em;
	}
	.data-location{
		font-weight: normal;
		font-size: 0.8em;
	}
</style>