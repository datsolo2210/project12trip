import * as Types from '../constants/constant';
const INIT_STATE = {
    newReview: {},
    myReviews: [],
    pendingReviews: [],
    current_page: 1,
    pages: 0,
    myVoted: []
};

const review = (state = INIT_STATE, action) => {

    switch (action.type) {
        case Types.CREATE_REVIEW: {
            return { ...state, newReview: action.payload };
        }
        case Types.GET_MY_REVIEWS: {
            return { 
                ...state, 
                myReviews: action.payload.reviews, 
                current_page: action.payload.current, 
                pages: action.payload.pages 
            };
        }
        case Types.GET_PENDING_REVIEWS: {
            return { 
                ...state, 
                pendingReviews: action.payload.reviews, 
                current_page: action.payload.current, 
                pages: action.payload.pages 
            };
        }
        case Types.SUBMIT_VOTE: {
            var id = action.payload.review._id;
            state.pendingReviews = state.pendingReviews.filter((item) => {
                return (item._id.toString() !== id.toString());
            });
            
            return {...state, myVoted: [...state.myVoted, action.payload.review]};
        }
        case Types.GET_MY_VOTED: {
            return { 
                ...state, 
                myVoted: action.payload.reviews, 
                current_page: action.payload.current, 
                pages: action.payload.pages 
            };
        }
        default: return state;
    }
}
export default review;