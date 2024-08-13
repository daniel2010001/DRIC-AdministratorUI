import { Applicant, Career, EndpointApplicant, EndpointCareer } from "@/models";

/**
 * Interfaz para el formulario de creación de las problemáticas
 */
export interface FormTemplate {
  title: string;
  approach: string;
  causes: string;
  effects: string;

  what: string;
  who: string;
  why: string;
  when: string;

  contact: string;
  phone: number;
  date: Date;
  zone: string;

  applicant: Applicant;
  careers: Career[];
}

/**
 * Interfaz de las Problemáticas adaptada para el front end.
 */
export interface Problem extends FormTemplate {
  id: number;

  publishedAt: Date;
  updatedAt: Date;
  createdAt: Date;
}

/**
 * Interfaz para el formulario de crearción de problemáticas para la API
 */
export interface FormEndpointTemplate {
  titulo: string;
  planteamiento: string;
  causas: string;
  efectos: string;

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
 * Interfaz para las Problemáticas recividos desde la API
 */
export interface EndpointProblem extends FormEndpointTemplate {
  id_problematica: number;

  publicado: string;
  actualizado: string;
  creado: string;

  solicitante: EndpointApplicant;
  carreras: EndpointCareer[];
}
export interface EndpointProblemTable extends EndpointProblem {
  activo: boolean;
}
