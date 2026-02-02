
import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <fieldset className="border-t border-gray-200 pt-5">
      <legend className="text-lg font-semibold text-brand-primary px-2 -ml-2">{title}</legend>
      <div className="mt-4 space-y-4">
        {children}
      </div>
    </fieldset>
  );
};

export default FormSection;
