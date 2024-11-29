import axios from "axios";


export default axios.create({
    baseURL: 'http://localhost:8000/products',
    headers: { 'Content-Type': 'application/json' },
    withCredentials:true
})



