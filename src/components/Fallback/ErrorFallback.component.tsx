// Fallback para manejar errores de carga
export const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="error-screen">
    <h1>Error loading component</h1>
    <p>{error.message}</p>
  </div>
);
