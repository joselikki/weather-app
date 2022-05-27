const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')

let userLocation = process.argv[2]

if (userLocation.length > 0){
    
    geocode(userLocation, (err, {latitud, longitud, location} = {}) => { 
        if (err)  return console.log(err)  
    
        weather(latitud, longitud, (err, { weather_descriptions , temperature}) => {   
            if (err) return console.log(err)
    
            console.log(`Location: ${location}`)
            console.log(`Temperature: ${temperature} degress. \nWeather: ${weather_descriptions[0]}`)           
            })
        })
} else {
    console.log("Please enter a location to display weather!")
}