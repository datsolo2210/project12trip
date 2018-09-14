import * as Types from '../constants/constant';
import callApi from '../utils/apiCaller';


export const actFetchHotelRequest = () => {
    return (dispatch) => {
        return callApi('hotels', 'GET', null).then(res => {
            console.log('get API oke');
            dispatch(actFetchHotel(res.data));
         });
    }
}

export const actFetchHotel = (hotels) =>{
    console.log('oke');
    return {
        type: Types.FETCH_HOTEL,
        hotels
    }
};
