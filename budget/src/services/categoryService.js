import axiosInstance from '../api/axios';

export const createCategory = async (walletId, name) => {
  return axiosInstance.post('/categories', { wallet: walletId, name });
};

export const updateCategory = async (categoryId, name) => {
  return axiosInstance.put(`/categories/${categoryId}`, { name });
};

export const listCategories = async () => {
  return axiosInstance.get('/categories');
};

export const deleteCategory = async (categoryId) => {
  return axiosInstance.delete(`/categories/${categoryId}`);
};
