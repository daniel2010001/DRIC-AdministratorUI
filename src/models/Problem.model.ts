import {
  EndpointApplicant,
  EndpointCareer,
  ProblemFormEndpointTemplate,
  ProblemFormTemplate,
  defaultEndpointApplicant,
  defaultProblemFormEndpointTemplate,
  defaultProblemFormTemplate,
} from "@/models";

/**
 * Interfaz de las Problemáticas adaptada para el front end.
 */
export interface Problem extends ProblemFormTemplate {
  id: number;
  publishedAt: Date;
  updatedAt: Date;
  createdAt: Date;
}

/**
 * Interfaz para las Problemáticas recividos desde la API
 */
export interface EndpointProblem extends ProblemFormEndpointTemplate {
  id_problematica: number;
  publicado: string;
  actualizado: string;
  creado: string;
  solicitante: EndpointApplicant;
  carreras: EndpointCareer[];
}
