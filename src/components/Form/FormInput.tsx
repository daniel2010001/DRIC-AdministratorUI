import React, { InputHTMLAttributes, forwardRef } from "react";
import { useFormContext, Controller } from "react-hook-form";
import CustomQuill from "./CustomQuill";
import { Description, Field, Input, Label, Textarea } from "@headlessui/react";
import SimpleComboBox from "../Tailwind/ComboBox";
import clsx from "clsx";

export interface FormInputProps extends InputHTMLAttributes<any> {
  name: string;
  type:
    | "text"
    | "quill"
    | "date"
    | "tel"
    | "textarea"
    | "combobox"
    | "checkbox";
  label: string | React.JSX.Element;
  description?: string | React.JSX.Element;
  datalist?: string[];
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ name, type, label, description, datalist, ...props }, ref) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    const className =
      "bg-white block w-full rounded-md border-0 mt-1 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6";

    return (
      <Field
        className={clsx(
          type === "checkbox" ? "flex items-center gap-x-4" : "flex-col"
        )}
      >
        <Label
          htmlFor={name}
          className="flex justify-between text-sm font-medium leading-6"
        >
          {label}
        </Label>
        {description && (
          <Description className="text-sm leading-6 text-gray-600">
            {description}
          </Description>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            type === "textarea" ? (
              <Textarea {...field} {...props} className={className} />
            ) : type === "quill" ? (
              <CustomQuill
                ref={ref}
                value={field.value}
                onChange={field.onChange}
                className={className}
              />
            ) : type === "combobox" ? (
              <SimpleComboBox
                {...field}
                {...props}
                type="text"
                datalist={datalist}
                className={className}
              />
            ) : type === "checkbox" ? (
              <Input
                {...field}
                {...props}
                type={type}
                className={clsx(className, "max-w-5 rounded-md h-5 w-5")}
              />
            ) : (
              <Input
                {...field}
                {...props}
                type={type}
                className={className}
                list={datalist && `${name}List`}
                onChange={(e) => {
                  field.onChange(e.target.value.toUpperCase());
                }}
              />
            )
          }
        />
        {errors[name] && (
          <p className="text-rose-600">{String(errors[name]?.message)}</p>
        )}
      </Field>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
