import * as Types from '../constants/constant';
import { callApi } from '../utils/apiCaller';
import {setCookie} from '../helper';

export const actLoginRequest = (login) => (dispatch) => {
    return callApi('login', 'POST', login).then(res => {
        var data = res.data; 
        console.log(data);
        setCookie('token', data.token, 1);
        dispatch({type: Types.LOGIN, payload: data.account});
    }).catch(err => {
        console.log(err);
    });
};