import { loginAPI, pingAPI,
    logoutAPI
} from '../apis/AuthAPI';
import { LOGIN, PING, LOGOUT, CLEAR_LOGIN
} from './types';
export function loginAction(userData) {
    // const payload = loginAPI(userData);
    const payload = {
        data: "success"
    }
    return {
        type: LOGIN,
        payload
    }
}
export function pingAction(){
    const payload = pingAPI();
    return {
        type: PING,
        payload
    }
}

export function logoutAction(){
    const payload = logoutAPI();
    return {
        type: LOGOUT,
        payload
    }
}

export function clearLoginAction(){
    return {
        type: CLEAR_LOGIN,
    }
}