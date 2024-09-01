import { PrivateLayout } from "@/components/Layout";
import { PrivateRoutes } from "@/models";
import { RoutesWithNotFound } from "@/utilities";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

const Home = lazy(() => import("../Home/PrivateHome"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard"));
const Problematicas = lazy(() => import("../problematicas/problematicas"));
const ProblemForm = lazy(() => import("../Problem/ProblemForm"));
const EditProblem = lazy(() => import("../Problem/EditProblem"));

export const Private = () => {
  return (
    <PrivateLayout>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PrivateRoutes.HOME} index element={<Home />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.EDIT_PROBLEM} element={<EditProblem />} />
        <Route path={PrivateRoutes.FORM_PROBLEM} element={<ProblemForm />} />
        <Route path={PrivateRoutes.PROBLEMS} element={<Problematicas />} />
        <Route path={PrivateRoutes.TABLA} element={<Problematicas />} />
        {/* <Route path={PrivateRoutes.VIEW_PROBLEM} element={<ViewProblematica />} /> */}
      </RoutesWithNotFound>
    </PrivateLayout>
  );
};

export default Private;
