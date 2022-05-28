const express = require('express')

const geocode = require('../../utils/geocode')
const weather = require('../../utils/weather')

const router = express.Router()

router.get('/', (req, res) => {

    if (!req.query.address) return res.send({ error: "Address is required" })

    geocode(req.query.address, (error, { latitud, longitud, location } = {}) => {
        if (error) return res.send({ error })

        weather(latitud, longitud, (error, { weather_descriptions, temperature }) => {
            if (error) return res.send({ error })

            res.send({
                location,
                temperature,
                weather: weather_descriptions[0]
            })

        })
    })
})

module.exports = router;