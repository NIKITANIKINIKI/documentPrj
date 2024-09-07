import axios from "axios";
import { RootState } from "../../app/providers/store";

const HOST = "https://test.v5.pryaniky.com";

const instance = axios.create({
  baseURL: HOST,
});

let store: { getState: () => RootState } | undefined;
export const setStore = (reduxStore: { getState: () => RootState }) => {
  store = reduxStore;
};

instance.interceptors.request.use(
  (config) => {
    if (store) {
      const token = store.getState().user.token;
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
