import { Applicant, Career, inicialApplicant, inicialCareer } from "@/models";

/** Interfaz para el formulario de edición de las problemáticas */
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
  phone: string;
  contactPosition: string;
  contactName: string;
  cellPhone: string;
  validate: boolean;
}

/** Interfaz para el formulario de edición de problemáticas para la API */
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
  telefono_institucional: string;
  contacto_cargo: string;
  contacto_nombre: string;
  telefono: string;
  validado: boolean;
}

/** Inicial EditProblem */
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
  contactPosition: "",
  cellPhone: "",
  phone: "",
  contactName: "",
  validate: false,
};
