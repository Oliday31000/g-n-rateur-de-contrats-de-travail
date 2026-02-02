import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, name, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      id={name}
      name={name}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
    />
  </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({ label, name, options, placeholder, ...props }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      id={name}
      name={name}
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-primary focus:border-brand-primary"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
  </div>
);

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, name, ...props }) => (
  <div className="flex items-center h-full pt-4">
    <input
      id={name}
      name={name}
      type="checkbox"
      {...props}
      className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
    />
    <label htmlFor={name} className="ml-2 block text-sm text-gray-900">{label}</label>
  </div>
);