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
export interface EndpointApplicant {
  id_solicitante: number;
  nombre_solicitante: string;
  nombre_corto_sigla: string;
  juridiccion: string;
  tipo_solicitante: "INSTITUCION" | "MUNICIPIO";
  createdAt: string;
  updatedAt: string;
}

/**
 * Default Applicant
 */
export const defaultApplicant: Applicant = {
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
export const defaultEndpointApplicant: EndpointApplicant = {
  id_solicitante: 0,
  nombre_solicitante: "",
  nombre_corto_sigla: "",
  juridiccion: "",
  tipo_solicitante: "INSTITUCION",
  createdAt: "",
  updatedAt: "",
};
