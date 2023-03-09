import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import Modal from "../UI/Modal/Modal";
import InputRadio from "../UI/Input/InputRadio";
import RangeSlider from "../UI/RangeSlider/RangeSlider";
import Dropdown from "./Dropdown/Dropdown";
import Input from "../UI/Input/Input";
import Quantity from "../UI/Quantity/Quantity";
import InputCheck from "../UI/Input/InputCheck";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "../UI/Select/SelectUi";
import FilterCol from "./FilterCol";
import Button from "../UI/Button/Button";

const FilterModal = (props) => {
    const [sinceDate, setSinceDate] = useState(null);
    const [untilDate, setUntilDate] = useState(null);

    const handleChange = (e) => {
        console.log({[e?.target?.name] : e?.target?.value});
    }

    return (
        <Modal
            className="max-w-[90%] sm:max-w-[500px] md:max-w-[680px] lg:max-w-[940px] xl:max-w-[980px] pt-[65px] md:pt-[70px] lg:pt-[85px] pb-[73px] lg:pb-24"
            onClose={props.onClose}
        >
            <div className="absolute p-4 lg:px-12 lg:py-6 w-full left-0 top-0 bg-white flex justify-between items-center border-b border-solid border-border_color">
                <h2 className="text-2xl md:text-3xl font-normal font-frank">
                    Filter Search
                </h2>
                <button onClick={props.onClose} className="">
                    <MdClose className="text-2xl" />
                </button>
            </div>

            <div className="lg:px-8 py-5 overflow-y-auto max-h-[68vh] scrollbar-none">
                <div className="md:flex justify-between md:space-x-8 lg:space-x-14 space-y-8 md:space-y-0">
                    <FilterCol>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Listing Status
                            </h3>
                            <div className="space-y-3">
                                <InputRadio
                                    id="active-listings"
                                    name="listingStatus"
                                    text="Active Listings"
                                    value="active"
                                    className="text-xs"
                                    onClick={handleChange}
                                />
                                <InputRadio
                                    id="sold-listings"
                                    name="listingStatus"
                                    text="Sold Listings"
                                    value="sold"
                                    className="text-xs"
                                    onClick={handleChange}
                                />
                                <InputRadio
                                    id="expired-listings"
                                    name="listingStatus"
                                    text="Expired Listings"
                                    value="expired"
                                    className="text-xs"
                                    onClick={handleChange}
                                />
                            </div>
                            <p className="text-xs mt-3">
                                Sold & Expired listings for last 12 months.
                            </p>
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-3">
                                Price
                            </h3>
                            <div className="">
                                <RangeSlider
                                    min={0}
                                    max={1000}
                                    onChange={({ min, max }) =>
                                        `min = ${min}, max = ${max}`
                                    }
                                />
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Home Type
                            </h3>
                            <Dropdown />
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Square Feet
                            </h3>
                            <div className="flex items-center">
                                <div className="">
                                    <Input
                                        input={{
                                            type: "number",
                                            placeholder: "Min",
                                        }}
                                    />
                                </div>
                                <div className="text-2xl px-2 font-light">
                                    -
                                </div>
                                <div className="">
                                    <Input
                                        input={{
                                            type: "number",
                                            placeholder: "Max",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </FilterCol>

                    <FilterCol>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Listed Date
                            </h3>
                            <div className="flex items-center">
                                <div className="">
                                    <DatePicker
                                        placeholderText="Since"
                                        selected={sinceDate}
                                        onChange={(date) => setSinceDate(date)}
                                        dateFormat="MMM d, yyyy"
                                        className="w-full h-9 border border-solid border-border_color px-3 py-3 rounded focus:outline-none focus:border-primary transition_custom appearance-none text-sm pt-3"
                                    />
                                </div>
                                <div className="text-2xl px-2 font-light">
                                    -
                                </div>
                                <div className="">
                                    <DatePicker
                                        placeholderText="Until"
                                        selected={untilDate}
                                        onChange={(date) => setUntilDate(date)}
                                        dateFormat="MMM d, yyyy"
                                        className="w-full h-9 border border-solid border-border_color px-3 py-3 rounded focus:outline-none focus:border-primary transition_custom appearance-none text-sm pt-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">Beds</h3>
                            <div className="flex items-center space-x-5">
                                <Quantity />
                                <InputCheck id="beds-more" title="Or More" />
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Bathrooms
                            </h3>
                            <div className="flex items-center space-x-5">
                                <Quantity />
                                <InputCheck
                                    id="bathrooms-more"
                                    title="Or More"
                                />
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Parking
                            </h3>
                            <div className="flex items-center space-x-5">
                                <Quantity />
                                <InputCheck id="parking-more" title="Or More" />
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                House Filters
                            </h3>
                            <div className="space-y-3">
                                <div className="inline-block mr-4">
                                    <InputCheck
                                        className="text-xs"
                                        id="single-family"
                                        title="Single family"
                                    />
                                </div>
                                <div className="inline-block mr-4">
                                    <InputCheck
                                        className="text-xs"
                                        id="basement"
                                        title="Single family with a basement apartment"
                                    />
                                </div>
                                <div className="inline-block mr-4">
                                    <InputCheck
                                        className="text-xs"
                                        id="duplex"
                                        title="Duplex"
                                    />
                                </div>
                                <div className="inline-block mr-4">
                                    <InputCheck
                                        className="text-xs"
                                        id="triplex"
                                        title="Triplex"
                                    />
                                </div>
                                <div className="inline-block mr-4">
                                    <InputCheck
                                        className="text-xs"
                                        id="fourplex"
                                        title="Fourplex +"
                                    />
                                </div>
                            </div>
                        </div>
                    </FilterCol>

                    <FilterCol>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Amenities
                            </h3>
                            <div className="gap-y-3 flex flex-wrap">
                                <div className="w-1/2">
                                    <InputCheck
                                        className="text-xs"
                                        id="garage"
                                        title="Garage"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <InputCheck
                                        className="text-xs"
                                        id="open-house"
                                        title="Open House"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <InputCheck
                                        className="text-xs"
                                        id="pool"
                                        title="Pool"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <InputCheck
                                        className="text-xs"
                                        id="waterfront"
                                        title="Waterfront"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <InputCheck
                                        className="text-xs"
                                        id="fireplace"
                                        title="Fireplace"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h3 className="text-base font-medium pb-4">
                                Condo / Townhouse Filters
                            </h3>
                            <div className="space-y-5">
                                <div className="">
                                    <label className="text-xs font-medium mb-1 block">
                                        Locker
                                    </label>
                                    <Select
                                        options={[
                                            {
                                                value: "any",
                                                label: "Any",
                                            },
                                            {
                                                value: "yes",
                                                label: "Yes",
                                            },
                                            {
                                                value: "no",
                                                label: "No",
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="">
                                    <label className="text-xs font-medium mb-1 block">
                                        Max Maintenance Fees
                                    </label>
                                    <div className="relative">
                                        <span className="text-sm font-medium absolute top-1/2 left-3 -translate-y-1/2 mt-[1px]">
                                            $
                                        </span>
                                        <Input className="pl-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FilterCol>
                </div>
            </div>

            <div className="absolute p-4 lg:px-12 lg:py-6 w-full left-0 bottom-0 bg-white border-t border-solid border-border_color sm:space-x-4 md:space-x-6 sm:flex justify-between items-center">
                <div className="hidden sm:block">
                    <Button className="border-body hover:bg-body hover:text-white">
                        Reset Filters
                    </Button>
                </div>
                <div className="flex justify-between items-center space-x-4 md:space-x-6">
                    <Button className="border-body hover:bg-body hover:text-white">
                        Save Search
                    </Button>
                    <Button onClick={props.onClose} className="border-primary bg-primary text-white hover:bg-secondary hover:border-secondary">
                        Apply Filters
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default FilterModal;
