import React, { useState, useRef } from "react";
import Button from "../UI/Button/Button";
import { NavLink } from "react-router-dom";

// Import Autocomplete
import { suggestions } from "../../Data/suggestions";

// Import Icon
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const SearchForm = (props) => {
    const [isActive, setIsActive] = useState(false);

    const dropdownRef = useRef(null);

    window.addEventListener("click", (e) => {
        if (!isActive && !dropdownRef.current?.contains(e.target)) {
            setIsActive(!setIsActive);
        }
    });

    const [selected, setSelected] = useState("Buy");
    const options = ["Buy", "Rent"];
    // Search Autocomplete
    const [value, setValue] = useState("");
    const valueRef = useRef("");
    const [showSuggestion, setShowSuggestion] = useState(false);
    const suggestionOptions = suggestions.filter((option) =>
        option.location.toLowerCase().includes(value.toLowerCase())
    );

    const searchRef = useRef(null);

    window.addEventListener("click", (e) => {
        if (!showSuggestion && !searchRef.current?.contains(e.target)) {
            setShowSuggestion(false);
        }
    });

    const handleChange = (event) => {
        setValue(event.target.value);
        valueRef.current = event.target.value;
        console.log(valueRef.current);
    };
    const suggestionClick = (suggestion) => {
        setValue(suggestion);
        setShowSuggestion(false);
        console.log(suggestion);
    };

    return (
        <form>
            <div ref={searchRef} className="bg-white rounded flex flex-wrap sm:flex-nowrap relative">
                <div
                    ref={dropdownRef}
                    className="p-2 border-r border-solid border-border_color cursor-pointer flex-[0_0_80px] sm:flex-[0_0_100px] relative"
                >
                    <div
                        onClick={(e) => setIsActive(!isActive)}
                        className="flex justify-center items-center h-10 lg:h-12 leading-10 lg:leading-[3rem] text-base font-normal"
                    >
                        <span>{selected}</span>

                        {isActive ? (
                            <MdOutlineArrowDropUp className="text-xl" />
                        ) : (
                            <MdOutlineArrowDropDown className="text-xl" />
                        )}
                    </div>
                    {isActive && (
                        <ul className="absolute top-full left-0 bg-white w-full text-center border border-solid border-border_color rounded-b">
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={(e) => {
                                        setSelected(option);
                                        setIsActive(false);
                                    }}
                                    className="h-[50px] leading-10 hover:bg-grey transition_custom"
                                >
                                    <div className={`${selected === option ? "text-primary" : ""}`}>{option}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="md:flex-shrink w-[calc(100%_-_80px)] sm:w-full py-2 px-2 ">
                    <input
                        className="w-full focus:outline-none h-10 lg:h-12 px-2 text-base text-body font-normal border-0 focus:border-0 placeholder:text-[13px]"
                        type="search"
                        placeholder="Enter a city, neighbourhood, address, MLS® number or school"
                        value={value}
                        onChange={handleChange}
                        onFocus={() => setShowSuggestion(true)}
                    />
                </div>
                <div className="md:flex-shrink-0 flex space-x-2 p-2 w-full sm:w-auto">
                    <div className="w-1/2 md:w-auto">
                        <Button
                            onClick={props.onFilterModal}
                            className="w-full md:w-auto rounded-md bg-white text-body border-body hover:bg-body hover:text-white"
                        >
                            Filter
                        </Button>
                    </div>
                    <div className="w-1/2 md:w-auto">
                        <NavLink to="/real-estate">
                            <Button className="w-full md:w-auto rounded-md bg-primary text-white border-primary hover:border-secondary hover:bg-secondary">
                                Search
                            </Button>
                        </NavLink>
                    </div>
                </div>
                {showSuggestion && (
                    <div className="absolute top-full z-20 w-full overflow-y-scroll bg-white rounded max-h-[calc(75vh_-_160px)] shadow">
                        <div className="flex px-[0.75rem] py-[0.50rem] items-center">
                            <AiOutlineStar className="text-lg" />
                            <span className="pl-1">Popular Searches</span>
                        </div>
                        <ul className="">
                            {suggestionOptions.map((option) => (
                                <li
                                    key={option.id}
                                    onClick={() =>
                                        suggestionClick(option.location)
                                    }
                                    className={`text-sm font-normal px-[0.75rem] py-[0.50rem] pr-0 text-body justify-between flex
                                    capitalize hover:bg-[#ececec] hover:font-bold ${option.id == 1 ? 'bg-[#dbd7d6] font-bold' : ''}`}
                                >
                                    {option.location}
                                    <span className="ml-8 mr-4 whitespace-nowrap">
                                        {option.city}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="flex p-3 items-center">
                            <AiOutlineStar className="text-lg" />
                            <span className="pl-1">Listings</span>
                        </div>
                        <ul className="">
                            {suggestionOptions.map((option) => (
                                <li
                                    key={option.id}
                                    onClick={() =>
                                        suggestionClick(option.location)
                                    }
                                    className="text-sm font-normal p-3 pr-0 text-body justify-between flex
                            capitalize hover:bg-[#ececec] hover:font-bold"
                                >
                                    {option.location}
                                    <span className="ml-8 mr-4 whitespace-nowrap">
                                        {option.city}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </form>
    );
};

export default SearchForm;
