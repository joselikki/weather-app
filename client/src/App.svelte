<script>
    import Banner from './components/Banner.svelte'
    import WeatherCard from './components/WeatherCard.svelte'
    import SunyIcon from './svgs/SunyIcon.svelte'
    import Footer from './components/Footer.svelte'

    let notFoundImg = '/search.png'
    let loader_black = '/loader_black.gif'
    let address
    let data
    let showData = 'no'

    const getWeather = async (address) => {
        try {
            const res = await fetch(`/weather?address=${address}`)
            const weatherData = await res.json()
            if (res.ok) {
                return weatherData
            }
        } catch {
            return (data = { error: 'Unable to connect, please try again!' })
        }
    }

    const handleSubmit = async () => {
        if (address) {
            showData = 'loading'
            data = await getWeather(address)

            if (data.error) {
                data = data.error
                return (showData = 'error')
            }

            showData = 'yes'
        } else {
            data = 'Please enter an address!'
            return (showData = 'error')
        }
    }
</script>

<main>
    <section class="banner-section">
        <Banner>
            <div class="search-container">
                <h1>WeatherApp</h1>
                <form on:submit|preventDefault={handleSubmit}>
                    <input
                        bind:value={address}
                        placeholder="Location"
                        type="text"
                    />
                    <button>Search</button>
                </form>
            </div>
        </Banner>
    </section>

    <section class="weather-section">
        {#if showData === 'yes'}
            <WeatherCard {...data} />
        {:else if showData === 'loading'}
            <div class="place-holder">
                <img src={loader_black} alt="loading" />
                <h2>Loading</h2>
            </div>
        {:else if showData === 'error'}
            <div class="place-holder">
                <img src={notFoundImg} alt="search not found" width="75px" />
                <h2>{data}</h2>
            </div>
        {:else}
            <div class="place-holder init">
                <div class="suny-animated-container">
                    <SunyIcon />
                </div>
                <h2>Nothing to show yet</h2>
                <h3>Please enter the location and hit search!</h3>
            </div>
        {/if}
    </section>
    <Footer />
</main>

<style>
    .weather-section {
        min-height: 350px;
        display: grid;
        place-items: center;
    }
    .place-holder {
        padding: 1em;
        text-align: center;
    }
    .place-holder.init {
        transform: translateY(-40px);
    }
    .search-container {
        text-align: center;
        padding: 0 1em;
        margin: 0 auto;
        max-width: 650px;
    }

    .suny-animated-container {
        transform: translateY(40px);
    }
</style>
