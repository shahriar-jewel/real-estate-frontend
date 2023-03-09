import React from "react";
import SearchForm from "../Search/SearchForm";
import brushStroke1 from "../../assets/brush-stroke-1.png";
import brushStroke2 from "../../assets/brush-stroke-2.png";

const Banner = (props) => {
    return (
        <div className="w-full relative bg-body pt-20">
            <div className="">
                <div className="absolute -top-44 right-0 rotate-[135deg] opacity-[0.14] z-20 hidden md:block">
                    <img src={brushStroke1} alt="" />
                </div>
                <div className="absolute -top-80 -left-80 rotate-[135deg] opacity-[0.14] z-20 hidden md:block">
                    <img src={brushStroke2} alt="" />
                </div>
                <div className="absolute top-52 -left-80 rotate-[135deg] opacity-[0.14] z-20 hidden md:block">
                    <img src={brushStroke2} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="lg:w-8/12 mx-auto pb-[2.5rem]">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-[2.1em] font-frank text-white">
                            Find your home with us
                        </h2>
                        <p className="text-white font-normal mt-3">
                            From as low as $10 per day with limited time offer
                            discounts.
                        </p>
                    </div>

                    <div className="mt-8 w-[93%] m-auto">
                        <SearchForm onFilterModal={props.onFilterModal} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
