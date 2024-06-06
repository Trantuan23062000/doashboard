import axios from "axios";

export const GetBrands = async () => {
  return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/brand/getBrand");
};
export const GetListProduct = async (pageSize, pageNumber) => {
  return await axios.get(
    `https://api-ecommerce-pqnh.onrender.com/api/v1/productImage/getList/?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
};
export const CreateProductImage = async (formData) => {
  return await axios.post(
    "https://api-ecommerce-pqnh.onrender.com/api/v1/productImage/create",
    formData
  );
};

export const GetListImage = async () => {
  return await axios.get("https://api-ecommerce-pqnh.onrender.com/api/v1/image/getImage");
};

export const UpdateProduct = async (id, formData) => {
  try {
    const response = await axios.put(
      `https://api-ecommerce-pqnh.onrender.com/api/v1/productImage/update/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteProduct = async (id) => {
  return await axios.delete(
    `https://api-ecommerce-pqnh.onrender.com/api/v1/productImage/delete/${id}`
  );
};

export const SearchProduct = (name) => {
  return axios.get(
    `https://api-ecommerce-pqnh.onrender.com/api/v1/productImage/search/?name=${name}`
  );
};
