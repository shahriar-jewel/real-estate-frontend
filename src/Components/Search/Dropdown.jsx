import React, { useRef, useState } from "react";

// Import Icon
import { MdExpandMore } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DropdownButton = (props) => {
    return (
        <div
            onClick={props.onClick}
            className="flex h-full px-4 border border-solid border-[#b6b5b5] justify-center items-center whitespace-nowrap min-h-[40px] text-sm cursor-pointer rounded-sm"
        >
            <span>{props.btnText}</span>
            <MdOutlineArrowDropDown size={23} color='black' className="text-lg ml-1" />
        </div>
    );
};

const DropdownContent = (props) => {
    return (
        <div
            className={`bg-white border border-solid border-black py-2 px-4 mt-[2px] absolute top-full left-0 ${props.isActive}`}
        >
            {props.children}
        </div>
    );
};

const Dropdown = (props) => {
    // Dropdown
    const [isActive, setIsActive] = useState(false);

    const dropdownRef = useRef(null);

    window.addEventListener("click", (e) => {
        if (!isActive && !dropdownRef.current?.contains(e.target)) {
            setIsActive(!setIsActive);
        }
    });

    return (
        <div ref={dropdownRef} className={`relative ${props.className}`}>
            <DropdownButton
                btnText={props.btnText}
                onClick={() => setIsActive(!isActive)}
            />
            <DropdownContent isActive={isActive ? "block" : "hidden"}>
                {props.children}
            </DropdownContent>
        </div>
    );
};

export default Dropdown;