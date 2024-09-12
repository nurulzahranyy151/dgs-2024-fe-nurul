import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://digistar-demo-be.vercel.app/api',
});

export default axiosInstance;
