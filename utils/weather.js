require('dotenv').config()
const axios = require('axios')

const weatherUrl = "http://api.weatherstack.com"
const weatherToken = process.env.WEATHER_TOKEN

const weather = async (lat, long, callback) => {
    const url = `${weatherUrl}/current?access_key=${weatherToken}&query=${lat},${long}`
    try{
        const response  = await axios.get(url)

        if (response.data.success === false){
            callback("Unable to find location, please check!", undefined)
            
        } else {
            callback(undefined, response.data.current)
        }

    }catch(err){
        callback("Unable to connect to weather service!" + err, undefined)
    }
}
module.exports = weather;