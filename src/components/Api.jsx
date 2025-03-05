import axios from 'axios';

const Api = axios.create({
   baseURL: 'http://127.0.0.1:8005',
});

Api.interceptors.request.use(config => {
   // Retrieve the access token
   const accessToken = localStorage.getItem('token');

   // Add the access token to the Authorization header
   config.headers.Authorization = `Bearer ${accessToken}`;

   return config;
});

export default Api;