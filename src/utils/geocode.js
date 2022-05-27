
require('dotenv').config()
const axios = require('axios');

const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places"
const geoToken = process.env.GEO_TOKEN

const geocode = async (address, calllback) => {
    const url = `${mapUrl}/${encodeURIComponent(address)}.json?access_token=${geoToken}`
    try {
        const response = await axios.get(url)

        if (response.data.features.length === 0) {
            calllback("Unable to find location, try another search!", undefined)
        } else {
            calllback(undefined, {
                latitud: response.data.features[0].center[1],
                longitud: response.data.features[0].center[0],
                location: response.data.features[0].place_name
            })
        }

    } catch (err) {
        calllback("Unable to connect to Map service " + err, undefined)
    }
}

module.exports = geocode