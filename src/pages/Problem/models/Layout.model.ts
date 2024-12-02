import { FormSectionProps } from "@/models";
import { EditProblemTemplate, ProblemFormTemplate } from ".";

/** Configuración de las secciones del formulario de edición de problemáticas */
export const formLayout: FormSectionProps<ProblemFormTemplate>[] = [
  {
    title: "DATOS GENERALES",
    description: "Por favor, ingrese los datos verídicos en los siguientes campos.",
    inputs: [
      { key: "title", colSpan: 2 },
      { key: "careers", colSpan: 2 },
      { key: "approach", colSpan: 2 },
      { key: "causes", colSpan: 2 },
      { key: "effects", colSpan: 2 },
    ],
  },
  {
    title: "NECESIDADES PRIORITARIAS PARA RESOLVER EL PROBLEMA",
    description:
      "Identificación y solución inmediata de los factores más críticos que contribuyen al problema.",
    inputs: [
      { key: "what", colSpan: 2 },
      { key: "who", colSpan: 2 },
      { key: "why", colSpan: 2 },
      { key: "when", colSpan: 2 },
    ],
  },
  {
    title: "DATOS DE LA INSTITUCIÓN SOLICITANTE",
    description: "Ingrese los datos de la institución solicitante.",
    inputs: [
      { key: "applicant", colSpan: 2 },
      { key: "contactName", colSpan: 1 },
      { key: "contactPosition", colSpan: 1 },
      { key: "cellPhone", colSpan: 1 },
      { key: "phone", colSpan: 1 },
      { key: "zone", colSpan: 2 },
      { key: "isPublic", colSpan: 2 },
    ],
  },
];

/** Configuración de las secciones de el formulario de edición de problemáticas */
export const editLayout: FormSectionProps<EditProblemTemplate>[] = formLayout.map((section) => ({
  ...section,
  inputs: section.inputs.filter((input) => input.key !== "isPublic"),
})) as FormSectionProps<EditProblemTemplate>[];
