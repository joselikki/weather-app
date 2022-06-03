<script>
import Banner from "./components/Banner.svelte"
import WeatherCard from "./components/WeatherCard.svelte"
import SunyIcon from "./svgs/SunyIcon.svelte"


	let notFoundImg = "/search.png"
	let loader_black = "/loader_black.gif"
	let address
	let data
	let showData = 'no'

	const mockData = {
		cloud_cover: 8,
		feels_like: 12,
		humidity:65,
		is_day: "no",
		local_time: "2022-06-01 01:37",
		location: "Antigua Guatemala, Sacatepéquez, Guatemala",
		temperature: 20,
		weather_description: "Partly cloudy",
		wind_speed: 7,
	}

	const getWeather = async (address) =>{
		try{
			const res = await fetch(`/weather?address=${address}`)
			const weatherData = await res.json()	
			if (res.ok) {
				return weatherData
			}
		} catch {
			return data = {error: "Unable to connect, please try again!"}
		}
	}	

	const  handleSubmit = async () =>{
		showData = 'loading'
		  data = await getWeather(address)

		   if(data.error){
		   	data = data.error
		   	return showData = 'error'
		   }

		showData = 'yes'
	}

</script>

<main>

	<section class="banner-section">
		<Banner>
			<div class="search-container">
				<h1>WeatherApp</h1>
					<form on:submit|preventDefault = {handleSubmit} >		
						<input  bind:value={address} placeholder="Location" type="text">
						<button>Search</button>
					</form>
			</div>
		</Banner>
	</section>

	<section class="weather-section">

		{#if showData === 'yes'}
		<WeatherCard {...data}/>

		{:else if showData === 'loading'}
		<div class="place-holder">
			<img src={loader_black} alt="loading">
			<h2>Loading</h2>
		</div>

		{:else if showData === "error"}

		<div class="place-holder">
			<img src={notFoundImg} alt="search not found" width="75px">
			<h2>{data}</h2>
		</div>

		{:else}
		<div class="place-holder">
			<div class="suny-animated-container">
				<SunyIcon />
			</div>
			<h2>Nothing to show yet</h2>
			<h3>Please enter the location and hit search!</h3>
		</div>
		{/if} 

	</section>

	<footer>
		<div class="footer-content">
			<p>
				Developed by <strong>Jose Paredes</strong> 
			</p>
			<p>
				<a  target="_blank" href="https://github.com/joselikki/weather-app"> <strong>View on Github</strong> </a>	 
			</p>
		</div>
		</footer>
</main>

<style>

	main{
		height: 100vh;
		display: grid;
		grid-template-rows: 45fr 50fr 5fr;
	}

	h1 {
		color: #fff;
		font-size: 2.5em;
		font-weight: bold;
		letter-spacing: -0.03em;
	}
	.weather-section{
		min-height: 350px;
		display: grid;
		place-items: center;
	}
	.place-holder{
		padding: 1em;
		text-align: center;
	}
	.search-container {
		text-align: center;
		padding: 0 1em;
		margin: 0 auto;
		max-width: 650px;
	}

	footer{
		display: flex;
		min-height: 40px;
	}
	.suny-animated-container {
		transform: translateY(40px);
	}
	.footer-content{
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		margin: 0.5em 1em;
		border-top: 1px solid rgb(201, 201, 201);
		width: 100%;
	}
	footer p {
		margin: 0;
		font-size: 0.8em;
	}
	</style>