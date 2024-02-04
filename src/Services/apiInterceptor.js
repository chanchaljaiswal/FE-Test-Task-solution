// apiInterceptor.js

import axios from 'axios';
import { UrlConstants } from '../constants/urlConstants';


// Created an Axios instance with a base URL
const api = axios.create({
  baseURL: UrlConstants.BASE_URL,
});

// Request interceptor to add common headers or modify the request
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
