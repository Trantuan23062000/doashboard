import axios from "axios"

export const CreateColor = (Colordata) =>{
    return axios.post("https://api-ecommerce-pqnh.onrender.com/api/v1/color/create",{...Colordata})
}

export const getColors = (page,limit)=>{
    //return axios.get("http://localhost:8000/api/v1/brand/getBrand")
    return axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/color/getpaginate/?page=${page}&limit=${limit}`)
}

export const UpdateColor = async(data)=>{
    try {
        const response = await axios.put("https://api-ecommerce-pqnh.onrender.com/api/v1/color/update",{...data})
        return response
    } catch (error) {
        throw new Error('Error updating Color'); 
    }
}
export const DeletColor = (id) =>{
    return axios.delete(`https://api-ecommerce-pqnh.onrender.com/api/v1/color/delete/${id}`,)
}

export const SearchColor = (color) =>{
    return axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/color/search/?color=${color}`)
}

