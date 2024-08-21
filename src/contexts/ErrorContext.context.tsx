import React, { createContext, useContext, useState } from "react";

// Definimos el tipo para el contexto
interface ErrorContextType {
  error: Error | null;
  setError: (error: Error | null) => void;
}

// Creamos el contexto con valores por defecto
const ErrorContext = createContext<ErrorContextType>({
  error: null,
  setError: () => {},
});

// Proveedor del contexto
export const ErrorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<Error | null>(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useErrorContext = () => useContext(ErrorContext);
