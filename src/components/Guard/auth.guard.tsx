import { AppStore, PublicRoutes } from "@/models";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const auth = useSelector((store: AppStore) => store.auth);
  if (auth.isAuthed) return <Outlet />;
  return <Navigate to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
