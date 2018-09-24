import { combineReducers } from 'redux';
import hotel from './hotel';
import login from './login';

const appReducers = combineReducers({
    hotel,
    login
});

export default appReducers;