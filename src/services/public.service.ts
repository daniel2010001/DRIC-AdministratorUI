import {
  EndpointApplicant,
  EndpointCareer,
  EndpointProblem,
  ProblemFormEndpointTemplate,
} from "@/models";
import axios, { AxiosResponse } from "axios";

const api = import.meta.env.VITE_BACKEND;

/**
 * Servicio para obtener los solicitantes
 * @returns Petición de axios para obtener los solicitantes
 */
export const loadApplicants = (): Promise<
  AxiosResponse<EndpointApplicant[]>
> => {
  return axios.get(api + "/solicitantes");
};

/**
 * Servicio para obtener las carreras
 * @returns Petición de axios para obtener las carreras
 */
export const loadCareers = (): Promise<AxiosResponse<EndpointCareer[]>> => {
  return axios.get(api + "/carreras");
};

/**
 * Servicio para obtener las problematicas
 * @returns Petición de axios para obtener las problemáticas
 */
export const loadProblems = (): Promise<AxiosResponse<EndpointProblem[]>> => {
  return axios.get(api + "/problematicas");
};

/**
 * Servicio para obtener las problematicas
 * @returns Petición de axios para obtener las problemáticas
 */
export const loadProblemsTable = (): Promise<
  AxiosResponse<EndpointProblem[]>
> => {
  return axios.get(api + "/problematicas/tabla");
};

/**
 * Servicio para obtener una problemática dado su id
 * @id Id de la problemática
 * @returns Petición de axios para obtener una problemática dado el id
 */
export const searchProblem = (
  id: number
): Promise<AxiosResponse<EndpointProblem>> => {
  return axios.get(api + "/problematicas/" + id);
};

/**
 * Servicio para la creación de una nueva problemática
 * @param formEndpointTemplate Plantilla del formulario para la creación de las problemáticas
 * @returns Petición de axios para la creación de una nueva problemática
 */
export const createProblem = (
  formEndpointTemplate: ProblemFormEndpointTemplate
): Promise<AxiosResponse<EndpointProblem>> => {
  return axios.post(api + "/problematicas", formEndpointTemplate);
};

/**
 * Servicio para la actualización de una problemática
 * @param formEndpointTemplate Plantilla del formulario para la actualización de las problemáticas
 * @returns Petición de axios para la actualización de una problemática
 */
export const updateProblem = (
  id: number,
  formEndpointTemplate: ProblemFormEndpointTemplate
): Promise<AxiosResponse<EndpointProblem>> => {
  return axios.put(api + "/problematicas/" + id, formEndpointTemplate);
};

/**
 * Servicio para la eliminación de una problemática
 * @param id Id de la problemática
 * @returns Petición de axios para la eliminación de una problemática
 */
export const deleteProblem = (
  id: number
): Promise<AxiosResponse<EndpointProblem>> => {
  return axios.delete(api + "/problematicas/" + id);
};
