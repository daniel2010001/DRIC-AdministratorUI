/**
 * Tipo de usuario
 */
export const UserType = {
  /** Usuario administrador */
  ADMINISTRADOR: "ADMINISTRADOR",
  /** Usuario de becario */
  BECARIO: "BECARIO",
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
  type: "BECARIO",
};

/**
 * Usuario de la API
 */
export interface UserEndpoint {
  id_usuario: number;
  nombre_usuario: string;
  email_usuario: string;
  tipo_usuario: UserType;
}

/**
 * Inicial UserEndpoint
 */
export const inicialEndpointUser: UserEndpoint = {
  id_usuario: 0,
  nombre_usuario: "",
  email_usuario: "",
  tipo_usuario: "BECARIO",
};
