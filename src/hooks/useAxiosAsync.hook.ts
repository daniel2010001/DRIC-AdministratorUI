import { AxiosResponse } from "axios";
import { useEffect } from "react";

/**
 * Función para manejar operaciones asíncronas usando useEffect. Ejecuta la petición de axios y maneja el resultado siempre y cuando se tenga montado el componente
 * @param asyncFn Petición de axios que se desea ejecutar
 * @param successFuntion Función que se ejecuta cuando se resuelto la petición, recibe como parámetro los datos obtenidos
 * @param returnFuntion Función que se ejecuta cuando el componente se desmonta o si cambian las dependencias
 * @param dependencies Array de depencias que se pasa al useEffect
 */
export const useAsync = (
  asyncFn: Promise<AxiosResponse<any, any>>,
  successFuntion: Function,
  returnFuntion: Function = () => {},
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn.then(({ data }) => {
      if (isActive) successFuntion(data);
    });
    return () => {
      returnFuntion && returnFuntion();
      isActive = false;
    };
  }, dependencies);
};
