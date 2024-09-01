import { inicialAuth } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: inicialAuth,
  reducers: {
    setAuth: (state, action) => action.payload,
    updateAuth: (state, action) => ({ ...state, ...action.payload }),
    resetAuth: () => inicialAuth,
  },
});

export const { setAuth, updateAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
