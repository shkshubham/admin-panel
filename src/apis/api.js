import axios from 'axios';
export const hostURL =  "http://localhost:8000/api";
export const crudURLS = {
    create: "create",
    update: "update",
    delete: "delete",
    list: "list",
    show: "show"
}

const mainAPIAxios = axios.create({
    withCredentials: true,
});

export const axiosMainAPI = mainAPIAxios; 