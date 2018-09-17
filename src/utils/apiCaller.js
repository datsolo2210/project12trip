import * as Config from '../constants/config';
import axios from 'axios';

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
            token: 'hjcqpoyu26rddjqgpv980mfafob',
        }
    }).catch(err => {
        console.log(err);
    });
};