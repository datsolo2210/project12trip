import * as Types from '../constants/constant';

const INIT_STATE = {
    hotels: [],
    autocompleteResults: []
};

const hotels = ( state = INIT_STATE, action) => {
    switch(action.type){
        case Types.FETCH_HOTEL: {
            return {...state, hotels: action.payload};
        }
        case Types.FETCH_AUTOCOMPLETE: {
            return {...state, autocompleteResults: action.payload};
        }
        default: return {...state};
    }
};

export default hotels;
