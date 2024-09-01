import { ComboBoxOption } from ".";

/**
 * Interfaz de las Carrera adaptada para el front end.
 */
export interface Career extends ComboBoxOption {
  id: number;
  name: string;
  shortName: string;
  faculty: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interfaz para las Carrera recividos desde la API
 */
export interface CareerEndpoint {
  id_carrera: number;
  nombre_carrera: string;
  nombre_corto: string;
  facultad: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Inicial Career
 */
export const inicialCareer: Career = {
  id: 0,
  name: "",
  shortName: "",
  faculty: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

/**
 * Inicial EndpointCareer
 */
export const inicialEndpointCareer: CareerEndpoint = {
  id_carrera: 0,
  nombre_carrera: "",
  nombre_corto: "",
  facultad: "",
  createdAt: "",
  updatedAt: "",
};
