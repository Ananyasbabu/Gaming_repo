import axios from 'axios';
const apiClient = axios.create({
  baseURL:'https://game-4r28.onrender.com',
});

export default apiClient;