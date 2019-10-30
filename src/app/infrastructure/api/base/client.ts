import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { getUserToken } from './tokenManagement';
import { toast } from "react-toastify";

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

client.interceptors.response.use(response => response, error => {
  // network error
  if (!error.response) { 
    toast.error(error.message, {
      position: toast.POSITION.TOP_RIGHT
    });
    return {};
  }
  else {
    var message = error.response.data.message ? error.response.data.message : error.message;
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    });
  }
});
