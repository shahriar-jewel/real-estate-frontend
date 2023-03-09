import React from "react";

const ButtonLink = (props) => {
    return (
        <a
            href=""
            className={`p-2  border border-solid text-sm font-medium transition_custom inline-block ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </a>
    );
};

export default ButtonLink;
