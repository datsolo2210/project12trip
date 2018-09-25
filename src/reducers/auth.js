import * as Types from '../constants/constant';
const INIT_STATE = {
    account: {},
    redirectToReferrer: false
};
const login = (state = INIT_STATE, action) => {
    switch(action.type){
        case Types.LOGIN: {
            console.log(action.payload);
            return {user: action.payload, redirectToReferrer: true};          
        }  
        case Types.REGISTER: {
            return {user: action.payload, redirectToReferrer: true};
        }
        default: return state;
    }
};
export default login;
