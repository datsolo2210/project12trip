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

    var index;
    var review = action.payload;
    // console.log(review);

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
            index = findIndex(state.pendingReviews, review.review._id);
            // console.log(index);  
            var p = state.pendingReviews;
            console.log(p.length+"day la p")
            p.splice(index, 1);
            console.log(p.length+"day la p sau khi splice");
            // console.log({...state, pendingReviews: p});

            return { ...state, pendingReviews: p};
        }
        case Types.GET_MY_VOTED: {
            return { ...state, myVoted: action.payload };
        }
        default: return state;
    }
}
export default review;