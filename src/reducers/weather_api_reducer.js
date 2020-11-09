import  { RECEIVE_FORECAST, RECEIVE_FORECAST_ERRORS, RECEIVE_CURRENT_WEATHER } from '../actions/weather_api_actions';

const weatherReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_FORECAST:
            return Object.assign([], state, action.forecast)
        case RECEIVE_CURRENT_WEATHER:
            return Object.assign([], state, action.currentWeather)
        case RECEIVE_FORECAST_ERRORS:
            return {errors: action.errors}
        default:
            return state;
    }
}

export default weatherReducer;