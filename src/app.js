const path = require('path')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

//Define routers
const weatherApiRouter = require('./routes/api/weather')

//Define pahts for Express config
const publicPath = path.join(__dirname, 'client', 'public', 'index.html')

app.use(express.static('client/public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, publicPath))
})

app.use('/weather', weatherApiRouter)
app.get('*', (req, res) =>{
    res.send('404 page not found')
})

//Server config
app.listen(process.env.PORT, ()=>{
    console.log(`Server listening in port ${process.env.PORT}`)
})