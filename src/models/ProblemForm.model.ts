import {
  Applicant,
  Career,
  EndpointProblem,
  Problem,
  inicialApplicant,
  inicialCareer,
  inicialEndpointApplicant,
} from "@/models";

/**
 * Interfaz para el formulario de creación de las problemáticas
 */

export interface ProblemFormTemplate {
  title: string;
  approach: string;
  causes: string;
  effects: string;
  active: boolean;

  what: string;
  who: string;
  why: string;
  when: string;

  contact: string;
  phone: string;
  date: Date | "";
  zone: string;

  applicant: Applicant | null;
  careers: Career[];
}

/**
 * Interfaz para el formulario de creación de problemáticas para la API
 */
export interface ProblemFormEndpointTemplate {
  titulo: string;
  planteamiento: string;
  causas: string;
  efectos: string;
  activo: boolean;

  que: string;
  como: string;
  para_que: string;
  cuando: string;

  contacto: string;
  telefono: number;
  fecha: string;
  zona: string;

  id_solicitante: number;
  id_carrera: number[];
}

/**
 * Inicial ProblemFormTemplate
 */
export const inicialProblemFormTemplate: ProblemFormTemplate = {
  title: "",
  approach: "",
  causes: "",
  effects: "",
  active: false,

  what: "",
  who: "",
  why: "",
  when: "",

  contact: "",
  phone: "",
  date: new Date(),
  zone: "",

  applicant: inicialApplicant,
  careers: [inicialCareer],
};

/**
 * Inicial ProblemFormEndpointTemplate
 */
export const inicialProblemFormEndpointTemplate: ProblemFormEndpointTemplate = {
  titulo: "",
  planteamiento: "",
  causas: "",
  efectos: "",
  activo: false,

  que: "",
  como: "",
  para_que: "",
  cuando: "",

  contacto: "",
  telefono: 0,
  fecha: "",
  zona: "",

  id_solicitante: 0,
  id_carrera: [],
};

/**
 * Inicial Problem
 */
export const inicialProblem: Problem = {
  id: 0,
  publishedAt: new Date(),
  updatedAt: new Date(),
  createdAt: new Date(),
  ...inicialProblemFormTemplate,
};

/**
 * Inicial EndpointProblem
 */
export const inicialEndpointProblem: EndpointProblem = {
  id_problematica: 0,
  publicado: "",
  actualizado: "",
  creado: "",
  solicitante: inicialEndpointApplicant,
  carreras: [],
  ...inicialProblemFormEndpointTemplate,
};
