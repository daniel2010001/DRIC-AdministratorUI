import { EndpointApplicant, EndpointCareer } from "@/models";
import axios, { AxiosResponse } from "axios";

const api = import.meta.env.VITE_BACKEND;

/**
 * Servicio para obtener las carreras
 * @returns Petición de axios para obtener las carreras
 */
export const loadCareers = (): Promise<AxiosResponse<EndpointCareer[]>> => {
    return axios.get(api + "/carreras");
};

/**
 * Servicio para obtener los solicitantes
 * @returns Petición de axios para obtener los solicitantes
 */
export const loadApplicants = (): Promise<AxiosResponse<EndpointApplicant[]>> => {
    return axios.get(api + "/solicitantes");
};