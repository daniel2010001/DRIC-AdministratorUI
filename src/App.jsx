// import { Background, Login, Problematicas, ProblemForm } from "./pages";
import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ErrorProvider } from "./contexts";
import store from "./redux/store";
import { Provider } from "react-redux";
import { PrivateLayout, PublicLayout } from "./components/Layout";

// Simulación de componentes de página y layouts
// const PublicHome = lazy(() => import("./pages/Home/PublicHome"));
const PrivateHome = lazy(() => import("./pages/Home/PrivateHome"));
const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Problematicas = lazy(() => import("./pages/Problematicas/Problematicas"));
const ProblemForm = lazy(() => import("./pages/Problem/ProblemForm"));
const EditProblem = lazy(() => import("./pages/Problem/EditProblem"));
const ViewProblem = lazy(() => import("./pages/Problem/ViewProblem"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorProvider>
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/form" element={<ProblemForm />} />
            </Route>

            <Route path="/" element={<PrivateLayout />}>
              <Route path="/home" index element={<PrivateHome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/problem/edit/:id" element={<EditProblem />} />
              <Route path="/problem/view/:id" element={<ViewProblem />} />
              <Route path="/problem/new" element={<ProblemForm />} />
              <Route path="/problems" element={<Problematicas />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ErrorProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
