import { User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states";

export interface AppState {
  user: User;
}

export default configureStore<AppState>({
  reducer: {
    user: userSlice.reducer,
  },
});
