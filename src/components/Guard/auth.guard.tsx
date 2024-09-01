import { createCustomUser } from "@/adapters";
import { PrivateRoutes, PublicRoutes } from "@/models";
import { createAuth, createUser } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { getUserProfile } from "@/services";
import { LocalStorageKeys, clearLocalStore, getLocalStore } from "@/utilities";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthGuard = () => {
  const user = useSelector((store: AppStore) => store.user);
  if (!!user.id) return <Outlet />;
  const auth = getLocalStore(LocalStorageKeys.AUTH);
  const dispatch = useDispatch();
  if (auth?.auth) {
    getUserProfile()
      .then(({ data: userProfile }) => {
        dispatch(createUser(createCustomUser(userProfile)));
        dispatch(createAuth(auth));
        return <Navigate to={PrivateRoutes.PRIVATE} />;
      })
      .catch(() => clearLocalStore());
  } else return <Navigate to={PublicRoutes.LOGIN} />;
};

export default AuthGuard;
