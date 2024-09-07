import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "../../../shared/api/axiosConfig";
import { UserDoc } from '../../../entities/data/model/dataSlice';


export const createUserDoc = createAsyncThunk(
  'userDocs/createUserDoc',
  async (userDoc: UserDoc) => {
    const response = await axios.post('/ru/data/v3/testmethods/docs/userdocs/create', userDoc);
    return response.data;
  }
);