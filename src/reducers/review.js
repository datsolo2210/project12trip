import * as Types from '../constants/constant';

var initialState = [];

const hotels = ( state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_HOTEL: {
            state = action.hotels;
            return [...state];
          
        }
        default: return [...state];
    }
};

export default hotels;
