import axios from "axios";
import React, { useEffect, useState } from "react";
import FormWrapper, { FormInput, FormSection } from "@/components/Form";
import { ToggleWithText } from "@/components/Tailwind/Toggle";
import createFormSchema from "./FormSchema";
import * as yup from "yup";

const flattenInputs = (inputs: any) => {
  return inputs.flatMap((input: any) =>
    Array.isArray(input)
      ? input.map((obj) => ({ ...obj, col: input.length }))
      : [input]
  );
};

const countHtmlLines = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const blockTags = ["P", "H1", "H2", "LI"];

  let lineCount = 0;

  blockTags.forEach((tag) => {
    lineCount += doc.getElementsByTagName(tag).length;
  });

  return lineCount;
};

const getValidationSchema = (input: any) => {
  const requiredStringSchema = yup
    .string()
    .default(input.value ? input.value : "")
    .required("Este campo es requerido");

  switch (input.type) {
    case "quill":
      return requiredStringSchema.test(
        "maxLines",
        "El número máximo de líneas es de 5",
        function (value) {
          const lines = countHtmlLines(value || "");
          return lines <= 5;
        }
      );

    case "text":
      if (input.datalist) {
        return requiredStringSchema.test(
          "datalist",
          "El valor tiene que ser uno de los elementos de la lista",
          function (value) {
            return input.datalist.includes(value.toUpperCase());
          }
        );
      }
      return requiredStringSchema;

    case "tel":
      return requiredStringSchema.matches(
        /^[0-9]{7,8}$/,
        "Ingrese un número de teléfono válido"
      );

    case "combobox":
      if (!input.multiple) {
        return yup
          .object()
          .default(input.value ? input.value : null)
          .required("Este campo es requerido");
      }
      let array = yup
        .array()
        .default(input.value ? [input.value] : [])
        .min(1, `Seleccione al menos una opción`);
      if (input.max) {
        array = array.max(input.max, `Seleccione máximo ${input.max} opciones`);
      }
      return array;

    default:
      return requiredStringSchema;
  }
};

const generateSchema = (sections: any) => {
  return Object.fromEntries(
    sections
      .flatMap((section: any) => flattenInputs(section.inputs))
      .map((input: any) => [input.name, getValidationSchema(input)])
  );
};

export const AddProblematicaPage = () => {
  const [carreras, setCarreras] = useState([]);
  const [solicitantes, setSolicitantes] = useState([]);
  const [IsOn, setIsOn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carrerasResponse, municipiosResponse] = await Promise.all([
          axios.get("http://localhost:4000/api/carreras/"),
          axios.get("http://localhost:4000/api/solicitantes/"),
        ]);

        setCarreras(carrerasResponse.data);
        setSolicitantes(municipiosResponse.data);
      } catch (e) {
        console.error("Error al obtener los datos:", e);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // setear a '' intituto
  }, [IsOn]);

  const FormSchema = createFormSchema({
    carreras: [
      ...new Set(
        carreras.map((obj: any) => ({
          ...obj,
          id: obj.id_carrera,
          name: obj.nombre_carrera,
          nameRecorted: obj.nombre_corto,
        }))
      ),
    ],
    instituto: [
      ...new Set(
        solicitantes.map((obj: any) => ({
          ...obj,
          id: obj.id_solicitante,
          name: obj.nombre_solicitante,
          nameRecorted: obj.nombre_corto_sigla,
        }))
      ),
    ],
  });
  const schema = yup.object().shape(generateSchema(FormSchema));

  const handleSubmit = (data: any) => {
    axios
      .post("http://localhost:4000/api/problematicas/", {
        ...data,
        id_solicitante: data.instituto.id,
        id_carrera: data.carreras.map((carrera: any) => carrera.id),
      })
      .then(({ data }) => console.log(data))
      .catch((e) => console.error("Error al cargar el formulario:", e));
  };

  return (
    <div className="bg-neutral-50 mx-auto max-w-screen-lg">
      <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center">
        FORMULARIO DE PROBLEMATICAS PARA EL DESARROLLO DE UN PROYECTO DE TESIS O
        PROYECTO DE GRADO
      </h1>

      <FormWrapper onSubmit={handleSubmit} schema={schema}>
        {FormSchema.map((section) => (
          <FormSection
            key={section.title}
            title={section.title}
            description={section.description}
          >
            {flattenInputs(section.inputs).map((input: any) => {
              if (input.name === "instituto") {
                input.label = (
                  <>
                    {input.label}
                    <ToggleWithText
                      isOn={IsOn}
                      toggleSwitch={() => {
                        setIsOn(!IsOn);
                      }}
                      switchText={IsOn ? "INSTITUCIÓN" : "MUNICIPIO"}
                    />
                  </>
                );
              }
              return (
                <div
                  key={input.name}
                  // sm:col-span-1 sm:col-span-2 sm:col-span-3 sm:col-span-6
                  className={
                    input.col
                      ? `sm:col-span-${parseInt(
                          (6 / input.col) as any
                        )} relative`
                      : "col-span-full relative"
                  }
                >
                  <FormInput
                    {...input}
                    datalist={
                      input.name !== "instituto"
                        ? input.datalist
                        : input.datalist.filter((obj: any) => {
                            return obj.tipo_solicitante.includes(
                              IsOn ? "INSTITUCION" : "MUNICIPIO"
                            );
                          })
                    }
                  />
                </div>
              );
            })}
          </FormSection>
        ))}
      </FormWrapper>
    </div>
  );
};

export default AddProblematicaPage;
