import { Applicant, Career, inicialApplicant, inicialCareer } from "@/models";

/**
 * Interfaz para el formulario de edición de las problemáticas
 */
export interface EditProblemTemplate {
  title: string;
  careers: Career[];
  approach: string;
  causes: string;
  effects: string;

  what: string;
  who: string;
  why: string;
  when: string;

  applicant: Applicant | null;
  zone: string;
  contact: string;
  cellPhone: string;
  phone: string;
}

/**
 * Interfaz para el formulario de edición de problemáticas para la API
 */
export interface EditProblemEndpoint {
  titulo: string;
  id_carrera: number[];
  planteamiento: string;
  causas: string;
  efectos: string;

  que: string;
  como: string;
  para_que: string;
  cuando: string;

  id_solicitante: number;
  zona: string;
  contacto: string;
  telefono: string;
  telefono_institucional: string;
}

/**
 * Inicial EditProblem
 */
export const inicialEditProblem: EditProblemTemplate = {
  title: "",
  careers: [inicialCareer],
  approach: "",
  causes: "",
  effects: "",
  what: "",
  who: "",
  why: "",
  when: "",
  applicant: inicialApplicant,
  zone: "",
  contact: "",
  cellPhone: "",
  phone: "",
};
