import { combineReducers } from 'redux';
import hotel from './hotel';
import auth from './auth';
import getHotel from './getHotel';

const appReducers = combineReducers({
    hotel,
    auth,
    getHotel
});

export default appReducers;