import React from "react";
import newsImage from "../../assets/news.jpg";

import { SlCalender } from "react-icons/sl";

const NewsList = (props) => {
    return (
        <div className="flex items-start mt-8 first:mt-0">
            <div className="w-28 sm:w-32 lg:w-40 pr-2">
                <a href="#">
                    <img src={newsImage} alt="News" />
                </a>
            </div>
            <div className="w-[calc(100%_-_7rem)] sm:w-[calc(100%_-_8rem)] lg:w-[calc(100%_-_10rem)] pl-2 lg:pl-3">
                <h4 className="text-base font-normal -mt-1">
                    <a href="#">
                        Income Properties Available in Alberta Starting at
                        $499,800
                    </a>
                </h4>
                <p className="flex space-x-2 items-center text-xs font-normal mt-2">
                    <SlCalender />
                    <span>Jan 20, 2023</span>
                </p>
            </div>
        </div>
    );
};

export default NewsList;
