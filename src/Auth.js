import {setCookie, removeCookie} from './helper';

// setCookie('isAuthenticated', 0, 1);

const Auth = {

    authenticate(cb) {
        setCookie('isAuthenticated', 1, 1);
        setTimeout(cb, 100);
    },

    signout(cb) {
        removeCookie("isAuthenticated");
        setTimeout(cb, 100);
    }
}

export default Auth;