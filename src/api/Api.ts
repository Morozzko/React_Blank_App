import axios from "axios";

const baseURL=process.env.REACT_APP_BACKEND_IP;
console.log(process.env.REACT_APP_BACKEND_IP)
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
