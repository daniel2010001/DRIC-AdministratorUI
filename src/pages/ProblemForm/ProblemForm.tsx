import { FormField, FormSection, FormWrapper } from "@/components/Form";
import { ToggleWithText } from "@/components/Tailwind/Toggle";
import {
  Applicant,
  EndpointApplicant,
  EndpointCareer,
  ProblemFormTemplate,
  defaultProblemFormTemplate,
} from "@/models";
import { useEffect, useState } from "react";
import { formLayout, problemFormConfig } from ".";
import { useAsync } from "@/hooks";
import { loadApplicants, loadCareers } from "@/services";
import {
  createApplicant,
  createCareer,
  createFormEndpointTemplate,
} from "@/adapters";

export function ProblemForm() {
  const [isOn, setIsOn] = useState(false);
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [formConfig, setFormConfig] = useState(problemFormConfig);
  const [defaultValues, setDefaultValues] = useState(
    defaultProblemFormTemplate
  );

  useAsync(loadApplicants(), (data: EndpointApplicant[]) => {
    setApplicants(data.map(createApplicant));
    handleChangeApplicant();
    setDefaultValues((prev) => ({ ...prev, applicant: null }));
  });
  useAsync(loadCareers(), (data: EndpointCareer[]) => {
    setFormConfig((prev) => ({
      ...prev,
      careers: { ...prev.careers, options: data.map(createCareer) },
    }));
    setDefaultValues((prev) => ({ ...prev, careers: [] }));
  });
  useEffect(() => {
    handleChangeApplicant();
  }, [isOn, applicants]);

  const handleChangeApplicant = () => {
    setFormConfig((prev) => ({
      ...prev,
      applicant: {
        ...prev.applicant,
        options: applicants.filter(
          (applicant) => applicant.type === (isOn ? "INSTITUCION" : "MUNICIPIO")
        ),
      },
    }));
  };

  const handleSubmit = (data: ProblemFormTemplate) => {
    console.log(createFormEndpointTemplate(data));
  };

  return (
    <div className="mx-auto max-w-screen-lg border-2 border-light-primary dark:border-dark-primary rounded-lg">
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
                          isOn={isOn}
                          toggleSwitch={() => {
                            setIsOn(!isOn);
                          }}
                          switchText={isOn ? "INSTITUCIÓN" : "MUNICIPIO"}
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
