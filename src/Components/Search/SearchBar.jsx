import React, { useEffect, useState, useRef } from "react";

// Import components
import Button from "../UI/Button/Button";
import InputRadio from "../UI/Input/InputRadio";
import InputCheck from "../UI/Input/InputCheck";
import Input from "../UI/Input/Input";

import Dropdown from "./Dropdown";

// Import Icon
import { MdSearch } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { FiMap } from "react-icons/fi";
import { getProperties } from "../../api";

const SearchBar = (props) => {
    const [show, setShow] = useState(true);
    const [view, setView] = useState(false);
    let isMounted = useRef(false);
    const [property, setProperty] = useState([]);

    const [buyrent, setBuyrent] = useState('sale');
    const [bed, setBed] = useState(2);
    useEffect(() => {
        if (isMounted.current) {
            getProperties(buyrent, 10).then((c) => {
                setProperty(c.data.data.properties);
                console.log(c.data.data.properties);
            }).catch((err) => {
                console.log("error", err);
            });
        } else {
            isMounted.current = true;
        }
    }, [buyrent]);

    const applyFilters = () => {
        let updatedList = property;
    
        // Bedroom Filter
        if (bed) {
          updatedList = updatedList.filter(
            (item) => item.bedrooms == bed
          );
        }
    
        setProperty(updatedList);
      };

      useEffect(() => {
        if (isMounted.current){
            applyFilters();
            // console.log(property);
        }else{
            isMounted = true;
        }
      }, [bed]);

    return (
        <div className="h-[5.25rem] px-4 py-5 border border-solid border-[#ececec]">
            <form>
                <div className="w-full h-full flex space-x-2">
                    <div className="relative w-full block">
                        <label className="absolute top-1/2 left-2 -translate-y-1/2">
                            <MdSearch className="text-2xl" />
                        </label>
                        <input
                            type="text"
                            className="text-lg px-3 py-2 pl-10  border border-solid border-[#b6b5b5] w-full focus:outline-none h-full font-normal rounded-sm"
                            placeholder="Search "
                        />
                    </div>

                    <div className="">
                        <Button className="bg-primary text-white border-primary !h-full lg:px-4 sm:px-4 rounded-sm">
                            Search
                        </Button>
                    </div>

                    <Dropdown btnText={buyrent}>
                        <div className="flex whitespace-nowrap space-x-6">
                            <InputRadio
                                id="rent-listings"
                                text="Rent listings"
                                name="listings"
                                value="sold"
                                className="text-base"
                                onClick={(e) => setBuyrent(e.target.value)}
                            />
                            <InputRadio
                                id="buy-listings"
                                text="Buy listings"
                                name="listings"
                                value="sale"
                                className="text-base"
                                onClick={(e) => setBuyrent(e.target.value)}
                            />
                        </div>
                    </Dropdown>

                    <Dropdown btnText="Sold Listings">
                        <div className="flex whitespace-nowrap space-x-6">
                            <InputRadio
                                id="active-listings"
                                text="Active listings"
                                name="listings-type"
                                value="active"
                                className="text-base"
                                onClick={(e) => console.log(props.property)}
                            />
                            <InputRadio
                                id="sold-listings"
                                text="Sold listings"
                                name="listings-type"
                                value="sold"
                                className="text-base"
                            />
                            <InputRadio
                                id="expired-listings"
                                text="Expired listings"
                                name="listings-type"
                                value="expired"
                                className="text-base"
                            />
                        </div>
                    </Dropdown>

                    <Dropdown
                        className="hidden 2xl:block"
                        btnText="Home Type (3)"
                    >
                        <div className="">
                            <ul className="space-y-3">
                                <li className="text-xs font-medium block">
                                    <InputCheck
                                        onChange={(event) =>
                                            setShow(event.target.checked)
                                        }
                                        id="house"
                                        title="House"
                                    />
                                    <ul className={`pl-5 pt-2 space-y-3 ${!show ? "block" : "hidden"}`}>
                                        <li className="text-xs font-medium block">
                                            <InputCheck
                                                id="detached"
                                                title="Detached"
                                            />
                                        </li>
                                        <li className="text-xs font-medium block">
                                            <InputCheck
                                                id="semi-detached"
                                                title="Semi-Detached"
                                            />
                                        </li>
                                        <li className="text-xs font-medium block">
                                            <InputCheck
                                                id="attached"
                                                title="Attached/Row"
                                            />
                                        </li>
                                    </ul>
                                </li>
                                <li className="text-xs font-medium block">
                                    <InputCheck
                                        id="townhouse"
                                        title="Townhouse"
                                    />
                                </li>
                                <li className="text-xs font-medium block">
                                    <InputCheck
                                        id="apartment"
                                        title="Condo/Apartment"
                                    />
                                </li>
                            </ul>
                        </div>
                    </Dropdown>

                    <Dropdown className="hidden 2xl:block" btnText="Below 200k">
                        <div className="w-60">
                            <div className="flex items-center space-x-4 border-b border-solid border-border_color pb-4">
                                <Input
                                    className="rounded-none border-body"
                                    input={{
                                        type: "number",
                                        placeholder: "Min",
                                    }}
                                />
                                <span className="text-body text-sm opacity-50">
                                    to
                                </span>
                                <Input
                                    className="rounded-none border-body"
                                    input={{
                                        type: "number",
                                        placeholder: "Max",
                                    }}
                                />
                            </div>
                            <div className="pt-3">
                                <div className="">
                                    <ul>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $50,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $100,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $200,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $400,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $600,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $800,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $800,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $1,000,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $1,250,000
                                        </li>
                                        <li className="text-base text-body font-normal hover:font-bold transition-all duration-200 ease-linear cursor-pointer mt-1">
                                            $1,500,000
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex justify-end space-x-4 pt-6">
                                <button className="text-xs text-[#4695c4] whitespace-nowrap font-medium">
                                    Reset
                                </button>
                                <button className="text-xs text-[#4695c4] whitespace-nowrap font-medium">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </Dropdown>

                    <Dropdown className="hidden 2xl:block" btnText={`${bed} Beds`}>
                        <div className="py-2">
                            <div className="relative w-[150px] whitespace-pre">
                                <select onChange={(e)=> setBed(e.target.value)} className="text-base w-full leading-9 pl-3 pr-8 border border-solid border-border_color bg-white whitespace-pre appearance-none focus:outline-none">
                                    <option value="0">0 Beds</option>
                                    <option value="1">1 Bed</option>
                                    <option value="2">2 Beds</option>
                                    <option value="3">3 Beds</option>
                                    <option value="4">4 Beds</option>
                                    <option value="5">5 Beds</option>
                                    <option value="6">6 Beds</option>
                                </select>
                                <MdExpandMore className="absolute top-1/2 right-3 -translate-y-1/2" />
                            </div>
                            <div className="mt-3">
                                <InputCheck
                                    title="or More"
                                    className="text-sm"
                                />
                            </div>
                        </div>
                    </Dropdown>

                    <div className="">
                        <Button
                            onClick={props.onFilterModal}
                            className="w-full md:w-auto lg:px-4 md:px-4 lg:!h-10 rounded-sm bg-white text-body border-body hover:bg-body hover:text-white"
                        >
                            More
                        </Button>
                    </div>

                    <div className="">
                        <Button
                            onClick={() => setView(!view)}
                            className="lg:px-4 md:px-4 lg:!h-10 rounded-sm bg-white text-body border-body hover:bg-body hover:text-white"
                        >
                            {!view ? (
                                <>
                                    <TfiLayoutGrid2 className="inline-block mr-2" />
                                    <span>List View</span>
                                </>
                            ) : (
                                <>
                                    <FiMap className="inline-block mr-2" />
                                    <span>Map View</span>
                                </>
                            )}
                        </Button>
                    </div>

                    <div className="">
                        <Button className="w-full md:w-auto lg:px-4 md:px-4 lg:!h-10 rounded-sm bg-white text-body border-body hover:bg-body hover:text-white">
                            Save Search
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;