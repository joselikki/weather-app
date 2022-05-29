<script>
import Banner from "./components/banner.svelte"
import { dataset_dev } from "svelte/internal";



	let address
	let showData = false

	let mockData = {
		location : "Guatemala, Guatemala City",
		temperature : 25,
		weather: 'Cloudy'
	}

	const handleSubmit = (e) =>{
		showData = false
		showData = true
	}

</script>

<main>

	<Banner />

	<div class="app-container">
		<h1>WeatherApp</h1>
			<form on:submit|preventDefault ={handleSubmit} >		
				<input 
					bind:value={address}
					placeholder="Location" 
					type="text"
				>
				<button>Search</button>

				{#if showData}
				<div class="results">
					<div class="data">
						<p>Location: {mockData.location}</p>
						<p>Temperature: {mockData.temperature}</p>
						<p>Weather: {mockData.weather}</p>
					</div>
				</div>
					{/if}
			</form>
	</div>
</main>

<style>

	h1 {
		font-size: 3em;
		font-weight: bold;
		letter-spacing: -0.03em;
	}
	
	.app-container {
		text-align: center;
		padding: 0 1em;
		margin: 0 auto;
		max-width: 650px;
		transform: translateY(-30vh);
	}

	.results {
		width: auto;
		margin: 0 auto;
	}

</style>