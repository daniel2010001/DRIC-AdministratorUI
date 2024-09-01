import {
  Applicant,
  ApplicantEndpoint,
  Career,
  CareerEndpoint,
  inicialApplicant,
} from "@/models";

/**
 * Interfaz de las Problemáticas adaptada para el front end.
 */
export interface Problem {
  id: number;

  title: string;
  approach: string;
  causes: string;
  effects: string;

  what: string;
  who: string;
  why: string;
  when: string;

  zone: string;
  contact: string;
  cellPhone: string;
  phone: string;

  publishedAt: Date;
  updatedAt: Date;
  createdAt: Date;

  active: boolean;
  validate: boolean;

  applicant: Applicant;
  careers: Career[];
}

/**
 * Interfaz para las Problemáticas recividos desde la API
 */
export interface ProblemEndpoint {
  id_problematica: number;

  titulo: string;
  planteamiento: string;
  causas: string;
  efectos: string;

  que: string;
  como: string;
  para_que: string;
  cuando: string;

  zona: string;
  contacto: string;
  telefono: number;
  telefono_institucional: number;
  publicado: string;
  actualizado: string;
  creado: string;

  activo: boolean;
  validado: boolean;

  solicitante: ApplicantEndpoint;
  carreras: CareerEndpoint[];
}

export const inicialProblem: Problem = {
  id: 0,
  title: "",
  approach: "",
  causes: "",
  effects: "",
  what: "",
  who: "",
  why: "",
  when: "",
  zone: "",
  contact: "",
  cellPhone: "",
  phone: "",
  publishedAt: new Date(),
  updatedAt: new Date(),
  createdAt: new Date(),
  applicant: inicialApplicant,
  careers: [],
};
