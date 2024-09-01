import { AuthStore, inicialAuth } from "@/models";
import { setLocalStore, removeLocalStore, LocalStorageKeys } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: LocalStorageKeys.AUTH,
  initialState: inicialAuth,
  reducers: {
    createAuth: (state, action) => {
      setLocalStore<AuthStore>(LocalStorageKeys.AUTH, action.payload);
      return action.payload;
    },
    updateAuth: (state, action) => {
      const result = { ...state, ...action.payload };
      setLocalStore<AuthStore>(LocalStorageKeys.AUTH, result);
      return result;
    },
    resetAuth: () => {
      removeLocalStore(LocalStorageKeys.AUTH);
      return inicialAuth;
    },
  },
});

export const { createAuth, updateAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
