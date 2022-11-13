import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  headers:{
    'Authorization':'Bearer ' + localStorage.getItem('token')
  },
  baseURL: BASE_URL,
});
