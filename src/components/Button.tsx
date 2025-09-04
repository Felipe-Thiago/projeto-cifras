import React from "react";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    type= "button",
    variant = "primary",
}) => {
    const className =
        variant === "primary"
            ? "p-2 border border-gray-300 md:mr-5 md:w-auto w-screen text-center rounded-2xl cursor-pointer hover:shadow-xl bg-white hover:bg-orange-200 hover:border-orange-300"
            : ""

    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    )
}

export default Button;