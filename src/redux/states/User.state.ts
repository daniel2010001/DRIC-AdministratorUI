import { User, inicialUser } from "@/models";
import { setLocalStore, removeLocalStore, LocalStorageKeys } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: LocalStorageKeys.USER,
  initialState: inicialUser,
  reducers: {
    createUser: (state, action) => {
      setLocalStore<User>(LocalStorageKeys.USER, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      setLocalStore<User>(LocalStorageKeys.USER, result);
      return result;
    },
    resetUser: () => {
      removeLocalStore(LocalStorageKeys.USER);
      return inicialUser;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
