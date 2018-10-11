import * as Types from '../constants/constant';
import { callHotelApi } from '../utils/apiCaller';


var date = new Date();
var checkin = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
var date2 = new Date(date.getTime() + 86400000);
var checkout = `${date2.getFullYear()}-${('0' + (date2.getMonth() + 1)).slice(-2)}-${('0' + date2.getDate()).slice(-2)}`;


export const fetchHotels = (query) => (dispatch) => {
    if (!query.checkin) query.checkin = checkin;
    if (!query.checkout) query.checkout = checkout;
    if (!query.num_room) query.num_rooms = "1";
    if (!query.rows) query.rows = 10;
    if (!query.lang) query.lang = 'vi';
    if (!query.currency_code) query.currency_code = "VND";

    console.log(checkin, checkout);

    var query_string = '';
    Object.keys(query).map(key => {
        return query_string = query_string + `&${key}=${query[key]}`;
    })

    console.log(query_string);//&type=ci&id=-3714993&checkin=2018-09-19&checkout=2018-09-20&num_rooms=1&rows=10&lang=vi&currency_code=VND
    //&type=ci&id=-3714993&checkin=2018-08-19&checkout=2018-08-20&num_rooms=1&rows=10&lang=vi&currency_code=VND

    return callHotelApi(`hotel/list?${query_string}`, 'GET', null)
        .then(response => {
            // console.log(response);
            return dispatch({ type: Types.FETCH_HOTEL, payload: response.data.data })
        })
        .catch(err => {
            console.log(err);
        })
}

export const fetchAutocomplete = (keyword) => (dispatch) => {
    return callHotelApi(`hotel/autocomplete?keyword=${keyword}`, 'GET', null)
        .then(response => {
            // console.log(response.data);
            return dispatch({ type: Types.FETCH_AUTOCOMPLETE, payload: response.data.data })
        })
        .catch(err => {
            console.log(err);
        })
}

export const actGetHotelRequest = (id) => (dispatch) => {
    return callHotelApi(`hotel/detail?hotel_id=${id}&lang=vi`, 'GET', null).then(res => {
        return dispatch({ type: Types.GET_HOTEL, payload: res.data })
    })
        .catch(err => {
            console.log(err);
        })
}


