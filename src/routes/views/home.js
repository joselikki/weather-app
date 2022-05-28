const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('index', {
        headTitle: 'Weather',
        title: 'Weather App'
    })
})

module.exports = router;