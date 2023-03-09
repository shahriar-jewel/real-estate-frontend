import React from "react";
import googlePlay from "../../assets/googleplay.svg";
import appleStore from "../../assets/appleappstore.svg";
import expRealty from "../../assets/exp-realty-logo.svg";
import bbbLogo from "../../assets/bbb-logo.png";

import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
    return (
        <div className="py-10 bg-body">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                    <div className="text-center lg:text-left">
                        <p className="text-white text-[11px]">
                            250 The Esplanade Suite 408 Toronto, ON M5A 4J5
                        </p>
                        <ul className="flex items-center flex-wrap justify-center lg:justify-start">
                            <li>
                                <a
                                    className="text-white text-[11px] after:content-['|'] after:mx-2 hover:underline transition_custom"
                                    href="#"
                                >
                                    Terms of Use
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white text-[11px] after:content-['|'] after:mx-2 hover:underline transition_custom"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white text-[11px] after:content-['|'] after:mx-2 hover:underline transition_custom"
                                    href="#"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white text-[11px] after:content-['|'] after:mx-2 hover:underline transition_custom"
                                    href="#"
                                >
                                    Sitemap
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-white text-[11px] after:content-['|']"
                                    href="#"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                        <ul className="flex space-x-4 flex-wrap mt-2 items-center justify-center lg:justify-start">
                            <li>
                                <a href="#">
                                    <img src={googlePlay} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={appleStore} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="flex space-x-2 items-center justify-center">
                            <p className="text-base text-[#dbd7d6] font-semibold">
                                Owned by
                            </p>
                            <a href="#">
                                <img src={expRealty} alt="" />
                            </a>
                        </div>
                        <p className="text-[11px] text-[#dbd7d6] text-center leading-normal mt-4">
                            Zoocasa © 2007–2023. The trademarks MLS®, Multiple
                            Listing Service® and the associated logos are owned
                            by The Canadian Real Estate Association (CREA) and
                            identify the quality of services provided by real
                            estate professionals who are members of CREA.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end space-x-6">
                        <div className="flex-shrink text-right">
                            <p className="text-xl font-frank font-normal text-white">
                                Stay Connected
                            </p>
                            <ul className="flex space-x-4 justify-end mt-4">
                                <li>
                                    <a
                                        href="#"
                                        className="w-7 h-7 leading-7 rounded-full bg-white text-center block"
                                    >
                                        <TiSocialFacebook className="inline-block" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="w-7 h-7 leading-7 rounded-full bg-white text-center block"
                                    >
                                        <TiSocialTwitter className="inline-block" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="w-7 h-7 leading-7 rounded-full bg-white text-center block"
                                    >
                                        <TiSocialInstagram className="inline-block" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="w-7 h-7 leading-7 rounded-full bg-white text-center block"
                                    >
                                        <TiSocialLinkedin className="inline-block" />
                                    </a>
                                </li>
                            </ul>
                            <ul className="flex space-x-4 justify-end mt-2 flex-wrap">
                                <li>
                                    <a
                                        className="text-white text-xs flex space-x-2 items-center mt-2"
                                        href="tel:18446834663"
                                    >
                                        <TbPhoneCall className="text-xl" />
                                        <span>1-844-683-4663</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-white text-xs flex space-x-2 items-center mt-2"
                                        href="mailto:info@zoocasa.com"
                                    >
                                        <MdOutlineMail className="text-xl" />
                                        <span>info@zoocasa.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0">
                            <a href="#">
                                <img src={bbbLogo} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
