import React, { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  className = "",
  name,
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? "border-red-500" : ""
        }`}
        id={name}
        name={name}
        {...props}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default TextField;
