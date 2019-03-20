import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './AuthReducer';
import CRUDReducer from './CommonReducer';
import { DISH_TYPES } from '../actions/types';

const dishReducer = new CRUDReducer("dish", DISH_TYPES);

export default combineReducers({
    user: authReducer,
    dishes: dishReducer.listReducer,
    dishAdded: dishReducer.addReducer,
    form: formReducer,
});