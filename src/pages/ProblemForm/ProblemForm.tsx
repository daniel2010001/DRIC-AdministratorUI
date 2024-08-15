import FormWrapper from "@/components/Form";

export function ProblemForm() {
  const handleSubmit = () => {
    console.log("Enviando formulario");
  };
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="font-semibold text-xl md:text-2xl md:max-w-screen-md mx-auto p-8 pb-0 text-center">
        FORMULARIO DE PROBLEMATICAS PARA EL DESARROLLO DE UN PROYECTO DE TESIS O
        PROYECTO DE GRADO
      </h1>

      <FormWrapper onSubmit={handleSubmit} schema={[]}>
        <h1>Formulario de creación de problemáticas</h1>
      </FormWrapper>
    </div>
  );
}

export default ProblemForm;
