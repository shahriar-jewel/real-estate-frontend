import React from "react";

const Button = (props) => {
    return (
        <button
            className={`h-10 lg:h-12 px-4 sm:px-6 lg:px-8 border border-solid text-sm sm:text-base font-medium transition_custom whitespace-nowrap ${props.className}`}
            onClick={props.onClick}
            type={props.type || "button"}
        >
            {props.children}
        </button>
    );
};

export default Button;
