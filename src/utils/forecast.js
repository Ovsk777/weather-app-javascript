
const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bc2caa8c447fbd8b38b5a15c4e012695&query=' + latitude + ',' + longitude;

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Internet', undefined)
        }
        else if (!body.current) {
            callback('Unable to fetch data', undefined)
        }
        else {
            const location = body.location.name+','+body.location.region+','+body.location.country;
            const localtime = body.location.localtime;
            const temperature = body.current.temperature;
            const precip = body.current.precip;
            const windSpeed = body.current.wind_speed;
            callback(undefined, {
                location,
                localtime,
                temperature,
                precip,
                windSpeed
            })
        }
    })

}

module.exports = forecast;

