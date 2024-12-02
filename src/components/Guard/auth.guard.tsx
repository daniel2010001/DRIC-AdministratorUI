import { AppStorage, PublicRoutes } from "@/models";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const auth = useSelector((store: AppStorage) => store.auth);
  if (auth.isAuthed) return <Outlet />;
  return <Navigate to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
