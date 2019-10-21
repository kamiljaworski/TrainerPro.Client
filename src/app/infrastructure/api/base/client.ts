import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { getUserToken } from './tokenManagement';


export const client = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,  
});

client.interceptors.request.use((config: AxiosRequestConfig) => {
  let tokenResponse = getUserToken();
  config.headers.Authorization = tokenResponse ? `Bearer ${tokenResponse.access_token}` : undefined;
  
  config.paramsSerializer = params => {
    return qs.stringify(params, {
      arrayFormat: "repeat",
      encode: false,
      allowDots: true,
    });
  };

  return config;
});
