/**
 * Tipo de usuario
 */
export const UserType = {
  /** Usuario administrador */
  ADMINISTRADOR: "ADMINISTRADOR",
  /** Usuario de becario */
  BECARIO: "BECARIO",
  /** Usuario no autenticado */
  NO_AUTH: "NO_AUTH",
} as const;

/**
 * Tipo de usuario
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * Usuario
 */
export interface User {
  /** Id del usuario */
  id: number;
  /** Nombre de usuario */
  username: string;
  /** Email del usuario */
  email: string;
  /** Tipo de usuario */
  type: UserType;
}

/**
 * Inicial User
 */
export const inicialUser: User = {
  id: 0,
  username: "",
  email: "",
  type: UserType.NO_AUTH,
};

/**
 * Usuario de la API
 */
export interface UserEndpoint {
  id_usuario: number;
  nombre_usuario: string;
  email_usuario: string;
  tipo_usuario: UserType | string;
}
