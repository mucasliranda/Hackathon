import axios from "axios";


const api = axios.create({
  baseURL: "https://repontua-backend.herokuapp.com"
})

export default api