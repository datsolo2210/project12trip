import * as Types from '../constants/constant';
import {callHotelApi} from '../utils/apiCaller';

export const fetchHotels= (query) => (dispatch) => {
    if(!query.rows) query.rows = 10;
    if(!query.lang) query.lang = 'vi';
    if(!query.currency_code) query.currency_code = "VND";

    var query_string = '';
    Object.keys(query).map(key => {
        return query_string = query_string + `&${key}=${query[key]}`;
    })

    return callHotelApi(`hotel/list?${query_string}`, 'GET', null)
        .then(response => {
            // console.log(response);
            return dispatch({type: Types.FETCH_HOTEL, payload: response.data.data})
        })
        .catch(err => {
            console.log(err);
        })
}

export const fetchAutocomplete = (keyword) => (dispatch) => {
    return callHotelApi(`hotel/autocomplete?keyword=${keyword}`, 'GET', null)
        .then(response => {
            // console.log(response.data);
            return dispatch({type: Types.FETCH_AUTOCOMPLETE, payload: response.data.data})
        })
        .catch(err => {
            console.log(err);
        })
}