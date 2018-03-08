import axios from 'axios';
import qs from 'qs'
let base;
if(process.env.NODE_ENV == 'development'){
    base = 'http://127.0.0.1:50000';
}else{
    base = 'http://haitaoway.cn:50000';
}

export const requestLogin =  params => { return axios.post(`${base}/login`, qs.stringify(params))}

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };