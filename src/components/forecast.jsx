import React from 'react';
import Cloudy from '../images/cloudy.png'
import Sunny from '../images/sunny.png'
import Rainy from '../images/rainy.png'
import Night from '../images/moon.png'
import NightCloudy from '../images/nightclouds.png'
import NightRain from '../images/night-rain.png'


class Forecast extends React.Component {

    constructor(props){
        super(props);
    }


toFahrenheit(temp) {
    return ((temp - 273.15) * 9/5 + 32).toFixed(0) + `\u00B0F`
}

toCelsius(temp) {
    return (temp - 273.15).toFixed(0) + `\u00B0C`
}

getTime(time) {
    time = time.split(':');
    var hours = Number(time[0]);
    var timeValue;

    if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
    } else if (hours > 12) {
        timeValue= "" + (hours - 12);
    } else if (hours == 0) {
        timeValue= "12";
    }   
    
    timeValue += (hours >= 12) ? " PM" : " AM";

   return timeValue
}

render() {

    const { forecast} = this.props 

    const display = forecast ? (
      <>  
       <h3>5 Day Forecast</h3>
       <div className="forecast-scroller">
            {forecast && Object.keys(forecast).map((key) => {
                let forecastDate = new Date(forecast[key].dt_txt.split(" ")[0].replace("-", "/").replace("-", "/")).toString()
                let forecastTime = this.getTime(forecast[key].dt_txt.split(" ")[1])
                let tempK = forecast[key].main.temp
                let F = ((tempK - 273.15) * 9/5 + 32).toFixed(0) + `\u00B0F` 
                let C = (tempK - 273.15).toFixed(0) + `\u00B0C`
                let main = forecast[key].weather["0"].main

                
                return (
                    <li key={key} className="forecast-item">
                    <div>{forecastDate.substring(0,3)}</div>
                    <div>{forecastTime}</div>
                    {(forecastTime === '9 PM' || forecastTime === "12 AM" || forecastTime === "3 AM") ? (
                        <img className="forecast-img" alt="" src={main === 'Clear' ? Night : main === 'Rain' ? NightRain : NightCloudy}></img> ) : (
                        <img className="forecast-img" alt="" src={main === 'Clear' ? Sunny : main === 'Rain' ? Rainy : Cloudy}></img> 
                        )
                    }
                    <div>{this.props.Fahrenheit ? F : C }</div>
                    </li>
                )
            })}
            </div>
            </>
     
        ) : (<> </>)

        return (
            <div>{display}</div>
        )
    }
}

export default Forecast;