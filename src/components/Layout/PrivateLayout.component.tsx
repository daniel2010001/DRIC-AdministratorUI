import { createCustomUser } from "@/adapters";
import { useErrorContext } from "@/contexts";
import { createUser } from "@/redux/states";
import { getTokenStorage, getUserProfile } from "@/services";
import { Suspense, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Header, Sidebar } from ".";
import { ErrorFallback, LoadingFallback } from "../Fallback";

export const PrivateLayout = () => {
  const { error } = useErrorContext();
  const storedToken = getTokenStorage();
  if (!storedToken) return <Navigate to="/login" replace />;
  const dispatch = useDispatch();
  getUserProfile(storedToken).then(({ data: userProfile }) => {
    dispatch(createUser(createCustomUser(userProfile)));
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (!isSidebarOpen) return;
    console.log("closeSidebar");
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main className="lg:ml-64 mt-16 flex flex-col justify-center items-center -z-10 light-primary dark:dark-primary">
        <div className="flex p-4 w-full min-h-[calc(100vh-64px)]">
          <Suspense fallback={<LoadingFallback />}>
            {error ? <ErrorFallback error={error} /> : <Outlet />}
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default PrivateLayout;
