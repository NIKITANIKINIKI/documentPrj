import axios from "axios";

const HOST = "https://test.v5.pryaniky.com";

const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("authToken");
    if (token) {
      config.headers["x-auth"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
