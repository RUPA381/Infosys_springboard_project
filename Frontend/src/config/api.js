import axios from "axios"

export const API_BASE_URL="http://localhost:8081"

const jwtToken=localStorage.getItem("jwt_token")
export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        'Authorization':`Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
    }
})