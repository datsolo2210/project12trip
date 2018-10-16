import * as Types from '../constants/constant';
import { callApi } from '../utils/apiCaller';
import { setCookie } from '../helper';

export const actLoginRequest = (login) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return callApi('login', 'POST', login).then(res => {
            var data = res.data;
            setCookie('token', data.token, 1);
            setCookie('session_id', data.sessionid, 1);
            dispatch({ type: Types.LOGIN, payload: data.account });
            resolve(data.account);
            console.log(data);
        }).catch(err => {
            console.log(err);
            window.alert('login false');
            reject(err);
        });
    })
    

};

export const actRegisterRequest = (newUser) => (dispatch) => {
    return new Promise((resolve, reject) => {
        return callApi('account', 'POST', newUser)
        .then(res => {
            var data = res.data;
            setCookie('token', data.token, 1);
            setCookie('session_id', data.sessionid, 1);
            dispatch({type: Types.REGISTER, payload: data.account});
            resolve(data.account);
        })
        .catch(err => {
            console.log(err);
            reject(err);
        });
    });
};

export const getCurrentAccount = () => dispatch => {
    return callApi('account', 'GET', null)
    .then(res => {
        dispatch({type: Types.GET_CURRENT_ACCOUNT, payload: res.data.account});
    })
    .catch(err => {
        console.log(err);
    })
}