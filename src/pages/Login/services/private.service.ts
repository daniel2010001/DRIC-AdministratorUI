import { AuthStore } from "@/models";
import axios, { AxiosResponse } from "axios";

const api = import.meta.env.VITE_BACKEND;

/**
 * Servicio para la autenticación
 * @param nombre_usuario Usuario a autenticar
 * @param contrasenia_usuario Contraseña del usuario a autenticar
 * @returns Petición de axios para la autenticación
 */
export const loginService = (
  nombre_usuario: string,
  contrasenia_usuario: string
): Promise<AxiosResponse<AuthStore>> => {
  return axios.post(api + "/usuarios/login", {
    nombre_usuario,
    contrasenia_usuario,
  });
};
