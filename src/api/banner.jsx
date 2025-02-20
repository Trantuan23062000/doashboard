import axios from "axios"

export const CreateBanner = (data) =>{
    return axios.post("https://api-ecommerce-pqnh.onrender.com/api/v1/banner/create",data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
}

export const getBanner = ()=>{
    //return axios.get("http://localhost:8000/api/v1/brand/getBrand")
    return axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/banner/get")
}

export const UpdateBanner = async(id,data)=>{
    try {
        const response = await axios.put(`https://api-ecommerce-pqnh.onrender.com/api/v1/banner/update/${id}`, data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        return response
    } catch (error) {
        throw new Error('Error updating brand'); 
    }
}
export const DeletBanner = (id) =>{
    return axios.delete(`https://api-ecommerce-pqnh.onrender.com/api/v1/banner/delete/${id}`,)
}





