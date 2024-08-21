import { ProblemEndpoint } from "@/models";
import { EditProblemEndpoint, ProblemFormEndpoint } from "../models";
import axios, { AxiosResponse } from "axios";

const api = import.meta.env.VITE_BACKEND;

/**
 * Servicio para la creación de una nueva problemática
 * @param problemFormEndpoint Plantilla del formulario para la creación de las problemáticas
 * @returns Petición de axios para la creación de una nueva problemática
 */
export const createProblem = (
  problemFormEndpoint: ProblemFormEndpoint
): Promise<AxiosResponse<any>> => {
  return axios.post(api + "/problematicas", problemFormEndpoint);
};

/**
 * Servicio para la actualización de una problemática
 * @param id Id de la problemática
 * @param editProblemEndpoint Plantilla del formulario para la actualización de las problemáticas
 * @returns Petición de axios para la actualización de una problemática
 */
export const updateProblem = (
  id: string | number,
  editProblemEndpoint: EditProblemEndpoint
): Promise<AxiosResponse<any>> => {
  return axios.put(api + "/problematicas/" + id, editProblemEndpoint);
};
