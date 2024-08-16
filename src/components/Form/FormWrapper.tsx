import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { createObjectSchema } from "@/pages/ProblemForm/utilities";
import { FieldConfig } from "@/models";

interface FormWrapperProps<T> {
  onSubmit: (data: T) => void;
  schema: { [K in keyof T]: FieldConfig };
  defaultValues: T;
  children: ReactNode;
}

export const FormWrapper = <T extends Object>({
  onSubmit,
  schema,
  defaultValues,
  children,
}: FormWrapperProps<T>) => {
  const schemaObject = createObjectSchema<T>(schema, defaultValues);
  const methods = useForm<T>({
    resolver: yupResolver(schemaObject),
    defaultValues: defaultValues as any,
  });
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="px-4 pb-6 max-w-7xl mx-auto sm:px-6 sm:pb-8 md:px-8 bg-light-secondary dark:bg-dark-secondary"
      >
        {children}

        <div className="mt-6 flex items-center justify-end gap-x-6 ">
          <Link
            to={"/"}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
