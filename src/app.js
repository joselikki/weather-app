const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode.js')
const weather = require('./utils/weather.js')

const app = express()

//Define pahts for Express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Handlebars set up
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Static directory to serve
app.use(express.static(publicPath))

//Routes
app.get('', (req,res) => {
    res.render('index', {
        headTitle : 'Weather',
        title : 'Weather App'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        headTitle: 'About',
        title: "About Page with Chems!"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        headTitle: 'Help',
        title: "This is a help page :v"
    })
})

//Weather endpoint /weather?address=location
app.get('/weather', (req, res) => {
    if(!req.query.address) return res.send({ error: "Address is required"})

    geocode(req.query.address, (error, { latitud, longitud, location } = {}) => {
        if (error) return res.send( { error } )

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

app.get('/help/*', (req, res) =>{
    res.render('404Help', {
        headTitle: "Not Found - Article"
    })
})

app.get('*', (req, res) =>{
    res.render('404',{
        headTitle: "404"
    })
})

//Server config
app.listen(3000, ()=>{
    console.log(`Server listening in port 3000`)
})