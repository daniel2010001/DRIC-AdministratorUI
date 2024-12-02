import {
  ApplicantEndpoint,
  CareerEndpoint,
  DashboardEndpoint,
  ProblemEndpoint,
  ProblemRequestEnpoint,
} from "@/models";
import { loadAbort } from "@/utilities";
import axios, { AxiosResponse } from "axios";
import { AxiosCall } from "../models/AxiosCall.model";

const api = import.meta.env.VITE_BACKEND;

/**
 * Función para obtener los solicitantes con su control de aborto
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
 * Función para obtener las carreras con su control de aborto
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
 * Función para obtener las problematicas con su control de aborto
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
 * Función para obtener las problematicas con su control de aborto
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
 * Función para obtener las problematicas con su control de aborto
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const getProblemsRequestsTable = (): AxiosCall<
  ProblemRequestEnpoint[]
> => {
  const controller = loadAbort();
  return {
    call: axios.get(api + "/problematicas/solicitudes", {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * Función para obtener una problemática dado su id con su control de aborto
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
 * Función para la eliminación de una problemática con su control de aborto
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
 * Función para actualizar la publicación de una problemática
 * @param id Id de la problemática
 * @param published Indica si la problemática está publicada
 * @returns Objeto con la petición de axios y el controller de aborto
 */
export const updateProblemPublished = (
  id: string | number,
  published: boolean
): Promise<AxiosResponse<any>> => {
  return axios.put(api + "/problematicas/publicacion/" + id, {
    publicado: published,
  });
};

/**
 * Servicio para obtener los datos del dashboard
 * @returns Petición de axios para obtener los datos del dashboard
 */
export const getDashboard = async (): Promise<DashboardEndpoint> => {
  const response = await axios.get(api + "/contador");
  return response.data as DashboardEndpoint;
};
