import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost/slimpokedex"
})

export default api;
