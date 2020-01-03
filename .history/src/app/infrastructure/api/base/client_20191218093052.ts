import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { getUserToken } from "./tokenManagement";
import { toast } from "react-toastify";

export const client = axios.create({
  baseURL: "https://localhost:44385/"
});

client.interceptors.request.use((config: AxiosRequestConfig) => {
  let tokenResponse = getUserToken();

  config.headers.Authorization = `Bearer ${tokenResponse}`;

  config.paramsSerializer = params => {
    return qs.stringify(params, {
      arrayFormat: "repeat",
      encode: false,
      allowDots: true
    });
  };

  return config;
});

client.interceptors.response.use(
  response => {
    if (response.status.toString()[0] !== "2") {
      var message = response.data.message
        ? response.data.message
        : response.statusText;
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    return Promise.resolve(response);
  },
  error => {
    // network error
    if (!error.response) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      var message = error.response.data.message
        ? error.response.data.message
        : error.message;
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    return Promise.resolve(error);
  }
);
