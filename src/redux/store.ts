import { AuthStore, User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice, userSlice } from "./states";

export interface AppStore {
  user: User;
  auth: AuthStore;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});
