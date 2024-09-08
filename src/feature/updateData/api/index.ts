import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../../shared/api/axiosConfig";
import { UserDoc } from '../../../entities/data/model/dataSlice';
import toast from "react-hot-toast";

export const updateUserDoc = createAsyncThunk(
  'userDocs/updateUserDoc',
  async ({ id, ...userDoc }: { id: string } & Partial<UserDoc>, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/ru/data/v3/testmethods/docs/userdocs/set/${id}`, userDoc);
      
      if (response.status === 200) {
        toast.success("Документ успешно обновлен!");
        return response.data;
      } else {
        toast.error("Неожиданный статус ответа");
        return rejectWithValue("Неожиданный статус ответа: " + response.status);
      }
    } catch (error: any) {
      if (error.response?.status === 500) {
        toast.error("Ошибка сервера");
        return rejectWithValue("Ошибка сервера (500): Попробуйте позже.");
      }
      toast.error("Ошибка при обновлении документа");
      return rejectWithValue(
        error.response?.data?.message || "Ошибка при обновлении документа"
      );
    }
  }
);
