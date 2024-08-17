import { FieldConfig } from "@/models";
import {
  Checkbox,
  Description,
  Field,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";
import EditorInput from "./EditorInput";
import SimpleComboBox from "../Tailwind/ComboBox";

interface FormFieldProps<T> {
  config: FieldConfig;
  input: { key: keyof T; colSpan: number };
}

export const FormField = <T extends Object>({
  config,
  input,
}: FormFieldProps<T>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const className = clsx(
    "block w-full mt-1 py-1.5 px-3 sm:text-sm sm:leading-6 min-h-8 h-auto",
    "rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300",
    "focus:ring-2 focus:ring-inset focus:ring-indigo-400",
    "ligth-secondary dark:dark-secondary"
  );
  return (
    <Field
      className={clsx(
        config.type === "checkbox" ? "flex items-center gap-x-8" : "flex-col",
        "h-fit relative text-light-primary dark:text-dark-primary",
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
        <Description className="text-sm leading-6 text-light-secondary dark:text-dark-secondary">
          {config.description}
        </Description>
      )}
      <Controller
        name={input.key as string}
        control={control}
        render={({ field }) =>
          config.type === "textarea" ? (
            <Textarea
              {...field}
              className={clsx(className, "min-h-16 h-auto")}
            />
          ) : config.type === "editor" ? (
            <EditorInput
              content={field.value}
              onChange={field.onChange}
              className={className}
            />
          ) : config.type === "combobox" ? (
            <SimpleComboBox
              value={field.value}
              onChange={field.onChange}
              options={config.options || []}
              className={className}
              multiple={config.multiple}
            />
          ) : config.type === "checkbox" ? (
            <Checkbox
              {...field}
              className="group size-6 rounded-md bg-dark-secondary/50 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
            />
          ) : (
            <Input
              {...field}
              type={config.type}
              className={className}
              onChange={(e) => {
                field.onChange(e.target.value.toUpperCase());
              }}
            />
          )
        }
      />
      {errors[input.key as string] && (
        <p className="text-rose-600">
          {String(errors[input.key as string]?.message)}
        </p>
      )}
    </Field>
  );
};

export default FormField;
