import { AuthStore } from "@/models";
import {
  customAxiosError,
  getLocalStore,
  LocalStorageKeys,
  SnackbarUtilities,
} from "@/utilities";
import axios, { InternalAxiosRequestConfig } from "axios";

export const AxiosInterceptor = () => {
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    const authStore: AuthStore = getLocalStore(LocalStorageKeys.AUTH);
    if (authStore?.auth) request.headers["x-access-token"] = authStore.token;
    request.headers["Content-Type"] = "application/json";
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.code !== "ERR_CANCELED")
        SnackbarUtilities.error(customAxiosError(error.code));
      return Promise.reject(error);
    }
  );
};
