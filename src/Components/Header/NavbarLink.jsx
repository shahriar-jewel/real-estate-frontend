import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarLinks } from "../../Data/Navbar";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavbarLink = () => {
    return (
        <ul className="flex">
            {NavbarLinks.map((nav, index) => (
                <li
                    className=" font-medium py-6 px-3 text-white transition-all ease-linear duration-300 relative group"
                    key={nav.id}
                >
                    <NavLink
                        className="transition-all ease-linear duration-300 flex items-center"
                        to={nav.url}
                    >
                        <span>{nav.name}</span>
                        {nav.subMenu ? (
                            <MdKeyboardArrowDown className="text-2xl" />
                        ) : (
                            ""
                        )}
                    </NavLink>

                    {nav.subMenu ? (
                        <ul className="absolute py-4 shadow-lg bg-white min-w-[210px] w-full  top-[115%] left-0 opacity-0 invisible transition-all ease-linear duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:top-full hover:opacity-100 hover:visible">
                            {nav.subMenu &&
                                nav.subMenu.map((subItem, index) => (
                                    <li
                                        className="text-body relative flex justify-between"
                                        key={subItem.id}
                                    >
                                        <NavLink
                                            className="block px-5 py-1 text-sm font-semibold hover:pl-7 transition-all ease-linear duration-300 relative after:content-[''] after:w-[3px] after:h-full after:absolute after:top-0 after:left-0 after:bg-primary after:transition-all after:ease-linear after:duration-300 after:opacity-0 hover:after:opacity-100"
                                            to={subItem.url}
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

export default NavbarLink;
