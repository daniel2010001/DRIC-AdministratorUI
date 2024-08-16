import { FieldConfig, FormSectionProps } from "@/models";
import { ProblemFormTemplate } from "../../../models/ProblemForm.model";

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
    type: "editor",
    maxLength: 500,
    required: true,
  },
  effects: {
    label: "EFECTOS QUE CAUSA EL PROBLEMA:",
    type: "editor",
    maxLength: 500,
    required: true,
  },
  active: {
    label: "PUBLICAR PROBLEMÁTICA EN LA PÁGINA DE PROBLEMÁTICAS:",
    type: "checkbox",
  },
  what: {
    label: "¿QUÉ?",
    description: "(Qué se requiere para resolver el problema)",
    type: "editor",
    maxLength: 100,
    required: true,
  },
  who: {
    label: "¿CÓMO?",
    description: "(Tesistas Pregrado o Tesistas Posgrado)",
    type: "editor",
    maxLength: 100,
    required: true,
  },
  why: {
    label: "¿PARA QUÉ?",
    description: "(Para que se desea realizar)",
    type: "editor",
    maxLength: 100,
    required: true,
  },
  when: {
    label: "¿CUÁNDO?",
    description: "(Para cuando se tiene previsto)",
    type: "editor",
    required: true,
  },
  contact: {
    label: "CONTACTO DE LA INSTITUCIÓN",
    type: "text",
    required: true,
  },
  phone: {
    label: "TELÉFONO",
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
    type: "combobox",
    required: true,
  },
  careers: {
    label: "CARRERA:",
    type: "combobox",
    required: true,
  },
};

/**
 * Configuración de las secciones de un formulario de creación de problemáticas
 */
export const formLayout: FormSectionProps<ProblemFormTemplate>[] = [
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
