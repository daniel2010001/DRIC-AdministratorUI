import { AuthEndpoint, UserEndpoint } from "@/models";
import axios, { AxiosResponse } from "axios";

const api = import.meta.env.VITE_BACKEND;

/**
 * Servicio para la autenticación
 * @param nombre_usuario Nombre de usuario a autenticar
 * @param contrasenia_usuario Contraseña del usuario a autenticar
 * @returns Petición de axios para la autenticación
 */
export const authService = (
  nombre_usuario: string,
  contrasenia_usuario: string
): Promise<AxiosResponse<AuthEndpoint>> => {
  return axios.post(api + "/usuarios/login", {
    nombre_usuario,
    contrasenia_usuario,
  });
};

/**
 * Servicio para obtener el perfil del usuario autenticado (requiere token)
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const getUserProfile = (): Promise<AxiosResponse<UserEndpoint>> => {
  return axios.get(api + "/usuarios/profile");
};
