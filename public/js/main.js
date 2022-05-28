const getWeather = async (address, callback) => {
    const response = await fetch(`/weather?address=${address}`)
    const data = await response.json()
    callback(data)
}

// // // getWeather("boston", data => {
// // //     if (data.error){
// // //         return console.log(data.error)
// // //     }
// // //     console.log(`Location: ${data.location}`)
// // //     console.log(`Weather: ${data.wather}`)
// // //     console.log(`Location: ${data.temperature}`)

// // // })
