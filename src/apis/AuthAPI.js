import {
    hostURL,
    axiosMainAPI,
} from './api'

export const loginAPI = (userData) => {
    return axiosMainAPI.post(`${hostURL}/admin/login`, userData);
} 
export const pingAPI = () => {
    return axiosMainAPI.get(`${hostURL}/ping`);
}

export const logoutAPI = () => {
    return axiosMainAPI.get(`${hostURL }/admin/logout`);
}