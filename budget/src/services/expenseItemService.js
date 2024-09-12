import axiosInstance from '../api/axios';

export const createExpenseItem = async (title, amount, walletId, categoryId, flowType) => {
  return axiosInstance.post('/expense-items', { title, amount, wallet: walletId, category: categoryId, flowType });
};

export const updateExpenseItem = async (expenseItemId, amount) => {
  return axiosInstance.put(`/expense-items/${expenseItemId}`, { amount });
};

export const listExpenseItems = async () => {
  return axiosInstance.get('/expense-items');
};

export const deleteExpenseItem = async (expenseItemId) => {
  return axiosInstance.delete(`/expense-items/${expenseItemId}`);
};
