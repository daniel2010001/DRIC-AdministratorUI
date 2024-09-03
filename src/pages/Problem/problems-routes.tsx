import { PrivateRoutes as Private } from "@/models";
import { RoutesWithNotFound } from "@/utilities";
import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";

const Problematicas = lazy(() => import("../problematicas/problematicas"));
const Solicitudes = lazy(() => import("../problematicas/solicitudes"));
const ProblemForm = lazy(() => import("./ProblemForm"));
const EditProblem = lazy(() => import("./EditProblem"));
const ViewProblem = lazy(() => import("./ViewProblem"));

export const ProblemsRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={Private.PROBLEM_ALL} />} />
      <Route path={Private.PROBLEM_ALL} element={<Problematicas />} />
      <Route path={Private.REQUESTS} element={<Solicitudes />} />
      <Route path={Private.PROBLEM_FORM} element={<ProblemForm />} />
      <Route path={Private.PROBLEM_EDIT + "/:id"} element={<EditProblem />} />
      <Route path={Private.PROBLEM_VIEW + "/:id"} element={<ViewProblem />} />
    </RoutesWithNotFound>
  );
};

export default ProblemsRoutes;
