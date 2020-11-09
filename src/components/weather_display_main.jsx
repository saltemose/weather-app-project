import React from 'react';
import CurrentWeatherDisplay from './current_weather_display';

class WeatherDisplay extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            Fahrenheit: true,
            cityNameInput: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.fetchWeather = this.fetchWeather.bind(this)
    }

componentDidMount() {
    if (this.props.match.params.cityName) {
        const cityName = this.props.match.params.cityName
       this.fetchWeather(cityName)
    }
    
    }

componentDidUpdate(prevProps) {
    if ((this.props.match.params.cityName !== prevProps.match.params.cityName) && (!this.props.forecast || !prevProps)) {
        const cityName = this.props.match.params.cityName;
        this.fetchWeather(cityName)
      }
}


handleInput(e) {
    
    const inputVal = e.target.value;
    this.setState({ cityNameInput: inputVal })
}

handleToggle() {
    this.state.Celcius ? this.setState({Celcius: false, Fahrenheit: true}) : this.setState({Celcius: true, Fahrenheit: false})
}

handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    let cityName = this.state.cityNameInput
    this.fetchWeather(cityName)
    this.props.history.push(`${cityName}`)
  }

fetchWeather(cityname) {
    let cityName = cityname
    this.props.fetchForecast(cityName);
    this.props.fetchCurrentWeather(cityName);
  }

render() {

    const { currentDesc, currentWeather, forecast } = this.props 
    const cityName = this.props.match.params.cityName

    
        
        return (
            <>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleInput} type="text" placeholder="Enter your city"></input><span className="search-icon"><i class="far fa-search"></i></span>
            </form>   
            {!currentWeather && this.props.errors && <div>Please Enter A Valid US City</div> }
            <div className="toggle-feature" onClick={this.handleToggle}><span className={this.state.Fahrenheit ? "toggle selected" : "toggle"}>Fahrenheit</span><span className={this.state.Fahrenheit ? "toggle" : "toggle selected"}>Celcius</span></div>
            <CurrentWeatherDisplay cityName={cityName} currentWeather={currentWeather} currentDesc={currentDesc} Fahrenheit={this.state.Fahrenheit}/>
            </>
        )
    }
}

export default WeatherDisplay;