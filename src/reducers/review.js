import * as Types from '../constants/constant';
const INIT_STATE = {
    newReview: {},
    myReviews: [],
    pendingReviews: []
};
const review = (state=INIT_STATE, action) => {
    switch(action.type) {
        case Types.CREATE_REVIEW: {
            return {...state, newReview: action.payload};
        }
        case Types.GET_MY_REVIEWS: {
            return {...state, myReviews: action.payload};
        }
        default: return state;
    }
}
export default review;