import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

interface FormWrapperProps {
  onSubmit: (data: any) => void;
  schema: any;
  children: React.ReactNode;
}

export const FormWrapper = ({
  onSubmit,
  schema,
  children,
}: FormWrapperProps) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: schema.describe().default,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="px-4 pb-6 max-w-7xl mx-auto sm:px-6 sm:pb-8 md:px-8"
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
