import axios from "axios"

export const LoginAdmin = async(email,password)=>{
   return await axios.post("https://api-ecommerce-pqnh.onrender.com/api/v1/loginAdmin",email,password)
}