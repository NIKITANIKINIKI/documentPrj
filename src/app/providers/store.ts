import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../../entities/user/model/userSlice';
import userDocsSlice from '../../entities/data/model/dataSlice'
 
export const store = configureStore({
  reducer: {
    user: userSlice,
    userDocs: userDocsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;