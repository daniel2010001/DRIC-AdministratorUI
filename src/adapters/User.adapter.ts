import { User, UserEndpoint } from "@/models";

export const createCustomUser = (userEnpoint: UserEndpoint): User => {
  return {
    id: userEnpoint.id_usuario,
    username: userEnpoint.nombre_usuario,
    email: userEnpoint.email_usuario,
    type: userEnpoint.tipo_usuario,
  };
};
