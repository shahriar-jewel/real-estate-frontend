import React from "react";

const FilterCol = (props) => {
    return (
        <div
            className={`space-y-8 relative w-full md:w-1/3 md:after:content-[''] md:after:w-[1px] md:after:h-full md:after:bg-border_color md:after:top-0 md:after:-left-4 lg:after:-left-7 md:after:absolute md:after:first:hidden`}
        >
            {props.children}
        </div>
    );
};

export default FilterCol;
