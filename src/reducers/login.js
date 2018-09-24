import * as Types from '../constants/constant';
const INIT_STATE = {};
const login = (state = INIT_STATE, action) => {
    switch(action.type){
        case Types.LOGIN: {
            console.log(action.payload);
            return action.payload;
            
        }  
        default: return state;
    }
};
export default login;
