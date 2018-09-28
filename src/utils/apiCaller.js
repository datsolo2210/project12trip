import * as Config from '../constants/config';
import axios from 'axios';
import {getCookie} from '../helper';

export function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: Config.API_URL + endpoint,
        data: body
    }).catch(err => {
        console.log(err);
    });
};

export function callHotelApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: Config.HOTEL_API + endpoint,
        data: body,
        headers: {
            // token: 'agxbzb4tl8x4ezsd58src03nqgl', // token for app.12trip.vn
            token: getCookie('token') // token for dev.12trip
        }
    }).catch(err => {
        console.log(err);
    });
};

export function loginAPI( body){
    return axios({
        method: 'POST',
        url: Config.LOGIN_API,
        data: body
    }).catch(err =>{
        console.log(err);
    });
};

export function registerAPI(endpoint, method = 'GET', body) {
    return axios({
        method : method,
        url: Config.API_URL + endpoint,
        data: body
    }).catch(err => {
        console.log(err);
    });
};


// export function callReviewAPI(endpoint, method='POST', body){
//     return axios({
//         method: method,
//         url: Config.API_URL + endpoint,
//         data: body
//     }).catch(err => {
//         console.log(err);
//     });
// };