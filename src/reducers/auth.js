import * as Types from '../constants/constant';
const INIT_STATE = {
    account: {},
    redirectToReferrer: false
};
const auth = (state = INIT_STATE, action) => {
    switch(action.type){
        case Types.LOGIN: {
            console.log(action.payload);
            return {...state, account: action.payload, redirectToReferrer: true};          
        }  
        case Types.REGISTER: {
            return {...state, account: action.payload, redirectToReferrer: true};
        }
        case Types.GET_CURRENT_ACCOUNT: {
            return {...state, account: action.payload}
        }
        default: return state;
    }
};
export default auth;
