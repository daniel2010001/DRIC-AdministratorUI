import { useEffect, useState } from "react";

// Custom hook para manejar el timeout en la carga de componentes
export const useTimeoutError = (delay: number) => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(new Error("The component is taking too long to load"));
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return error;
};
