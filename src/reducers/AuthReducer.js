import { LOGIN, LOGOUT, PING, REGISTER, CLEAR_REGISTER, CLEAR_LOGIN } from '../actions/types';

export default (state = {
    isLoggedIn: null,
    isPingLoaded: null
}, action) => {
    switch (action.type) {
        case LOGIN:
            state.isPingLoaded = true;
            if (action.payload.status === 200) {
                state.isLoggedIn = true;
                return {
                   ...state
                }
            }
            state.isLoggedIn = false;
            return {
               ...state
            }
        case PING:
            state.isPingLoaded = true;
            if (action.payload.status === 200) {
                state.isLoggedIn = true;
                return {
                   ...state
                }
            }
            state.isLoggedIn = null;
            return {
               ...state
            }
        
        case LOGOUT:
            if (action.payload.status === 200) {
                state.isLoggedIn = null;
                state.isPingLoaded = true;
                return {
                    ...state
                }
            }
            return {
               ...state
            }
        case CLEAR_LOGIN:
            return {
                isLoggedIn: null,
                isPingLoaded: null
            }
        default:
            return state;
    }
}