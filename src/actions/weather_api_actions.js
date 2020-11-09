import * as WeatherAPIUtil from '../util/weather_api_util';

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export const RECEIVE_FORECAST_ERRORS = 'RECEIVE_FORECAST_ERRORS';
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER';

const receiveForecast = forecast => ({
    type: RECEIVE_FORECAST,
    forecast
});

const receiveCurrentWeather = currentWeather => ({
    type: RECEIVE_CURRENT_WEATHER,
    currentWeather
})

export const receiveErrors = ( errors ) => ({
    type: RECEIVE_FORECAST_ERRORS,
    errors
  });

export const fetchForecast = cityName => dispatch => (
    WeatherAPIUtil.fetchForecast(cityName)
    .then(forecast => { dispatch(receiveForecast(forecast))}, err => (
        dispatch(receiveErrors(err))))
);

export const fetchCurrentWeather = cityName => dispatch => (
    WeatherAPIUtil.fetchCurrentWeather(cityName)
    .then(weather => { dispatch(receiveCurrentWeather(weather))}, err => (
        dispatch(receiveErrors(err))))
)