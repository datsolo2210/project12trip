import { combineReducers } from 'redux';
import hotel from './hotel';
import auth from './auth';
import getHotel from './getHotel';
import review from './review';


const appReducers = combineReducers({
    hotel,
    auth,
    getHotel,
    review
});

export default appReducers;