import * as Types from '../constants/constant';

const INIT_STATE = {
    hotels: [],
    autocompleteResults: [],
    currentHotel:{},
    hotelReview:{
        photos: [],
        reviews: []
    }
};

const hotels = ( state = INIT_STATE, action) => {
    switch(action.type){
        case Types.FETCH_HOTEL: {
            return {...state, hotels: action.payload};
        }
        case Types.FETCH_AUTOCOMPLETE: {
            return {...state, autocompleteResults: action.payload};
        }
        case Types.GET_HOTEL_DETAIL: {
            return {...state, currentHotel: action.payload};
        }
        case Types.GET_HOTEL_REVIEW_DETAIL: {
            return {...state, hotelReview: action.payload.hotel};
        }
        default: return {...state};
    }
};

export default hotels;
