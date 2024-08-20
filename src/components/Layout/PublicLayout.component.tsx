import { useTimeoutError } from "@/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { ErrorFallback, LoadingFallback } from "../Fallback";
import { Suspense } from "react";

// Layout para rutas públicas
export const PublicLayout = () => {
  const error = useTimeoutError(5000); // Configura un timeout de 5 segundos

  // Simulación de lógica para redirigir si el usuario ya está autenticado
  const isAuthenticated = false; // Cambia esto según tu lógica de autenticación

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <nav>Public Navigation</nav>
      <main>
        <Suspense fallback={<LoadingFallback />}>
          {error ? <ErrorFallback error={error} /> : <Outlet />}
        </Suspense>
      </main>
    </>
  );
};
