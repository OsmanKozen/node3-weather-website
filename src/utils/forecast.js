const request = require('request')

const forecast = (latitude, longitute, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6e04f7e0c9d9e9f684c5a9460dd488fa&query=' + latitude + ',' + longitute + '&units=f'
    
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect WeatherStack', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} fah. Outside feelslike ${body.current.feelslike} fah. And Humidity is ${body.current.humidity}%.`)
        }
    })
}

module.exports = forecast