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
  /** Identificador de la Problemática */
  id: number;
  /** Título de la Problemática */

  title: string;
  /** Planteamiento de la Problemática */
  approach: string;
  /** Causas de la Problemática */
  causes: string;
  /** Efectos de la Problemática */
  effects: string;
  /** ¿Qué es lo que se trata de? */

  what: string;
  /** ¿Quién lo está tratando de solucionar? */
  who: string;
  /** ¿Por qué lo está tratando de solucionar? */
  why: string;
  /** ¿Cuándo lo está tratando de solucionar? */
  when: string;
  /** Zona de la Problemática */

  zone: string;
  /** Contacto de la Problemática */
  contact: string;
  /** Teléfono de la Problemática */
  cellPhone: string;
  /** Teléfono de la Problemática */
  phone: string;
  /** Fecha de publicación */

  publishedAt: Date;
  /** Fecha de actualización */
  updatedAt: Date;
  /** Fecha de creación */
  createdAt: Date;
  /** Indica si la Problemática está activo */

  active: boolean;
  /** Indica si la Problemática está valida */
  validate: boolean;
  /** Solicitante de la Problemática */

  applicant: Applicant;
  /** Carreras de la Problemática */
  careers: Career[];
}

/**
 * Interfaz para las Problemáticas recividos desde la API
 */
export interface ProblemRequest extends Problem {
  /** Usuario que creó la Problemática */
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
  contacto: string;
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
  contact: "",
  cellPhone: "",
  phone: "",
  publishedAt: new Date(),
  updatedAt: new Date(),
  createdAt: new Date(),
  active: false,
  validate: false,
  applicant: inicialApplicant,
  careers: [],
};
