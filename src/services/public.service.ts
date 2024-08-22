import {
  ApplicantEndpoint,
  CareerEndpoint,
  ProblemEndpoint,
  UserEndpoint,
} from "@/models";
import axios, { AxiosResponse } from "axios";

const api = import.meta.env.VITE_BACKEND;

/**
 * Servicio para obtener los solicitantes
 * @returns Petición de axios para obtener los solicitantes
 */
export const loadApplicants = (): (() => Promise<
  AxiosResponse<ApplicantEndpoint[]>
>) => {
  return () => axios.get(api + "/solicitantes");
};

/**
 * Servicio para obtener las carreras
 * @returns Petición de axios para obtener las carreras
 */
export const loadCareers = (): (() => Promise<
  AxiosResponse<CareerEndpoint[]>
>) => {
  return () => axios.get(api + "/carreras");
};

/**
 * Servicio para obtener las problematicas
 * @returns Petición de axios para obtener las problemáticas
 */
export const loadProblems = (): (() => Promise<
  AxiosResponse<ProblemEndpoint[]>
>) => {
  return () => axios.get(api + "/problematicas");
};

/**
 * Servicio para obtener las problematicas
 * @returns Petición de axios para obtener las problemáticas
 */
export const loadProblemsTable = (): (() => Promise<
  AxiosResponse<ProblemEndpoint[]>
>) => {
  return () => axios.get(api + "/problematicas/tabla");
};

/**
 * Servicio para obtener una problemática dado su id
 * @id Id de la problemática
 * @returns Petición de axios para obtener una problemática dado el id
 */
export const searchProblem = (
  id: number | string
): (() => Promise<AxiosResponse<ProblemEndpoint>>) => {
  return () => axios.get(api + "/problematicas/" + id);
};

/**
 * Servicio para la eliminación de una problemática
 * @param id Id de la problemática
 * @returns Petición de axios para la eliminación de una problemática
 */
export const deleteProblem = (
  id: number | string
): (() => Promise<AxiosResponse<ProblemEndpoint>>) => {
  return () => axios.delete(api + "/problematicas/" + id);
};

/**
 * Servicio para obtener el perfil del usuario autenticado
 * @param token Token de autenticación
 * @returns Petición de axios para obtener el perfil del usuario
 */
export const getUserProfile = (
  token: string
): Promise<AxiosResponse<UserEndpoint>> => {
  return axios.get(api + "/usuarios/profile", {
    headers: { "x-access-token": token },
  });
};
