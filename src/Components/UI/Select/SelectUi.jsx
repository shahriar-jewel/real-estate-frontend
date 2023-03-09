import React from "react";
import { BiChevronDown } from "react-icons/bi";

const SelectUi = (props) => {
    return (
        <div className="relative">
            <select
                className={`w-full h-9 border border-solid border-border_color px-3 py-2 rounded focus:outline-none focus:border-primary transition_custom appearance-none text-sm font-medium ${props.className}`}
                onChange={props.onChange}
            >
                {props.options &&
                    props.options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
            <BiChevronDown className="absolute top-1/2 right-3 -translate-y-1/2 text-lg" />
        </div>
    );
};

export default SelectUi;
