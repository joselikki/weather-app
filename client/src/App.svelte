<script>
import { dataset_dev } from "svelte/internal";



	let address
	let showData = true

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
	<h1>Weather</h1>

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
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 650px;
		margin: 3em auto;
	}

	h1 {
		font-size: 3em;
		font-weight: bold;
		letter-spacing: -0.03em;
	}

	.results {
		width: auto;
		margin: 0 auto;
	}

</style>