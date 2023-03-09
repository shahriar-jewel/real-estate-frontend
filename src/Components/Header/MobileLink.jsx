import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../../Data/Navbar";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";

const MobileLink = (props) => {
    const [subMenu, setSubMenu] = useState("");

    return (
        <ul className="">
            {NavbarLinks.map((nav, index) => (
                <li className="font-medium relative text-body" key={nav.id}>
                    <NavLink
                        className="block text-base font-semibold p-3 border-b border-solid border-body/10"
                        to={nav.url}
                        onClick={props.onClose}
                    >
                        <span>{nav.name}</span>
                    </NavLink>
                    {nav.subMenu ? (
                        <span
                            className="absolute top-0 p-3 right-0"
                            onClick={() => setSubMenu(nav.name)}
                        >
                            {subMenu === nav.name ? (
                                <MdRemove className="text-2xl" />
                            ) : (
                                <MdAdd className="text-2xl" />
                            )}
                        </span>
                    ) : (
                        ""
                    )}

                    {nav.subMenu ? (
                        <ul
                            className={`sub-item ${
                                subMenu === nav.name ? "block" : "hidden"
                            }`}
                        >
                            {nav.subMenu &&
                                nav.subMenu.map((subItem, index) => (
                                    <li key={subItem.id}>
                                        <NavLink
                                            className="pl-7 text-sm font-semibold block p-3 border-b border-solid border-body/10"
                                            to={subItem.url}
                                            onClick={props.onClose}
                                        >
                                            {subItem.name}
                                        </NavLink>
                                    </li>
                                ))}
                        </ul>
                    ) : (
                        ""
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MobileLink;
