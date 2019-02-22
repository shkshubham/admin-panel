import { GET_DISH_LIST, SHOW_DISH } from '../actions/types';

const initialState = null;
export function getDishReducer(state = initialState, action){
    switch (action.type) {
        case GET_DISH_LIST:
            if (action.payload.status === 200) {
                return action.payload.data.data;
            }
            return {
               ...state
            }
        default:
            return state;
    }
}

export function getDishDetailReducer(state = initialState, action){
    switch (action.type) {
        case SHOW_DISH:
            if (action.payload.status === 200) {
                return action.payload.data.data;
            }
            return {
               ...state
            }
        default:
            return state;
    }
}