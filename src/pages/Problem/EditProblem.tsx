import { createCustomApplicant, createCustomCareer } from "@/adapters";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { Applicant, ApplicantType } from "@/models";
import { getApplicants, getCareers, searchProblem } from "@/services";
import { SnackbarUtilities } from "@/utilities";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  const { loading: loadingApplicants, callEndpoint: callApplicants } =
    useFetchAndLoader();
  const { loading: loadingCareers, callEndpoint: callCareers } =
    useFetchAndLoader();
  const { loading: loadingProblem, callEndpoint: callProblem } =
    useFetchAndLoader();
  const idProblem = useParams().id || 0;
  const [isInstitute, setIsInstitute] = useState(false);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [formConfig, setFormConfig] = useState(editProblemConfig);
  const [defaultValues, setDefaultValues] = useState(inicialEditProblem);
  const [problem, setProblem] = useState(inicialEditProblem);

  useAsync(
    async () => callApplicants(getApplicants()),
    (data) => {
      setApplicants(data.map(createCustomApplicant));
      handleChangeApplicant();
    }
  );
  useAsync(
    async () => callCareers(getCareers()),
    (data) =>
      setFormConfig((prev) => ({
        ...prev,
        careers: { ...prev.careers, options: data.map(createCustomCareer) },
      }))
  );
  useAsync(
    async () => callProblem(searchProblem(idProblem)),
    (data) => setProblem(crearteEditTemplate(data))
  );
  useEffect(() => handleChangeApplicant(), [isInstitute]);
  useEffect(() => {
    if (!loadingApplicants && !loadingCareers) setDefaultValues(problem);
  }, [loadingApplicants, loadingCareers, loadingProblem]);

  const handleChangeApplicant = () => {
    setFormConfig((prev) => ({
      ...prev,
      applicant: {
        ...prev.applicant,
        options: applicants.filter(
          (applicant) =>
            applicant.type ===
            (isInstitute ? ApplicantType.INSTITUCION : ApplicantType.MUNICIPIO)
        ),
      },
    }));
  };

  const handleSubmit = async (data: EditProblemTemplate) => {
    await updateProblem(idProblem, createEditEndpoint(data))
      .then(() => {
        SnackbarUtilities.success(
          "La problemática ha sido actualizada correctamente"
        );
        navigate("..");
      })
      .catch(() =>
        SnackbarUtilities.error("Error al actualizar la problemática")
      );
  };

  if (!loadingProblem && !problem.title) {
    SnackbarUtilities.error("No se encontró la problemática");
    return <Navigate to=".." />;
  }

  return (
    <div className="mx-auto max-w-screen-lg border-2 border-light-primary dark:border-dark-primary rounded-lg bg-light-secondary dark:bg-dark-secondary">
      <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center text-light-primary dark:text-dark-primary">
        FORMULARIO DE EDICI&Oacute;N DE PROBLEM&Aacute;TICA
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
                      <span>
                        {formConfig[input.key].label}
                        {formConfig[input.key].required && (
                          <span className="text-rose-600 mx-1">*</span>
                        )}
                        :
                      </span>
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
