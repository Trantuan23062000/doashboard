import axios from "axios"

export const GetProductDetails = async (pageSize,pageNumber) =>{
   return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/productDetails/get/?pageSize=${pageSize}&pageNumber=${pageNumber}`)
}

export const getProduct = async() =>{
   return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/product/get")
}

export const getVariant = async() =>{
   return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/variant/get")
}

export const getImageDetail = async (id) =>{
   return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/image/getById/${id}`)
}


export const CreateProductDetails = async(formData)=>{
   return await axios.post("https://api-ecommerce-pqnh.onrender.com/api/v1/productDetails/create",formData)
}

export const UpdateProductDetails = async(detailId,data)=>{
   return await axios.put(`https://api-ecommerce-pqnh.onrender.com/api/v1/productDetails/update/${detailId}`,data)
}

export const DeteteDetails = async(detailId)=>{
   return await axios.delete(`https://api-ecommerce-pqnh.onrender.com/api/v1/productDetails/delete/${detailId}`)
}

export const SearchProductDetails = async(name)=>{
   return await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/productDetails/search/?name=${name}`)
}

export const GetColor = async() =>{
   return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/color")
}

export const GetSize = async() =>{
   return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/size")
}
