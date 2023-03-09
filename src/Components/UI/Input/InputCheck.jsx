import React, { useState } from "react";
import { MdDone } from "react-icons/md";

const InputCheck = (props) => {
    return (
        <label
            htmlFor={props.id}
            className={`flex items-center cursor-pointer relative before:w-[18px] before:h-[18px] before:border before:border-solid before:border-border_color before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-[18px] whitespace-nowrap ${props.className}`}
        >
            <input
                id={props.id}
                type="checkbox"
                className="hidden peer"
                onChange={props.onChange}
            />
            <MdDone className="absolute top-1/2 -translate-y-1/2 left-[1px] text-primary text-base z-[-1] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible" />
            <span className="ml-2 pt-[2px]">{props.title}</span>
        </label>
    );
};

export default InputCheck;
