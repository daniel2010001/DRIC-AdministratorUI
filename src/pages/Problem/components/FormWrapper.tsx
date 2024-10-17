import { FieldConfig } from "@/models";
import { createObjectSchema } from "@/pages/Problem/utilities";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormWrapperProps<T> {
  onSubmit: (data: T) => Promise<void>;
  formConfig: { [K in keyof T]: FieldConfig };
  defaultValues: T;
  children: ReactNode;
  labelButton?: string;
}

export const FormWrapper = <T extends Object>({
  onSubmit,
  formConfig,
  defaultValues,
  children,
  labelButton = "Guardar",
}: FormWrapperProps<T>) => {
  const schemaObject = createObjectSchema<T>(formConfig, defaultValues);
  const methods = useForm({
    resolver: yupResolver(schemaObject),
    defaultValues: defaultValues as any, // TODO: Arreglar esto
  });
  useEffect(() => {
    methods.reset(defaultValues as any); // Resetea los valores cuando cambian
  }, [defaultValues as any]);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="px-4 pb-6 max-w-7xl mx-auto sm:px-6 sm:pb-8 md:px-8"
      >
        {children}

        <div className="mt-6 flex items-center justify-end gap-x-6 ">
          <Link to={".."} type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancelar
          </Link>
          <button
            disabled={methods.formState.isSubmitting}
            type="submit"
            className="rounded-md bg-[#093958] hover:bg-[#34617a] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {labelButton}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
