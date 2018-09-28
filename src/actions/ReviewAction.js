import * as Types from '../constants/constant';
import { callHotelApi, callReviewAPI, callApi } from '../utils/apiCaller';

export const actCreateReview = (review) => (dispatch) => {
    return callApi('review', 'POST', review).then(res => {
        return dispatch({type: Types.CREATE_REVIEW, payload: res.data})
    })
        .catch(err => {
            console.log(err);
        })
};