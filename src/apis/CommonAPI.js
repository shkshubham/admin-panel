import {
    hostURL,
    crudURLS,
    axiosMainAPI
} from './api'

export default class {
    constructor(type){
        this.url = `${hostURL}/${type}`;
    }
    listAPI = () => {
        return axiosMainAPI.get(`${this.url}/${crudURLS.list}`);
    } 
    createAPI = (data) => {
        return axiosMainAPI.post(`${this.url}/${crudURLS.create}`, data);
    } 
    updateAPI = (id, data) => {
        return axiosMainAPI.put(`${this.url}/${crudURLS.update}/${id}`, data);
    } 
    deleteAPI = (id) => {
        return axiosMainAPI.delete(`${this.url}/${crudURLS.delete}`, {
            id
        });
    }
    showAPI = (id) => {
        return axiosMainAPI.get(`${this.url}/${crudURLS.show}/${id}`);
    } 
}