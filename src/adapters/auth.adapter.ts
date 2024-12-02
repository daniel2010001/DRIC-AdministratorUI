import { AuthEndpoint, Auth } from "@/models";

/**
 * Adaptador para crear un Auth desde un AuthEndpoint
 * @param auth AuthEndpoint
 * @returns Auth
 */
export const createCustomAuth = (auth: AuthEndpoint): Auth => {
  return {
    isAuthed: auth.auth,
    token: auth.token,
  };
};
