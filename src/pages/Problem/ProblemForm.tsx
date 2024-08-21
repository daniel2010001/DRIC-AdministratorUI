import { createCustomApplicant, createCustomCareer } from "@/adapters";
import { useAsync } from "@/hooks";
import { Applicant, ApplicantEndpoint, CareerEndpoint } from "@/models";
import { loadApplicants, loadCareers } from "@/services";
import { useEffect, useState } from "react";
import { createFormEndpoint } from "./adapters";
import {
  FormField,
  FormSection,
  FormWrapper,
  ToggleWithText,
} from "./components";
import {
  ProblemFormTemplate,
  formLayout,
  inicialProblemForm,
  problemFormConfig,
} from "./models";

export function ProblemForm() {
  const [isInstitute, setIsInstitute] = useState(false);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [formConfig, setFormConfig] = useState(problemFormConfig);
  const [defaultValues, setDefaultValues] = useState(inicialProblemForm);

  useAsync(loadApplicants(), (data: ApplicantEndpoint[]) => {
    setApplicants(data.map(createCustomApplicant));
    handleChangeApplicant();
    setDefaultValues((prev) => ({ ...prev, applicant: null }));
  });
  useAsync(loadCareers(), (data: CareerEndpoint[]) => {
    setFormConfig((prev) => ({
      ...prev,
      careers: { ...prev.careers, options: data.map(createCustomCareer) },
    }));
    setDefaultValues((prev) => ({ ...prev, careers: [] }));
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

  const handleSubmit = (data: ProblemFormTemplate) => {
    console.log(createFormEndpoint(data));
  };

  return (
    <div className="mx-auto max-w-screen-lg border-2 border-light-primary dark:border-dark-primary rounded-lg bg-light-secondary dark:bg-dark-secondary">
      <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center text-light-primary dark:text-dark-primary">
        FORMULARIO DE PROBLEMATICAS PARA EL DESARROLLO DE UN PROYECTO DE TESIS O
        PROYECTO DE GRADO
      </h1>

      <FormWrapper<ProblemFormTemplate>
        onSubmit={handleSubmit}
        formConfig={problemFormConfig}
        defaultValues={defaultValues}
      >
        {formLayout.map((section) => (
          <FormSection
            key={section.title}
            title={section.title}
            description={section.description}
          >
            {section.inputs.map((input) => (
              <FormField<ProblemFormTemplate>
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

export default ProblemForm;
