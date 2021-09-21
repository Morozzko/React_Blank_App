import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_IP

const headers = {
  Authorization: '',
}

const instance = axios.create({
  baseURL,
  headers,
})

instance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

export default instance
