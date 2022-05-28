const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()


const app = express()

//Define routers
const homeViewRouter = require('./routes/views/home')
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
app.use('/', homeViewRouter)
app.use('/weather', weatherApiRouter)

app.get('*', (req, res) =>{
    res.render('404',{
        headTitle: "404"
    })
})

//Server config
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening in port ${process.env.PORT}`)
})