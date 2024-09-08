import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";

const HOST = "https://test.v5.pryaniky.com";

const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = window.localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers["x-auth"] = token;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default instance;
