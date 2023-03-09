import React, { Fragment, useState, useContext } from "react";

// Import components
import SearchForm from "../Components/Search/SearchForm";
import SearchBar from "../Components/Search/SearchBar";
import { GlobalState } from "../context/GlobalState";

const RealEstate = (props) => {
    const state = useContext(GlobalState)
    const [property, setProperty] = state.propertyProvider.property;
    const [callback, setCallback] = state.propertyProvider.callback;
    const [loading, setLoading] = useState(false);
    return (
        <main className="mt-[60px] sm:mt-[72px]">
            <Fragment>
                <div className="hidden lg:block">
                    <SearchBar property={property} onFilterModal={props.onFilterModal} />
                </div>
                <div className="lg:hidden">
                    <SearchForm onFilterModal={props.onFilterModal} />
                </div>
            </Fragment>
        </main>
    );
};

export default RealEstate;