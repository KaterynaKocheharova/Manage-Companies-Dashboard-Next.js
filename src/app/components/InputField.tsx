'use client';
import { Field } from 'formik';

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
};

const InputField = ({ label, id, ...rest }: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-base text-gray-900 mb-2">
          {label}
        </label>
      )}
      <Field
        id={id}
        {...rest}
        className="p-3 h-11 text-sm rounded bg-white border border-gray-300 placeholder:text-sm placeholder:text-gray-500 shadow"
      />
    </div>
  );
};

export default InputField;
