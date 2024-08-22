import { AuthState, User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, userSlice } from "./states";

export interface AppState {
  user: User;
  auth: AuthState;
}

export default configureStore<AppState>({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});
