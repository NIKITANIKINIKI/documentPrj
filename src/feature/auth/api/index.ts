import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../shared/api/axiosConfig";
import { toast } from "react-hot-toast";

type Credentials = {
  username: string;
  password: string;
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/ru/data/v3/testmethods/docs/login",
        credentials
      );
      
      if (response.status === 200) {
        if ("error_text" in response.data) {
          toast.error("Неверный логин или пароль!");
        } else {
          toast.success("Запрос успешно отправлен!");
        }
        return response.data;
      }

      return rejectWithValue("Unexpected response status");
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("Неверные учетные данные. Пожалуйста, попробуйте снова.");
        } else if (error.response.status >= 500) {
          toast.error("Ошибка на сервере. Пожалуйста, попробуйте позже.");
        } else {
          toast.error(error.response.data.message || "Ошибка авторизации");
        }
        return rejectWithValue(
          error.response.data.message || "Ошибка авторизации"
        );
      }
    }
  }
);
