import axios from "axios"

export const CreateBrand = (Branddata) =>{
    return axios.post("https://api-ecommerce-pqnh.onrender.com/api/v1/brand/createBrand",Branddata,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
}

export const getBrands = async (page, limit) => {
  try {
    const response = await axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/brand/getBrand/?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;  // Hoặc bạn có thể xử lý lỗi theo cách khác, chẳng hạn thông báo cho người dùng
  }
};

export const UpdateBrand = async(id,data)=>{
    try {
        const response = await axios.put(`https://api-ecommerce-pqnh.onrender.com/api/v1/brand/update/${id}`, data,
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
export const DeletBrand = (id) =>{
    return axios.delete(`https://api-ecommerce-pqnh.onrender.com/api/v1/brand/delete/${id}`,)
}

export const SearchBrand = (name) =>{
    return axios.get(`https://api-ecommerce-pqnh.onrender.com/api/v1/brand/search/?name=${name}`)
}



