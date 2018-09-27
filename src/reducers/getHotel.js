import * as Types from '../constants/constant';
const INIT_STATE = {};
const getHotel = (state = INIT_STATE, action) => {
    switch(action.type){
        case Types.GET_HOTEL: {
            return action.payload;          
        }  
        default: return state;
    }
};
export default getHotel;