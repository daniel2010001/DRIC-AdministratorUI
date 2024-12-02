import { ComboBoxOption } from ".";

export const ApplicantType = {
  INSTITUCION: "INSTITUCION",
  MUNICIPIO: "MUNICIPIO",
  UNKNOWN: "UNKNOWN",
} as const;

export type ApplicantType = (typeof ApplicantType)[keyof typeof ApplicantType];

/**
 * Interfaz de los Solicitantes adaptada para el front end.
 */
export interface Applicant extends ComboBoxOption {
  /** Identificador del Solicitante */
  id: number;
  /** Nombre del Solicitante */
  name: string;
  /** Nombre corto del Solicitante */
  shortName: string;
  /** Jurisdicción del Solicitante */
  jurisdiction: string;
  /** Tipo del Solicitante */
  type: ApplicantType;
  /** Fecha de creación */
  createdAt: Date;
  /** Fecha de actualización */
  updatedAt: Date;
}

/**
 * Interfaz para los Solicitantes recividos desde la API
 */
export interface ApplicantEndpoint {
  id_solicitante: number;
  nombre_solicitante: string;
  nombre_corto_sigla: string;
  jurisdiccion: string;
  tipo_solicitante: ApplicantType | string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Inicial Applicant
 */
export const inicialApplicant: Applicant = {
  id: 0,
  name: "",
  shortName: "",
  jurisdiction: "",
  type: ApplicantType.INSTITUCION,
  createdAt: new Date(),
  updatedAt: new Date(),
};
