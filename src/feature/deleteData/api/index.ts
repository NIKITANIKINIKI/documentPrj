import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../shared/api/axiosConfig";
import toast from "react-hot-toast";

export const deleteUserDoc = createAsyncThunk(
  "userDocs/deleteUserDoc",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`
      );
      if (response.status === 200) {
        toast.success("Успешно удалено!");
        return id;
      } else {
        toast.error("Неожиданный статус ответа");
        return rejectWithValue("Неожиданный статус ответа: " + response.status);
      }
    } catch (error: any) {
      if (error.response?.status === 500) {
        toast.error("Ошибка сервера");
        return rejectWithValue("Ошибка сервера (500): Попробуйте позже.");
      }
      toast.error("Ошибка при удалении документа");
      return rejectWithValue(
        error.response?.data?.message || "Ошибка при удалении документа"
      );
    }
  }
);
