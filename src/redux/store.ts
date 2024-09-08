import { AppStore } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer, UserReducer } from "./states";

export default configureStore<AppStore>({
  reducer: {
    user: UserReducer,
    auth: AuthReducer,
  },
});
