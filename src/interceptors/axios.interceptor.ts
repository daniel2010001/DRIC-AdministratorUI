import { AuthStore } from "@/models";
import { customAxiosError, getLocalStore, LocalStorageKeys } from "@/utilities";
import axios, { InternalAxiosRequestConfig } from "axios";

export const AxiosInterceptor = () => {
  const updateHeader = (request: InternalAxiosRequestConfig) => {
    const authStore: AuthStore = getLocalStore(LocalStorageKeys.AUTH);
    if (authStore.auth) request.headers.Authorization = authStore.token;
    request.headers["Content-Type"] = "application/json";
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes("assets")) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      console.log("response", response);
      // SnackbarUtilities.success("Success");
      return response;
    },
    (error) => {
      // SnackbarUtilities.error(getValidationError(error.code));
      console.log(customAxiosError(error.code));
      return Promise.reject(error);
    }
  );
};
