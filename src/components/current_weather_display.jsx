import React from 'react';
import Cloudy from '../images/cloudy.png'
import Sunny from '../images/sunny.png'
import Rainy from '../images/rainy.png'
import Night from '../images/moon.png'
import NightCloudy from '../images/nightclouds.png'
import NightRain from '../images/night-rain.png'

class CurrentWeatherDisplay extends React.Component {

    constructor(props){
        super(props);
    }

toFahrenheit(temp) {
    return ((temp - 273.15) * 9/5 + 32).toFixed(0) + `\u00B0F`
}

toCelsius(temp) {
    return (temp - 273.15).toFixed(0) + `\u00B0C`
}

render() {

    const { cityName, currentDesc, currentWeather } = this.props 
  
    const currTime = (new Date().toLocaleString()).substring(10, 24)
    let currHour = parseInt(currTime.substring(0,2))
    let PM = currTime.substring(9,11)

    const display = currentWeather && currentDesc ? (
            <>
          <div className="city-name">{cityName}</div>
            <div className="current-weather">
                <div className="current-temp">{this.props.Fahrenheit ? this.toFahrenheit(currentWeather.temp) : this.toCelsius(currentWeather.temp)}</div>
                {((currHour >= 7 && PM === "PM") || (currHour < 5 && PM === "AM") || currHour === 12 && PM == "AM") ? (
                        <img className="forecast-img" alt="" src={currentDesc["0"].main === 'Clear' ? Night : currentDesc["0"].main === 'Rain' ? NightRain : NightCloudy}></img> ) : (
                        <img className="forecast-img" alt="" src={currentDesc["0"].main === 'Clear' ? Sunny : currentDesc["0"].main === 'Rain' ? Rainy : Cloudy}></img> 
                        )
                }
                <div className="current-desc capitalize">{currentDesc["0"].description}</div>
                <br/>
                <div>
                <span className="current-detail">Feels like: {this.props.Fahrenheit ? this.toFahrenheit(currentWeather.feels_like) : this.toCelsius(currentWeather.feels_like)}</span>
                <span className="current-detail">Humidity: {currentWeather.humidity}%</span>
                <span className="current-detail">High Today: {this.props.Fahrenheit ? this.toFahrenheit(currentWeather.temp_max) : this.toCelsius(currentWeather.temp_max)}</span>
                <span className="current-detail">Low Today: {this.props.Fahrenheit ? this.toFahrenheit(currentWeather.temp_min) : this.toCelsius(currentWeather.temp_min)}</span>
                </div>
                <span className="last-updated">last updated {currTime}</span>
            </div>
            </>
        ) : (<> </>)

        return (
            <div>{display}</div>
        )
    }
}

export default CurrentWeatherDisplay;