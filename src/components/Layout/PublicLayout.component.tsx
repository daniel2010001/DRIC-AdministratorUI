import { useErrorContext } from "@/contexts";
import { resetUser } from "@/redux/states";
import { getTokenStorage } from "@/services";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ErrorFallback, LoadingFallback } from "../Fallback";

export const PublicLayout = () => {
  const { error } = useErrorContext();
  const storedToken = getTokenStorage();
  if (storedToken) return <Navigate to="/dashboard" replace />;
  const dispatch = useDispatch();
  dispatch(resetUser());
  return (
    <>
      <main className="flex flex-col justify-center items-center -z-10 light-primary dark:dark-primary">
        <div className="flex p-4 w-full min-h-screen">
          <Suspense fallback={<LoadingFallback />}>
            {error ? <ErrorFallback error={error} /> : <Outlet />}
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default PublicLayout;
