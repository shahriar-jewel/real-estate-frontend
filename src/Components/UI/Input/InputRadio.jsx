import React from "react";

const InputRadio = (props) => {
    return (
        <label
            htmlFor={props.id}
            className="flex items-center cursor-pointer whitespace-nowrap"
        >
            <input
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
                className="hidden peer"
                onClick={props?.onClick}
                defaultChecked
            />

            <span className="w-5 h-5 border border-solid border-border_color block rounded-full relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:rounded-full after:bg-primary after:scale-0 peer-checked:after:scale-[.60] after:transition-all after:ease-linear after:duration-300"></span>

            <span className={`${props.className} font-medium ml-2 block`}>
                {props.text}
            </span>
        </label>
    );
};

export default InputRadio;
