// import { Background, Login, Problematicas, ProblemForm } from "./pages";
import { lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { AuthGuard } from "./components/Guard";
import CustomSnackbarProvider from "./components/Snackbar/Snackbar.component";
import { PrivateRoutes, PublicRoutes } from "./models";
import Private from "./pages/private/private";
import store from "./redux/store";
import { RoutesWithNotFound, SnackbarConfigurator } from "./utilities";

const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CustomSnackbarProvider>
          <SnackbarConfigurator />
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />

            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesWithNotFound>
        </CustomSnackbarProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
