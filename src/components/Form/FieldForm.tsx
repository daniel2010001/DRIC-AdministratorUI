import { FieldConfig, FormSectionProps } from "@/models";
import { Description, Field, Input, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";

interface FieldFormProps<T> {
  config: FieldConfig;
  input: { key: keyof T; colSpan: number };
}

export const FieldForm = <T extends Object>({
  config,
  input,
}: FieldFormProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const className = clsx(
    "block w-full mt-1 py-1.5 px-3 sm:text-sm sm:leading-6",
    "rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300",
    "focus:ring-2 focus:ring-inset focus:ring-indigo-400",
    "ligth-secondary dark:dark-secondary"
  );
  return (
    <Field
      className={clsx(
        config.type === "checkbox" ? "flex items-center gap-x-4" : "flex-col",
        "relative text-light-primary dark:text-dark-primary",
        input.colSpan ? `sm:col-span-${input.colSpan * 3}` : "col-span-full"
      )}
    >
      <Label
        htmlFor={input.key as string}
        className="flex justify-between text-sm font-medium leading-6"
      >
        {config.label}
      </Label>
      {config.description && (
        <Description className="text-sm leading-6 text-gray-600">
          {config.description}
        </Description>
      )}
      {config.type === "editor" ? (
        <p>Quill</p>
      ) : (
        <Input
          {...register(input.key as string)}
          type={config.type}
          className={className}
        />
      )}
      {errors[input.key as string] && (
        <p className="text-rose-600">
          {String(errors[input.key as string]?.message)}
        </p>
      )}
    </Field>
  );
};

export default FieldForm;
