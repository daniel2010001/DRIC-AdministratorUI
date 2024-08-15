import { Applicant, Career } from "@/models";

/**
 * Interfaz para el formulario de creación de las problemáticas
 */
export interface FormTemplate {
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
  phone: number;
  date: Date;
  zone: string;

  applicant: Applicant;
  careers: Career[];
}

/**
 * Interfaz para el formulario de crearción de problemáticas para la API
 */
export interface FormEndpointTemplate {
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
