import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useErrorContext } from "@/contexts";

/**
 * Función para manejar operaciones asíncronas usando useEffect. Ejecuta la petición de
 * axios y maneja el resultado siempre y cuando se tenga montado el componente.
 *
 * También captura los errores y los maneja en el contexto de error.
 *
 * @param asyncFn Petición de axios que se desea ejecutar
 * @param successFunction Función que se ejecuta cuando se resuelve la petición, recibe como parámetro los datos obtenidos
 * @param returnFunction Función que se ejecuta cuando el componente se desmonta o si cambian las dependencias
 * @param dependencies Array de dependencias que se pasa al useEffect
 */
export const useAsync = (
  asyncFn: Promise<AxiosResponse<any, any>>,
  successFunction: Function,
  returnFunction: Function = () => {},
  dependencies: any[] = []
) => {
  const { setError } = useErrorContext();
  useEffect(() => {
    let isActive = true;
    asyncFn
      .then(({ data }) => {
        if (isActive) successFunction(data);
      })
      .catch((err) => {
        if (isActive) setError(err);
      });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};
