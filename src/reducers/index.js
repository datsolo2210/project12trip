import { combineReducers } from 'redux';
import hotel from './hotel';
import auth from './auth';
import review from './review';


const appReducers = combineReducers({
    hotel,
    auth,
    review
});

export default appReducers;