import FormWrapper, { FormInput, FormSection } from "@/components/Form";
import { ToggleWithText } from "@/components/Tailwind/Toggle";
import {
  ProblemFormTemplate,
  defaultProblemFormTemplate,
  formLayout,
  problemFormConfig,
} from "@/models";
import { useState } from "react";

export function ProblemForm() {
  const [IsOn, setIsOn] = useState(false);
  const handleSubmit = (data: ProblemFormTemplate) => {
    console.log(data);
  };
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center">
        FORMULARIO DE PROBLEMATICAS PARA EL DESARROLLO DE UN PROYECTO DE TESIS O
        PROYECTO DE GRADO
      </h1>

      <FormWrapper<ProblemFormTemplate>
        onSubmit={handleSubmit}
        schema={problemFormConfig}
        defaultValues={defaultProblemFormTemplate}
      >
        {formLayout.map((section) => (
          <FormSection
            key={section.title}
            title={section.title}
            description={section.description}
          >
            {section.inputs.map((input) => (
              <div
                key={input.key}
                // sm:col-span-3 sm:col-span-6
                className={`sm:col-span-${
                  input.colSpan * 3
                } relative text-light-primary dark:text-dark-primary`}
              >
                <FormInput
                  type={problemFormConfig[input.key].type}
                  name={input.key}
                  label={
                    <>
                      {problemFormConfig[input.key].label}
                      {input.key === "applicant" && (
                        <ToggleWithText
                          isOn={IsOn}
                          toggleSwitch={() => {
                            setIsOn(!IsOn);
                          }}
                          switchText={IsOn ? "INSTITUCIÓN" : "MUNICIPIO"}
                        />
                      )}
                    </>
                  }
                />
              </div>
            ))}
          </FormSection>
        ))}
      </FormWrapper>
    </div>
  );
}

export default ProblemForm;
