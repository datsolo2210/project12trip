import * as Types from '../constants/constant';
const INIT_STATE = {};
const review = (state=INIT_STATE, action) => {
    switch(action.type) {
        case Types.CREATE_REVIEW: {
            console.log(action.payload);
            return action.payload;
          
        }
        default: return state;
    }
}
export default review;