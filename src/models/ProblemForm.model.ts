import {
  Applicant,
  Career,
  EndpointProblem,
  FieldConfig,
  FormSectionProps,
  Problem,
  defaultApplicant,
  defaultCareer,
  defaultEndpointApplicant,
} from "@/models";

/**
 * Interfaz para el formulario de creación de las problemáticas
 */

export interface ProblemFormTemplate {
  title: string;
  approach: string;
  causes: string;
  effects: string;
  active: boolean;

  what: string;
  who: string;
  why: string;
  when: string;

  contact: string;
  phone: string;
  date: Date;
  zone: string;

  applicant: Applicant;
  careers: Career[];
}
/**
 * Interfaz para el formulario de creación de problemáticas para la API
 */

export interface ProblemFormEndpointTemplate {
  titulo: string;
  planteamiento: string;
  causas: string;
  efectos: string;
  activo: boolean;

  que: string;
  como: string;
  para_que: string;
  cuando: string;

  contacto: string;
  telefono: number;
  fecha: string;
  zona: string;

  id_solicitante: number;
  id_carrera: number[];
}

/**
 * Configuración de los campos de un formulario de creación de problemáticas
 */
export const problemFormConfig: {
  [K in keyof ProblemFormTemplate]: FieldConfig;
} = {
  title: {
    label: "TÍTULO DE LA PROBLEMÁTICA:",
    type: "text",
    maxLength: 60,
    required: true,
  },
  approach: {
    label: "PLANTEAMIENTO DEL PROBLEMA:",
    type: "textarea",
    maxLength: 255,
    required: true,
  },
  causes: {
    label: "CAUSAS QUE PRODUCE EL PROBLEMA:",
    type: "textarea",
    maxLength: 500,
    required: true,
  },
  effects: {
    label: "EFECTOS QUE CAUSA EL PROBLEMA:",
    type: "textarea",
    maxLength: 500,
    required: true,
  },
  active: {
    label: "PUBLICAR PROBLEMÁTICA EN LA PÁGINA DE PROBLEMÁTICAS:",
    type: "checkbox",
  },
  what: {
    label: "¿QUÉ?",
    type: "text",
    maxLength: 100,
    required: true,
  },
  who: {
    label: "¿CÓMO?",
    type: "text",
    maxLength: 100,
    required: true,
  },
  why: {
    label: "¿PARA QUÉ?",
    description: "(Que se requiere para resolver el problema)",
    type: "text",
    maxLength: 100,
    required: true,
  },
  when: {
    label: "¿CUÁNDO?",
    description: "(Tesistas Pregrado o Tesistas Posgrado)",
    type: "date",
    required: true,
  },
  contact: {
    label: "CONTACTO DE LA INSTITUCIÓN",
    description: "(Para que se desea realizar)",
    type: "email",
    required: true,
  },
  phone: {
    label: "TELÉFONO",
    description: "(Para cuando se tiene previsto)",
    type: "tel",
    maxLength: 10,
    required: true,
  },
  date: {
    label: "FECHA",
    type: "date",
    required: true,
  },
  zone: {
    label: "ZONA",
    type: "text",
    maxLength: 100,
    required: true,
  },
  applicant: {
    label: "NOMBRE DE LA INSTITUCIÓN O MUNICIPIO:",
    type: "text",
    required: true,
  },
  careers: {
    label: "CARRERA:",
    type: "select",
    options: ["Engineering", "Business", "Arts"],
    required: true,
  },
};

/**
 * Configuración de las secciones de un formulario de creación de problemáticas
 */
export const formLayout: FormSectionProps[] = [
  {
    title: "DATOS GENERALES",
    description:
      "Por favor, ingrese los datos verídicos en los siguientes campos:",
    inputs: [
      { key: "title", colSpan: 2 },
      { key: "careers", colSpan: 2 },
      { key: "approach", colSpan: 2 },
      { key: "causes", colSpan: 2 },
      { key: "effects", colSpan: 2 },
      { key: "active", colSpan: 2 },
    ],
  },
  {
    title: "NECESIDADES PRIORITARIAS PARA RESOLVER EL PROBLEMA",
    description:
      "Identificación y solución inmediata de los factores más críticos que contribuyen al problema.",
    inputs: [
      { key: "what", colSpan: 1 },
      { key: "who", colSpan: 1 },
      { key: "why", colSpan: 1 },
      { key: "when", colSpan: 1 },
    ],
  },
  {
    title: "DATOS DE LA INSTITUCIÓN SOLICITANTE",
    description: "Ingrese los datos de la institución solicitante.",
    inputs: [
      { key: "applicant", colSpan: 2 },
      { key: "contact", colSpan: 1 },
      { key: "phone", colSpan: 1 },
      { key: "date", colSpan: 1 },
      { key: "zone", colSpan: 1 },
    ],
  },
];

/**
 * Default ProblemFormTemplate
 */
export const defaultProblemFormTemplate: ProblemFormTemplate = {
  title: "",
  approach: "",
  causes: "",
  effects: "",
  active: false,

  what: "",
  who: "",
  why: "",
  when: "",

  contact: "",
  phone: "",
  date: new Date(),
  zone: "",

  applicant: defaultApplicant,
  careers: [defaultCareer],
};

/**
 * Default ProblemFormEndpointTemplate
 */
export const defaultProblemFormEndpointTemplate: ProblemFormEndpointTemplate = {
  titulo: "",
  planteamiento: "",
  causas: "",
  efectos: "",
  activo: false,

  que: "",
  como: "",
  para_que: "",
  cuando: "",

  contacto: "",
  telefono: 0,
  fecha: "",
  zona: "",

  id_solicitante: 0,
  id_carrera: [],
};

/**
 * Default Problem
 */
export const defaultProblem: Problem = {
  id: 0,
  publishedAt: new Date(),
  updatedAt: new Date(),
  createdAt: new Date(),
  ...defaultProblemFormTemplate,
};

/**
 * Default EndpointProblem
 */
export const defaultEndpointProblem: EndpointProblem = {
  id_problematica: 0,
  publicado: "",
  actualizado: "",
  creado: "",
  solicitante: defaultEndpointApplicant,
  carreras: [],
  ...defaultProblemFormEndpointTemplate,
};
