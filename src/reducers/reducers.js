import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './AuthReducer';
import {
    getDishDetailReducer, getDishReducer
} from './DishReducer';

export default combineReducers({
    user: authReducer,
    dishes: getDishReducer,
    dishDetail: getDishDetailReducer,
    form: formReducer,
});