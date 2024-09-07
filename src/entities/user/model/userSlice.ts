import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../../../feature/auth/api";

interface UserState {
  username: string | null;
  status: "loading" | "succeeded" | "failed" | "sleep";
  token: string | null;
}

const initialState: UserState = {
  username: localStorage.getItem("authName"),
  status: "sleep",
  token: localStorage.getItem("authToken"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.token = null;
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        if (action.payload.data) {
          localStorage.setItem("authToken", action.payload.data.token);
          state.token = action.payload.data.token;
        }
      })
      .addCase(login.rejected, (state) => {
        state.status = "failed";
        state.token = null;
      });
  },
});

export default userSlice.reducer;
export const { setToken } = userSlice.actions;
