import { combineReducers } from 'redux';

import forecast from './weather_api_reducer';

const rootReducer = combineReducers({
    forecast
});

export default rootReducer;