import * as Types from '../constants/constant';
import { callApi } from '../utils/apiCaller';

export const actCreateReview = (review) => (dispatch) => {
    return callApi('review', 'POST', review).then(res => {
        return dispatch({ type: Types.CREATE_REVIEW, payload: res.data })
    })
        .catch(err => {
            console.log(err);
        })
};

export const getMyReviews = (page = 1) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return callApi(`reviews/my-review?page=${page}`, 'GET', null).then(res => {
            dispatch({ type: Types.GET_MY_REVIEWS, payload: res.data });
            resolve(res.data.reviews);
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    })
}

export const getPendingReviews = (page) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return callApi(`reviews/pending?page=${page}`, 'GET', null).then(res => {
            dispatch({ type: Types.GET_PENDING_REVIEWS, payload: res.data });
            resolve(res.data.reviews);
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    })
}


export const voteAct = (vote) => (dispatch) => {
    return callApi(`review/${vote.id}/vote`, 'PUT', vote.comment).then(res => 
        dispatch({type: Types.SUBMIT_VOTE, payload: res.data})
    )
    .catch(err => {
        console.log(err);
    })
}

export const getMyVoted = (page) => (dispatch) =>{
    return new Promise((resolve, reject) => {
        return callApi(`reviews/my-voted?page=${page}`, 'GET', null).then(res => {
            dispatch({ type: Types.GET_MY_VOTED, payload: res.data });
            resolve(res.data.reviews);
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    })
}