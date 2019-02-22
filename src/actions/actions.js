import {
    loginAction,
    pingAction,
    logoutAction,
    clearLoginAction
} from './AuthAction';

import {
    listDishAction, showDishAction
} from './DishAction';

export const loginAdmin = loginAction;
export const getPing = pingAction;
export const logoutAdmin = logoutAction;
export const clearLogin = clearLoginAction;

export const listDish = listDishAction;
export const showDish = showDishAction;