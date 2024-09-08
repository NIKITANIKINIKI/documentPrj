import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../../shared/api/axiosConfig";
import { UserDoc } from '../model/dataSlice';

export const getUserDoc = createAsyncThunk<UserDoc[]>(
    'userDocs/getUserDoc',
    async () => {
      const response=await axios.get<any>(`/ru/data/v3/testmethods/docs/userdocs/get`);
      return  response.data.data;
    }
  );