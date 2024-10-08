import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../../shared/api/axiosConfig";
import { UserDoc } from '../../../entities/data/model/dataSlice';
import toast from "react-hot-toast";

export const createUserDoc = createAsyncThunk<UserDoc, UserDoc>(
  'userDocs/createUserDoc',
  async (userDoc: UserDoc, { rejectWithValue }) => {
    try {
      const response = await axios.post('/ru/data/v3/testmethods/docs/userdocs/create', userDoc);
      
      if (response.status === 200) {
        toast.success("Документ успешно создан!");
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
      toast.error("Ошибка при создании документа");
      return rejectWithValue(
        error.response?.data?.message || "Ошибка при создании документа"
      );
    }
  }
);
