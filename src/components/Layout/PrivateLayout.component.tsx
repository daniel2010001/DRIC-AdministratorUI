import { useErrorContext } from "@/contexts";
import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ErrorFallback, LoadingFallback } from "../Fallback";

// Layout para rutas privadas
export const PrivateLayout = () => {
  const { error } = useErrorContext(); // Usamos el contexto de error

  // Aquí podrías añadir lógica para verificar si el usuario tiene permisos
  // Ejemplo: const hasPermissions = useSelector(selectUserPermissions);

  // Si ocurre un error, renderizamos el ErrorFallback
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

export default PrivateLayout;
