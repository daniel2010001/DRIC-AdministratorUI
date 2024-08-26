import { PublicRoutes } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const { user } = useSelector((store: AppStore) => store);
  return user.id ? <Outlet /> : <Navigate to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
