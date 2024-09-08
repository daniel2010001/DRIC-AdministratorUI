import { User, UserEndpoint, UserType } from "@/models";

/**
 * Función para adaptar un usuario recibido desde la API
 * @param userEndpoint Usuario recibido desde la API
 * @returns Usuario formateado
 */
export const createCustomUser = (userEndpoint: UserEndpoint): User => {
  const userType = UserType[userEndpoint.tipo_usuario as keyof typeof UserType];
  return {
    id: userEndpoint.id_usuario,
    username: userEndpoint.nombre_usuario,
    email: userEndpoint.email_usuario,
    type: userType ? userType : UserType.NO_AUTH,
  };
};
