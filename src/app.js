const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()


const app = express()

//Define routers

const weatherApiRouter = require('./routes/api/weather')

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
app.get('/', (req,res) => {
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

app.use('/weather', weatherApiRouter)

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
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening in port ${process.env.PORT}`)
})