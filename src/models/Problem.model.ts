import {
  EndpointApplicant,
  EndpointCareer,
  FormEndpointTemplate,
  FormTemplate,
} from "@/models";

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
