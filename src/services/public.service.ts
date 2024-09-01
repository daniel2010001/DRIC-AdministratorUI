import {
  ApplicantEndpoint,
  CareerEndpoint,
  ProblemEndpoint,
  UserEndpoint,
  DashboardEndpoint,
} from "@/models";
import { loadAbort } from "@/utilities";
import axios, { AxiosResponse } from "axios";
import { AxiosCall } from "../models/AxiosCall.model";

const api = import.meta.env.VITE_BACKEND;

/**
 * Función para obtener los solicitantes
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const getApplicants = (): AxiosCall<ApplicantEndpoint[]> => {
  const controller = loadAbort();
  return {
    call: axios.get(api + "/solicitantes", {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Función para obtener las carreras
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const getCareers = (): AxiosCall<CareerEndpoint[]> => {
  const controller = loadAbort();
  return {
    call: axios.get(api + "/carreras", {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Función para obtener las problematicas
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const getProblems = (): AxiosCall<ProblemEndpoint[]> => {
  const controller = loadAbort();
  return {
    call: axios.get(api + "/problematicas", {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Función para obtener las problematicas
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const getProblemsTable = (): AxiosCall<ProblemEndpoint[]> => {
  const controller = loadAbort();
  return {
    call: axios.get(api + "/problematicas/tabla", {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Función para obtener una problemática dado su id
 * @param id Id de la problemática
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const searchProblem = (
  id: string | number
): AxiosCall<ProblemEndpoint> => {
  const controller = loadAbort();
  return {
    call: axios.get(api + "/problematicas/" + id, {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Función para la eliminación de una problemática
 * @param id Id de la problemática
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const deleteProblem = (id: string | number): AxiosCall<any> => {
  const controller = loadAbort();
  return {
    call: axios.delete(api + "/problematicas/" + id, {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Función para obtener el perfil del usuario autenticado (sin token)
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const getUserProfile = (): Promise<AxiosResponse<UserEndpoint>> => {
  return axios.get(api + "/usuarios/profile");
};

/**
 * Servicio para obtener los datos del dashboard
 * @returns Petición de axios para obtener los datos del dashboard
 */
export const getDashboard = async (): Promise<DashboardEndpoint > => {
    const response = await axios.get(api + "/contador");
    return response.data as DashboardEndpoint;
};