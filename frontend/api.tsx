import axios from 'axios'

const api = axios.create({
    baseURL: `http://3.144.240.106:9191/`,
})
export default api
