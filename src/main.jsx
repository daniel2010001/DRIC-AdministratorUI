import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { AxiosInterceptor } from "./interceptors/axios.interceptor";

AxiosInterceptor();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
