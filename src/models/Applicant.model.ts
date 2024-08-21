import { ComboBoxOption } from ".";

/**
 * Interfaz de los Solicitantes adaptada para el front end.
 */
export interface Applicant extends ComboBoxOption {
  id: number;
  name: string;
  shortName: string;
  jurisdiction: string;
  type: "INSTITUCION" | "MUNICIPIO";
  createdAt: Date;
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
  tipo_solicitante: "INSTITUCION" | "MUNICIPIO";
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
  type: "INSTITUCION",
  createdAt: new Date(),
  updatedAt: new Date(),
};

/**
 * Default EndpointApplicant
 */
export const inicialEndpointApplicant: ApplicantEndpoint = {
  id_solicitante: 0,
  nombre_solicitante: "",
  nombre_corto_sigla: "",
  jurisdiccion: "",
  tipo_solicitante: "INSTITUCION",
  createdAt: "",
  updatedAt: "",
};
