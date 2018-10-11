import * as Types from '../constants/constant';
const INIT_STATE = {
    newReview: {},
    myReviews: [],
    pendingReviews: [],
    myVoted: []
};

var findIndex = (pendingReviews, id) => {
    var r = -1;
    for (var i = 0; i < pendingReviews.length; i++) {
        if (pendingReviews[i]._id.toString() == id.toString()) r = i;
    }
    return r;
}


const review = (state = INIT_STATE, action) => {

    switch (action.type) {
        case Types.CREATE_REVIEW: {
            return { ...state, newReview: action.payload };
        }
        case Types.GET_MY_REVIEWS: {
            return { ...state, myReviews: action.payload };
        }
        case Types.GET_PENDING_REVIEWS: {
            return { ...state, pendingReviews: action.payload };
        }
        case Types.SUBMIT_VOTE: {
            var id = action.payload.review._id;
            state.pendingReviews = state.pendingReviews.filter((item) => {
                return (item._id.toString() !== id.toString());
            });
            
            return {...state, myVoted: [...state.myVoted, action.payload.review]};
        }
        case Types.GET_MY_VOTED: {
            return { ...state, myVoted: action.payload };
        }
        default: return state;
    }
}
export default review;