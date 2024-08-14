import { FormInputProps } from "@/components/Form/FormInput";

interface FormSchemaProps {
  title: string;
  description: string;
  inputs: (FormInputProps | FormInputProps[])[];
}

const defaultFormSchema: FormSchemaProps[] = [
  {
    title: "DATOS GENERALES",
    description:
      "Por favor, ingrese los datos verídicos en los siguientes campos:",
    inputs: [
      { name: "titulo", type: "text", label: "TÍTULO DE LA PROBLEMÁTICA:" },
      {
        name: "instituto",
        type: "combobox",
        label: "NOMBRE DE LA INSTITUCIÓN O MUNICIPIO:",
      },
      {
        name: "carreras",
        type: "combobox",
        label: "CARRERA:",
        multiple: true,
        max: 3,
      },
      {
        name: "planteamiento",
        type: "textarea",
        label: "PLANTEAMIENTO DEL PROBLEMA:",
        maxLength: 255,
      },
      {
        name: "causas",
        type: "quill",
        label: "CAUSAS QUE PRODUCE EL PROBLEMA:",
      },
      {
        name: "efectos",
        type: "quill",
        label: "EFECTOS QUE CAUSA EL PROBLEMA:",
      },
      {
        name: "activo",
        type: "checkbox",
        label: "PUBLICAR PROBLEMÁTICA EN LA PÁGINA DE PROBLEMÁTICAS:",
      },
    ],
  },
  {
    title: "NECESIDADES PRIORITARIAS PARA RESOLVER EL PROBLEMA",
    description:
      "Identificación y solución inmediata de los factores más críticos que contribuyen al problema.",
    inputs: [
      [
        {
          name: "que",
          type: "quill",
          label: "¿QUÉ?",
          description: "(Que se requiere para resolver el problema)",
        },
        {
          name: "como",
          type: "quill",
          label: "¿CÓMO?",
          description: "(Tesistas Pregrado o Tesistas Posgrado)",
        },
      ],
      [
        {
          name: "para_que",
          type: "quill",
          label: "¿PARA QUÉ?",
          description: "(Para que se desea realizar)",
        },
        {
          name: "cuando",
          type: "quill",
          label: "¿CUÁNDO?",
          description: "(Para cuando se tiene previsto)",
        },
      ],
    ],
  },
  {
    title: "DATOS DE LA INSTITUCIÓN SOLICITANTE",
    description: "Ingrese los datos de la institución solicitante.",
    inputs: [
      { name: "contacto", type: "text", label: "CONTACTO DE LA INSTITUCIÓN" },
      [
        { name: "telefono", type: "tel", label: "TELÉFONO" },
        {
          name: "fecha",
          type: "date",
          label: "FECHA",
          readOnly: true,
          value: new Date().toLocaleDateString("en-CA"),
        },
      ],
      { name: "zona", type: "text", label: "ZONA" },
      { name: "jusridiccion", type: "text", label: "JURISDICCIÓN" },
    ],
  },
];

const createFormSchema = ({ ...props }): FormSchemaProps[] => {
  return defaultFormSchema.map((section) => ({
    ...section,
    inputs: section.inputs.map((input) =>
      Array.isArray(input)
        ? input.map((subInput) => ({
            ...subInput,
            datalist: props[subInput.name],
          }))
        : {
            ...input,
            datalist: props[input.name],
          }
    ),
  }));
};

export default createFormSchema;
