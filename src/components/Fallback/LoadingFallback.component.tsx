// Fallback para la carga diferida
// Usar como <Suspense fallback={<LoadingFallback />}>
// y bajar la conexión de red
export const LoadingFallback = () => (
  <div className="loading-screen">
    <h1>Cargando...</h1>
  </div>
);
