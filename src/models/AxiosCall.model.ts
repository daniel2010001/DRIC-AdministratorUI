import { AxiosResponse } from "axios";

/**
 * Interfaz para las llamadas a la API
 */
export interface AxiosCall<T> {
  /** Llamada a la API */
  call: Promise<AxiosResponse<T, any>>;
  /** Controlador de la llamada */
  controller: AbortController;
}
