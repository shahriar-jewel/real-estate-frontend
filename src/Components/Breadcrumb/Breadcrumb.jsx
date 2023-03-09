import React from "react";

import { MdOutlineChevronRight } from "react-icons/md";

const Breadcrumb = (props) => {
    return (
        <div className="pt-20 bg-body">
            <div className="container">
                <ul className="py-1 flex">
                    <li className="font-bold text-sm text-white flex items-center">
                        <a
                            className="transition_custom hover:underline"
                            href="#"
                        >
                            Canada
                        </a>
                        <MdOutlineChevronRight className="text-xl leading-none" />
                    </li>
                    <li className="font-bold text-sm text-white flex">
                        <a
                            className="transition_custom hover:underline"
                            href="#"
                        >
                            Canada
                        </a>
                        <MdOutlineChevronRight className="text-xl leading-none" />
                    </li>
                    <li className="font-bold text-sm text-white flex">
                        <a
                            className="transition_custom hover:underline"
                            href="#"
                        >
                            Canada
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Breadcrumb;
