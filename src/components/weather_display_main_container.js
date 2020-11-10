import { connect } from 'react-redux';
import WeatherDisplay from './weather_display_main';
import { fetchForecast, fetchCurrentWeather } from '../actions/weather_api_actions';

const mapStateToProps = (state) => ({
    forecast: state.forecast["list"],
    currentWeather: state.forecast["main"],
    currentDesc: state.forecast["weather"],
    errors: state.forecast.errors
});

const mapDispatchToProps = dispatch => ({
    fetchForecast: (cityName) => dispatch(fetchForecast(cityName)),
    fetchCurrentWeather: (cityName) => dispatch(fetchCurrentWeather(cityName))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);