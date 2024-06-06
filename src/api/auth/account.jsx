import axios from "axios";

export const getUsers = async () =>{
    return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/users")
}

export const getOrderbyId = async(userId)=>{
    return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/oderById/${userId}`)
}