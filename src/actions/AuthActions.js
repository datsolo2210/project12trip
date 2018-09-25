import * as Types from '../constants/constant';
import { callApi } from '../utils/apiCaller';
import {setCookie} from '../helper';

export const actLoginRequest = (login) => (dispatch) => {
    console.log(login);
    return callApi('login', 'POST', login).then(res => {
        var data = res.data;
        setCookie('token', data.token, 1);
        dispatch({type: Types.LOGIN, payload: data.account});
    }).catch(err => {
        console.log(err);
    });
};

export const actRegisterRequest = (newUser) => (dispatch) => {
    return callApi('account', 'POST', newUser)
    .then(res => {
        var data = res.data;
        setCookie('token', data.token, 1);
        dispatch({
            type: Types.REGISTER,
            payload: data.account
        });
    })
    .catch(err => {
        console.log(err);
    });
};