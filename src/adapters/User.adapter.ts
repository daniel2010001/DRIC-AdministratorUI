import { User, UserEndpoint, UserType } from "@/models";

/**
 * Función para adaptar un usuario recibido desde la API
 * @param userEndpoint Usuario recibido desde la API
 * @returns Usuario formateado
 */
export const createCustomUser = (userEndpoint: UserEndpoint): User => {
  console.log(userEndpoint);
  const userType = Object.keys(UserType).find(
    (key) => UserType[key as keyof typeof UserType] === userEndpoint.tipo_usuario
  );
  return {
    id: userEndpoint.id_usuario,
    username: userEndpoint.nombre_usuario,
    email: userEndpoint.email_usuario,
    type: userType ? UserType[userType as keyof typeof UserType] : UserType.NO_AUTH,
  };
};
