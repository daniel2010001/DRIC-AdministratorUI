import { User } from "@/models";
import { configureStore } from "@reduxjs/toolkit";

export interface AppState {
  user: User;
}

export default configureStore<AppState>({
  reducer: {
    user: (state, action) => {
      return action.payload;
    },
  },
});
