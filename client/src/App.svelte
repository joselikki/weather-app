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
			return weatherData
		} else {
			throw new Error(res)
		}
	}	

	const  handleSubmit = async () =>{
		// data = await getWeather(address)
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
			<p>Location: {mockData.location}</p>
			<p>Temperature: {mockData.temperature} </p>
			<p>Weather: {mockData.weather} </p>
		</div>
		
	{/if}
</main>

<style>

	h1 {
		font-size: 3em;
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

	.data-container{
		transform: translateY(-15vh);
		max-width: 650px;
		margin: 0 auto;
	}
</style>