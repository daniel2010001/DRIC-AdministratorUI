import React from "react";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 mt-12 md:grid-cols-3">
      <div className="">
        <h2 className="text-base font-semibold leading-7 text-gray-900 grid-cols-4">
          {title}
        </h2>
        {description && (
          <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
        )}
      </div>

      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 md:col-span-2">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
