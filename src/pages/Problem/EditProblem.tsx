import { createCustomApplicant, createCustomCareer } from "@/adapters";
import { useAsync, useFetchAndLoader } from "@/hooks";
import { Applicant } from "@/models";
import { getApplicants, getCareers, searchProblem } from "@/services";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { callEndpoint } = useFetchAndLoader();
  const idProblem = useParams().id || 0;
  const [isInstitute, setIsInstitute] = useState(false);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [formConfig, setFormConfig] = useState(editProblemConfig);
  const [defaultValues, setDefaultValues] = useState(inicialEditProblem);

  const loadProblem = async () => callEndpoint(searchProblem(idProblem));
  const loadApplicant = async () => callEndpoint(getApplicants());
  const loadCareers = async () => callEndpoint(getCareers());

  useAsync(loadProblem, (data) => {
    setDefaultValues(crearteEditTemplate(data));
    setIsInstitute(data.solicitante.tipo_solicitante === "INSTITUCION");
  });
  useAsync(loadApplicant, (data) => {
    setApplicants(data.map(createCustomApplicant));
    handleChangeApplicant();
  });
  useAsync(loadCareers, (data) => {
    setFormConfig((prev) => ({
      ...prev,
      careers: { ...prev.careers, options: data.map(createCustomCareer) },
    }));
  });
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
    updateProblem(idProblem, createEditEndpoint(data))().then((data) => {
      console.log(data);
    });
  };

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
