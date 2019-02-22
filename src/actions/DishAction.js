import CommonAPI from '../apis/CommonAPI';
import { CREATE_DISH, GET_DISH_LIST, SHOW_DISH , UPDATE_DISH, DELETE_DISH } from './types';
const commonAPI = new CommonAPI("class");

export const listDishAction = () => {
    const payload = commonAPI.listAPI();
    return {
        type: GET_DISH_LIST,
        payload
    }
}
export const createDishAction = (data) => {
    const payload = commonAPI.createAPI(data);
    return {
        type : CREATE_DISH,
        payload
    }
}
export const updateDishAction = (data) => {
    const payload = commonAPI.updateAPI(data);
    return {
        type : UPDATE_DISH,
        payload
    }
}
export const deleteDishAction = (id) => {
    const payload = commonAPI.createAPI(id);
    return {
        type : DELETE_DISH,
        payload
    }
}

export const showDishAction = (id) => {
    const payload = commonAPI.showAPI(id);
    return {
        type : SHOW_DISH,
        payload
    }
}