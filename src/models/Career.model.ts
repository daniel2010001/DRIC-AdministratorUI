import { ComboBoxOption } from ".";

/**
 * Interfaz de las Carrera adaptada para el front end.
 */
export interface Career extends ComboBoxOption {
  /** Identificador de la Carrera */
  id: number;
  /** Nombre de la Carrera */
  name: string;
  /** Nombre corto de la Carrera */
  shortName: string;
  /** Facultad de la Carrera */
  faculty: string;
  /** Fecha de creación */
  createdAt: Date;
  /** Fecha de actualización */
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
