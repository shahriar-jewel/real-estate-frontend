import React from "react";

const Input = (props) => {
    return (
        <input
            className={`w-full h-9 border border-solid border-border_color px-3 pt-1 rounded focus:outline-none focus:border-primary transition_custom appearance-none text-sm ${props.className}`}
            {...props.input}
            onChange={props?.onChange}
        />
    );
};

export default Input;
