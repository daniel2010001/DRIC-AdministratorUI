// import { Background, Login, Problematicas, ProblemForm } from "./pages";
import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ErrorProvider } from "./contexts";
import store from "./redux/store";
import { Provider } from "react-redux";
import { PrivateLayout, PublicLayout } from "./components/Layout";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthGuard } from "./components/Guard";
import { RoutesWithNotFound, SnackbarConfigurator } from "./utilities";
import CustomSnackbarProvider from "./components/Snackbar/Snackbar.component";

// Simulación de componentes de página y layouts
// const PublicHome = lazy(() => import("./pages/Home/PublicHome"));
const PrivateHome = lazy(() => import("./pages/Home/PrivateHome"));
const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Problematicas = lazy(() => import("./pages/problematicas/problematicas"));
const ProblemForm = lazy(() => import("./pages/Problem/ProblemForm"));
const EditProblem = lazy(() => import("./pages/Problem/EditProblem"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CustomSnackbarProvider>
          <SnackbarConfigurator />
          <RoutesWithNotFound>
            <Route element={<PublicLayout />}>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/form" element={<ProblemForm />} />
            </Route>

            <Route element={<PrivateLayout />}>
              <Route path="/home" index element={<PrivateHome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/problem/edit/:id" element={<EditProblem />} />
              <Route path="/problem/new" element={<ProblemForm />} />
              <Route path="/problems" element={<Problematicas />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route
              path="/"
              element={<Navigate to={PrivateRoutes.PRIVATE} replace />}
            />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.FORM} element={<ProblemForm />} />

            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.PRIVATE} element={<PrivateLayout />} />
            </Route>
          </RoutesWithNotFound>
        </CustomSnackbarProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
