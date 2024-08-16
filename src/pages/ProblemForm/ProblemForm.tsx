import FormWrapper, { FormInput, FormSection } from "@/components/Form";
import { ToggleWithText } from "@/components/Tailwind/Toggle";
import {
  Applicant,
  Career,
  ProblemFormTemplate,
  defaultProblemFormTemplate,
} from "@/models";
import { useState } from "react";
import { formLayout, problemFormConfig } from ".";
import { useAsync } from "@/hooks";
import { loadApplicants, loadCareers } from "@/services";
import FieldForm from "@/components/Form/FieldForm";
import * as Icons from "@/assets";

export function ProblemForm() {
  const [isOn, setIsOn] = useState(false);
  const [careers, setCareers] = useState<Career[]>([]);
  const [applicants, setApplicants] = useState<Applicant[]>([]);

  useAsync(loadApplicants(), (data: Applicant[]) => {
    setApplicants(data);
  });
  useAsync(loadCareers(), (data: Career[]) => {
    setCareers(data);
  });

  const handleSubmit = (data: ProblemFormTemplate) => {
    console.log(data);
  };
  return (
    <div className="mx-auto max-w-screen-lg border-2 border-light-primary dark:border-dark-primary rounded-lg">
      <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center text-light-primary dark:text-dark-primary">
        FORMULARIO DE PROBLEMATICAS PARA EL DESARROLLO DE UN PROYECTO DE TESIS O
        PROYECTO DE GRADO
      </h1>
      <Icons.HeadingIcon1 />
      <FormWrapper<ProblemFormTemplate>
        onSubmit={handleSubmit}
        schema={{
          ...problemFormConfig,
          applicant: { ...problemFormConfig.applicant, options: applicants },
          careers: { ...problemFormConfig.careers, options: careers },
        }}
        defaultValues={defaultProblemFormTemplate}
      >
        {formLayout.map((section) => (
          <FormSection
            key={section.title}
            title={section.title}
            description={section.description}
          >
            {section.inputs.map((input) => (
              <FieldForm<ProblemFormTemplate>
                key={input.key}
                input={input}
                config={{
                  ...problemFormConfig[input.key],
                  label: (
                    <>
                      {problemFormConfig[input.key].label}
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
