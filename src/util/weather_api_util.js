import $ from 'jquery'

export const fetchForecast = (cityName) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  return $.ajax({
    method: 'GET',
    url:  `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${API_KEY}`
  })
};

export const fetchCurrentWeather = (cityName) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  return $.ajax({
    method: 'GET',
    url:  `https://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=${API_KEY}`
  })
};