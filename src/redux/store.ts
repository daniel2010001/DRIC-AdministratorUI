import { AppStorage } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, UserReducer } from "./states";

export default configureStore<AppStorage>({
  reducer: {
    user: UserReducer,
    auth: AuthReducer,
  },
});
