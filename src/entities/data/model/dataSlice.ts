import { createSlice } from '@reduxjs/toolkit';
import { getUserDoc } from '../api';
import { createUserDoc } from '../../../feature/createData/api';
import { deleteUserDoc } from '../../../feature/deleteData/api';
import { updateUserDoc } from '../../../feature/updateData/api';

export interface UserDoc {
    id: string;
    companySigDate: string;
    companySignatureName: string;
    documentName: string;
    documentStatus: string;
    documentType: string;
    employeeNumber: string;
    employeeSigDate: string;
    employeeSignatureName: string;
  }

interface UserDocsState {
    data: UserDoc[];
    status: 'sleep' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }

  const initialState: UserDocsState = {
    data: [],
    status: 'sleep',
    error: null,
  };

const userDocsSlice=createSlice({
    name:'userDocs',
    initialState,
    reducers: {},
    extraReducers:(builder) =>{
        builder
        .addCase(getUserDoc.pending, (state) =>{
            state.status='loading'
        })
        .addCase(getUserDoc.fulfilled, (state,action) =>{
            state.status='succeeded'
            state.data=action.payload
        })
        .addCase(getUserDoc.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? null;
          })
        .addCase(createUserDoc.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        .addCase(deleteUserDoc.fulfilled, (state, action:any) => {
            state.data=state.data.filter(el => el.id!=action.payload)
        })
        .addCase(updateUserDoc.fulfilled, (state, action:any) => {
            state.data = state.data.filter((el) => el.id !== action.payload);
            state.data.push(action.payload)
        })
    }
})

export default userDocsSlice.reducer;