import { useErrorContext } from "@/contexts";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ErrorFallback, LoadingFallback } from "../Fallback";

// Layout para rutas públicas
export const PublicLayout = () => {
  const { error } = useErrorContext(); // Usamos el contexto de error

  // Simulación de lógica para redirigir si el usuario ya está autenticado
  const isAuthenticated = false; // Cambia esto según tu lógica de autenticación

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Si ocurre un error, renderizamos el ErrorFallback
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

export default PublicLayout;
