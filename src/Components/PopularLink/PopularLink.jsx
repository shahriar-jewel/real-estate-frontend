import React, { Fragment, useState } from "react";
import { popularLinks } from "../../Data/popularLinks";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const PopularLink = (props) => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    };

    return (
        <Fragment>
            <div className="pb-8 hidden lg:block">
                <div className="container">
                    <div className="grid grid-cols-4 border-t border-b border-border_color py-6 gap-7">
                        {popularLinks.map((item, index) => (
                            <div key={index} className="">
                                <h4 className="text-lg font-bold mb-2">
                                    {item.title}
                                </h4>
                                <ul>
                                    {item.links.map((link, index) => (
                                        <li key={link.id}>
                                            <a
                                                className="leading-8 text-sm xl:text-base font-normal text-body block hover:underline transition_custom"
                                                href={link.url}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-solid border-border_color lg:hidden">
                {popularLinks.map((item, i) => (
                    <div
                        key={i}
                        className="border-b border-solid border-border_color py-[10px] px-[20px]"
                    >
                        <div className="container">
                            <div
                                className="py-8 px-4 cursor-pointer relative"
                                onClick={() => toggle(i)}
                            >
                                <h4 className="text-base font-bold">
                                    {item.title}
                                </h4>
                                <MdOutlineKeyboardArrowDown
                                    className={`absolute top-1/2 -translate-y-1/2 right-4 text-2xl transition_custom ${
                                        selected === i ? "rotate-180" : ""
                                    } `}
                                />
                            </div>
                            <div
                                className={`transition_custom overflow-hidden ${
                                    selected === i
                                        ? "h-auto max-h-[999px]"
                                        : "max-h-0"
                                }`}
                            >
                                <ul className="px-4 pt-2 pb-4">
                                    {item.links.map((link, index) => (
                                        <li key={link.id}>
                                            <a
                                                className="leading-8 text-sm xl:text-base font-normal text-body block hover:underline transition_custom"
                                                href={link.url}
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default PopularLink;
