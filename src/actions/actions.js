import {
    loginAction,
    pingAction,
    logoutAction,
    clearLoginAction
} from './AuthAction';
import CRUDAction from './commonAction';
import { DISH_TYPES } from './types';
export const loginAdmin = loginAction;
export const getPing = pingAction;
export const logoutAdmin = logoutAction;
export const clearLogin = clearLoginAction;

export const dishActions = new CRUDAction("dish", DISH_TYPES);