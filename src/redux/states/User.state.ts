import { inicialUser } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: inicialUser,
  reducers: {
    setUser: (state, action) => action.payload,
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => inicialUser,
  },
});

export const { setUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
