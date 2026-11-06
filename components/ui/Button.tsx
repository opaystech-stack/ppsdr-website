import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "plum" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#960051] focus:ring-offset-2";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs uppercase tracking-wide",
    md: "px-6 py-2.5 text-sm uppercase tracking-wide",
    lg: "px-8 py-3.5 text-base uppercase tracking-wide",
  };

  const variantStyles = {
    primary: "bg-[#960051] text-white hover:bg-[#75003f] shadow-sm",
    secondary: "bg-[#403a60] text-white hover:bg-[#312c4b] shadow-sm",
    plum: "bg-[#960051] text-white hover:bg-[#75003f] shadow-sm",
    outline: "border-2 border-[#403a60] text-[#403a60] hover:bg-[#403a60] hover:text-white",
    white: "bg-white text-[#403a60] hover:bg-gray-100 shadow-sm",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
