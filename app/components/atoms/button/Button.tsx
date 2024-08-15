import { cn } from "@/app/utils";
import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "contain" | "outline" | "text";
  color?: "primary" | "secondary" | "success" | "error";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contain",
  color = "primary",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded font-medium transition-colors duration-300";
  const variantStyles = {
    contain: {
      primary: "bg-blue-500 text-white hover:bg-blue-700",
      secondary: "bg-gray-500 text-white hover:bg-gray-700",
      success: "bg-green-500 text-white hover:bg-green-700",
      error: "bg-red-500 text-white hover:bg-red-700",
    },
    outline: {
      primary:
        "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white",
      secondary:
        "bg-transparent text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white",
      success:
        "bg-transparent text-green-500 border border-green-500 hover:bg-green-500 hover:text-white",
      error:
        "bg-transparent text-red-500 border border-red-500 hover:bg-red-500 hover:text-white",
    },
    text: {
      primary: "hover:bg-blue-100 text-blue-700",
      secondary: "hover:bg-gray-100 text-gray-700",
      success: "hover:bg-green-100 text-green-700",
      error: "hover:bg-red-100 text-red-700",
    },
  };
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    // without merge class
    // <button
    //   className={`${baseStyles} ${variantStyles[variant]?.[color]} ${disabledStyles} ${className}`}
    //   disabled={disabled}
    //   {...props}
    // >
    //   {children}
    // </button>

    // within merge class
    <button
      className={cn(
        baseStyles,
        variantStyles[variant]?.[color],
        disabledStyles,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
