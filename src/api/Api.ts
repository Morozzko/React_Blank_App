import axios from "axios";

const baseURL="https://jsonplaceholder.typicode.com/";
const headers = {
    Authorization: "",
}

if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`
}

export const instance = axios.create({
    baseURL,
    headers
});
