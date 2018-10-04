import * as Types from '../constants/constant';
import { callHotelApi, callReviewAPI, callApi } from '../utils/apiCaller';

export const actCreateReview = (review) => (dispatch) => {
    return callApi('review', 'POST', review).then(res => {
        return dispatch({ type: Types.CREATE_REVIEW, payload: res.data })
    })
        .catch(err => {
            console.log(err);
        })
};

export const getMyReviews = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        return callApi('reviews/my-review', 'GET', null).then(res => {
            dispatch({ type: Types.GET_MY_REVIEWS, payload: res.data.reviews });
            resolve(res.data.reviews);
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    })
}

export const getPendingReviews = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        return callApi('reviews/pending', 'GET', null).then(res => {
            dispatch({ type: Types.GET_PENDING_REVIEWS, payload: res.data.reviews });
            resolve(res.data.reviews);
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    })
}

// export const likeReview = (id) => (dispatch) => {
//     return callApi(`review/${id}/like`, 'PUT', null)
//     .then(res => {
//         console.log(res.data);
//         dispatch({type: Types.LIKE_REVIEW, payload: res.data.review});
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// export const dislikeReview = (id) => (dispatch) => {
//     return callApi(`review/${id}/dislike`, 'PUT', null)
//     .then(res => {
//         console.log(res.data);
//         dispatch({type: Types.DISLIKE_REVIEW, payload: res.data.review});
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// export const unlikeReview = (id) => (dispatch) => {
//     return callApi(`review/${id}/unlike`, 'PUT', null)
//     .then(res => {
//         console.log(res.data);
//         dispatch({type: Types.UNLIKE_REVIEW, payload: res.data.review});
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// export const undislikeReview = (id) => (dispatch) => {
//     return callApi(`review/${id}/undislike`, 'PUT', null)
//     .then(res => {
//         console.log(res.data);
//         dispatch({type: Types.UNDISLIKE_REVIEW, payload: res.data.review});
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

export const voteAct = (vote) => (dispatch) => {
    return callApi(`review/${vote.id}/vote`, 'PUT', vote.comment).then(res => {
        console.log(res.data);
        dispatch({type: Types.SUBMIT_REVIEW, payload: res.data});
    })
    .catch(err => {
        console.log(err);
    })
}