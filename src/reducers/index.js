import { combineReducers } from 'redux';
import hotel from './hotel';
import auth from './auth';

const appReducers = combineReducers({
    hotel,
    auth
});

export default appReducers;