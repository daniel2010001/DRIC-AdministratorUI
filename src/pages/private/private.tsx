import { LoadingFallback } from "@/components/Fallback";
import { PrivateLayout } from "@/components/Layout";
import { PrivateRoutes } from "@/models";
import { RoutesWithNotFound } from "@/utilities";
import { Suspense, lazy } from "react";
import { Navigate, Route } from "react-router-dom";

const Home = lazy(() => import("../Home/PrivateHome"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const ProblemsRoutes = lazy(() => import("../Problem/problems-routes"));

export const Private = () => {
  return (
    <PrivateLayout>
      <Suspense fallback={<LoadingFallback />}>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path={PrivateRoutes.HOME} index element={<Home />} />
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          <Route
            path={PrivateRoutes.PROBLEMS + "/*"}
            element={<ProblemsRoutes />}
          />
        </RoutesWithNotFound>
      </Suspense>
    </PrivateLayout>
  );
};

export default Private;
