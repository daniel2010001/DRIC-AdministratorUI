import {
  Applicant,
  ApplicantEndpoint,
  Career,
  CareerEndpoint,
  inicialApplicant,
  User,
  UserEndpoint,
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
  contactPosition: string;
  contactName: string;
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
export interface ProblemRequest extends Problem {
  user: User;
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
  contacto_nombre: string;
  contacto_cargo: string;
  telefono: string;
  telefono_institucional: string;
  publicado: string;
  actualizado: string;
  creado: string;

  activo: boolean;
  validado: boolean;

  solicitante: ApplicantEndpoint;
  carreras: CareerEndpoint[];
}

export interface ProblemRequestEnpoint extends ProblemEndpoint {
  usuario: UserEndpoint;
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
  contactPosition: "",
  cellPhone: "",
  phone: "",
  publishedAt: new Date(),
  updatedAt: new Date(),
  createdAt: new Date(),
  active: false,
  validate: false,
  applicant: inicialApplicant,
  careers: [],
  contactName: "",
};
