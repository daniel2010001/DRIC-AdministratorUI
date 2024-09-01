import { createCustomApplicant, createCustomCareer } from "@/adapters";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { Applicant } from "@/models";
import { getApplicants, getCareers, searchProblem } from "@/services";
import { SnackbarUtilities } from "@/utilities";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { crearteEditTemplate, createEditEndpoint } from "./adapters";
import {
  FormField,
  FormSection,
  FormWrapper,
  ToggleWithText,
} from "./components";
import {
  EditProblemTemplate,
  editLayout,
  editProblemConfig,
  inicialEditProblem,
} from "./models";
import { updateProblem } from "./services";

export function EditProblem() {
  const { loading, callEndpoint: callProblem } = useFetchAndLoader();
  const { callEndpoint: callApplicant } = useFetchAndLoader();
  const { callEndpoint: callCareers } = useFetchAndLoader();
  const idProblem = useParams().id || 0;
  const [isInstitute, setIsInstitute] = useState(false);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [formConfig, setFormConfig] = useState(editProblemConfig);
  const [defaultValues, setDefaultValues] = useState(inicialEditProblem);

  useAsync(
    async () => callProblem(searchProblem(idProblem)),
    (data) => {
      setDefaultValues(crearteEditTemplate(data));
      setIsInstitute(data.solicitante.tipo_solicitante === "INSTITUCION");
    }
  );
  useAsync(
    async () => callApplicant(getApplicants()),
    (data) => {
      setApplicants(data.map(createCustomApplicant));
      handleChangeApplicant();
    }
  );
  useAsync(
    async () => callCareers(getCareers()),
    (data) => {
      setFormConfig((prev) => ({
        ...prev,
        careers: { ...prev.careers, options: data.map(createCustomCareer) },
      }));
    }
  );
  useEffect(() => {
    handleChangeApplicant();
  }, [isInstitute, applicants]);

  const handleChangeApplicant = () => {
    setFormConfig((prev) => ({
      ...prev,
      applicant: {
        ...prev.applicant,
        options: applicants.filter(
          (applicant) =>
            applicant.type === (isInstitute ? "INSTITUCION" : "MUNICIPIO")
        ),
      },
    }));
  };

  const handleSubmit = (data: EditProblemTemplate) => {
    updateProblem(idProblem, createEditEndpoint(data)).then((data) => {
      SnackbarUtilities.success(
        "La problemática ha sido actualizada correctamente"
      );
    });
  };

  if (!loading && !defaultValues.title) return <Navigate to=".." />;

  return (
    <div className="mx-auto max-w-screen-lg border-2 border-light-primary dark:border-dark-primary rounded-lg bg-light-secondary dark:bg-dark-secondary">
      <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center text-light-primary dark:text-dark-primary">
        FORMULARIO DE PROBLEMATICAS PARA EL DESARROLLO DE UN PROYECTO DE TESIS O
        PROYECTO DE GRADO
      </h1>

      <FormWrapper<EditProblemTemplate>
        onSubmit={handleSubmit}
        formConfig={editProblemConfig}
        defaultValues={defaultValues}
      >
        {editLayout.map((section) => (
          <FormSection
            key={section.title}
            title={section.title}
            description={section.description}
          >
            {section.inputs.map((input) => (
              <FormField<EditProblemTemplate>
                key={input.key}
                input={input}
                config={{
                  ...formConfig[input.key],
                  label: (
                    <>
                      {formConfig[input.key].label}
                      {input.key === "applicant" && (
                        <ToggleWithText
                          isOn={isInstitute}
                          toggleSwitch={() => {
                            setIsInstitute(!isInstitute);
                          }}
                          switchText={isInstitute ? "INSTITUCIÓN" : "MUNICIPIO"}
                        />
                      )}
                    </>
                  ),
                }}
              />
            ))}
          </FormSection>
        ))}
      </FormWrapper>
    </div>
  );
}

export default EditProblem;
