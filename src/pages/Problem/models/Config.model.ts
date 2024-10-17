import { FieldConfig } from "@/models";
import { EditProblemTemplate, ProblemFormTemplate } from ".";

/**
 * Configuración de los campos de el formulario de edición de problemáticas
 */
export const editProblemConfig: {
  [K in keyof EditProblemTemplate]: FieldConfig;
} = {
  title: {
    label: "TÍTULO DE LA PROBLEMÁTICA",
    type: "text",
    maxLength: 80,
    required: true,
  },
  careers: {
    label: "CARRERA",
    type: "combobox",
    minLength: 1,
    maxLength: 3,
    multiple: true,
    required: true,
  },
  approach: {
    label: "PLANTEAMIENTO DEL PROBLEMA",
    type: "textarea",
    maxLength: 255,
    required: true,
  },
  causes: {
    label: "CAUSAS QUE PRODUCE EL PROBLEMA",
    type: "editor",
    required: true,
  },
  effects: {
    label: "EFECTOS QUE CAUSA EL PROBLEMA",
    type: "editor",
    required: true,
  },
  what: {
    label: "¿QUÉ?",
    description: "(Qué se requiere para resolver el problema)",
    type: "editor",
    required: true,
  },
  who: {
    label: "¿CÓMO?",
    description: "(Tesistas Pregrado o Tesistas Posgrado)",
    type: "editor",
    required: true,
  },
  why: {
    label: "¿PARA QUÉ?",
    description: "(Para que se desea realizar)",
    type: "editor",
    required: true,
  },
  when: {
    label: "¿CUÁNDO?",
    description: "(Para cuando se tiene previsto)",
    type: "editor",
    required: true,
  },
  applicant: {
    label: "NOMBRE DE LA INSTITUCIÓN O MUNICIPIO",
    type: "combobox",
    required: true,
  },
  zone: {
    label: "ZONA",
    type: "text",
    maxLength: 150,
    required: true,
  },
  contactPosition: {
    label: "CARGO DEL CONTACTO",
    type: "text",
    maxLength: 150,
    required: true,
  },
  contactName: {
    label: "NOMBRE DEL CONTACTO",
    type: "text",
    maxLength: 150,
    required: true,
  },
  phone: {
    label: "TELÉFONO INSTITUCIONAL",
    type: "tel",
    maxLength: 8,
    required: true,
  },
  cellPhone: {
    label: "TELÉFONO CELULAR DEL CONTACTO",
    type: "tel",
    maxLength: 8,
    required: false,
  },
};

/**
 * Configuración de los campos de un formulario de creación de problemáticas
 */
export const problemFormConfig: {
  [K in keyof ProblemFormTemplate]: FieldConfig;
} = {
  ...editProblemConfig,
  isPublic: {
    label: "PUBLICAR PROBLEMÁTICA EN LA PÁGINA DE PROBLEMÁTICAS",
    type: "checkbox",
  },
};
