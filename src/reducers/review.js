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
        case Types.GET_PENDING_REVIEWS: {
            return {...state, pendingReviews: action.payload};
        }
        case Types.LIKE_REVIEW: {
            return {...state}
        }
        case Types.DISLIKE_REVIEW: {
            return {...state}
        }
        case Types.UNLIKE_REVIEW: {
            return {...state}
        }
        case Types.UNDISLIKE_REVIEW: {
            return {...state}
        }
        default: return state;
    }
}
export default review;