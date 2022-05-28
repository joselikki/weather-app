const getWeather = async (address, callback) => {
    const response = await fetch(`/weather?address=${address}`)
    const data = await response.json()
    callback(data)
}

const watherForm = document.querySelector('form')
const address = document.getElementById('user-adress')

const errorMsg = document.querySelector('#error')
const locationMsg = document.querySelector('#location')
const weatherMsg = document.querySelector('#weather')
const temperatureMsg = document.querySelector('#temperature')
const searchingMsg = document.querySelector('#searching')

watherForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    searchingMsg.textContent ="Searching ..."
    errorMsg.textContent = ""
    locationMsg.textContent = ""
    weatherMsg.textContent = ""
    temperatureMsg.textContent = ""

    if(!address.value){
        searchingMsg.textContent = ""
        errorMsg.textContent = "Please enter a location."
    } else {

        getWeather(address.value, data => {
            searchingMsg.textContent = ""
            if (data.error) {
                return errorMsg.textContent = data.error
            } else {

                locationMsg.textContent = `Location: ${data.location}`
                weatherMsg.textContent = `Weather: ${data.weather}`
                temperatureMsg.textContent = `Temperature: ${data.temperature}`
            }
        })
    }
})