import axiosInstance from '../api/axios';

export const createWallet = async (name) => {
  return axiosInstance.post('/wallets', { name });
};

export const updateWallet = async (walletId, name) => {
  return axiosInstance.put(`/wallets/${walletId}`, { name });
};

export const listWallets = async () => {
  return axiosInstance.get('/wallets');
};

export const deleteWallet = async (walletId) => {
  return axiosInstance.delete(`/wallets/${walletId}`);
};
