const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')

let userLocation = process.argv[2]

if (userLocation.length > 0){
    
    geocode(userLocation, (err, geoData) => { 
        if (err)  return console.log(err)  
    
        weather(geoData.latitud, geoData.longitud, (err, weatherData) => {   
            if (err) return console.log(err)
    
            console.log(`Location: ${geoData.location}`)
            console.log(weatherData.current.weather_descriptions[0])
            console.log(`Temperature: ${weatherData.current.temperature} degress.`)           
            })
        }
    )
} else {
    console.log("Please enter a location to display weather!")
}
