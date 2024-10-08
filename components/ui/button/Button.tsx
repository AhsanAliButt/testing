import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

// Define the interface for the component props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

// Define the CommonButton component
const Button: React.FC<ButtonProps> = ({ className, children, ...otherProps }) => {
    return (
        <button
            className={cn(
                "px-4  flex justify-center items-center",
                className
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
