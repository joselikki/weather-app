const express = require('express')
const geocode = require('../../utils/geocode')
const weather = require('../../utils/weather')

const router = express.Router()

router.get('/', (req, res) => {
    if (!req.query.address) return res.send({ error: 'Address is required' })

    geocode(
        req.query.address,
        (error, { latitud, longitud, location: locationName } = {}) => {
            if (error) return res.send({ error })

            weather(latitud, longitud, (error, { location, current }) => {
                if (error) return res.send({ error })

                res.send({
                    location: locationName,
                    local_time: location.localtime,
                    temperature: current.temperature,
                    weather_description: current.weather_descriptions[0],
                    wind_speed: current.wind_speed,
                    humidity: current.humidity,
                    cloud_cover: current.cloudcover,
                    feels_like: current.feelslike,
                    is_day: current.is_day,
                })
            })
        }
    )
})

module.exports = router
