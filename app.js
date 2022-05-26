const axios = require('axios');

const geocode = require('./utils/geocode.js')

const weatherUrl = "http://api.weatherstack.com"


// axios.get(`${weatherUrl}/current?access_key=${weatherToken}&query=Guatemala City`)
// .then( res => {
//     //console.log(res.data.current)
//     console.log(`It is currently ${res.data.current.temperature} degress out. It feels like ${res.data.current.feelslike} degress out.`)
    
// }).catch(err => {
//     console.log(`Unable to get data - ${err}`)
// });



geocode("Los Angeles", (err, data) => { 
    if (err){
        console.log(err)
    } else {
        console.log(data)
    }
})
