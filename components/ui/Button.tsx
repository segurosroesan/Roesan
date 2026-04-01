import React from "react";
import { Link } from "lucide-react"; // Actually we might use Next.js Link text-to-href wrapping, but this is a button.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-all duration-200 active:scale-95";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-blue-900 shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40",
        secondary: "bg-secondary text-secondary-foreground hover:bg-sky-500 shadow-md",
        outline: "border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground",
        ghost: "hover:bg-slate-100 hover:text-accent-foreground",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-6 py-2 text-sm",
        lg: "h-14 px-8 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
