import { useTimeoutError } from "@/hooks";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ErrorFallback, LoadingFallback } from "../Fallback";

// Layout para rutas privadas
export const PrivateLayout = () => {
  const error = useTimeoutError(5000); // Configura un timeout de 5 segundos

  // Simulación de lógica para proteger rutas privadas
  const isAuthenticated = true; // Cambia esto según tu lógica de autenticación

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <nav>Private Navigation</nav>
      <main>
        <Suspense fallback={<LoadingFallback />}>
          {error ? <ErrorFallback error={error} /> : <Outlet />}
        </Suspense>
      </main>
    </>
  );
};
