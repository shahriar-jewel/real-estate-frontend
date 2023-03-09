import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { useInView } from 'react-intersection-observer';
import coming_soon_image from "../../assets/coming-soon-image.png";

const PropertiesItems = (props) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: true,
        fallbackInView: true,
        // delay: 1000
    });
    return (
        <div ref={ref} className="">

            {inView ? (<div className="relative">
                <img
                    className="rounded-t h-60 w-full object-cover object-center"
                    src={props?.propertiesImage ? props.propertiesImage : coming_soon_image}
                    alt={props?.address}
                />
                {props.listingFor === 'For Sale' && (
                    <>
                        <span className="bg-[#4695c4] px-3 rounded-3xl text-white text-[11px] font-bold absolute bottom-3 left-3 block h-6 leading-[1.65rem]">
                            {props.listingFor}
                        </span>
                        <button className="absolute bottom-3 right-3 text-2xl text-white hover:animate-zoomIn ">
                            <BsFillHeartFill />
                        </button>
                    </>
                )}
                {props.listingFor === 'Sold' && (
                    <span className="bg-[#df6541] px-3 rounded-3xl text-white text-[11px] font-bold absolute bottom-3 left-3 block h-6 leading-[1.65rem]">
                        {props.listingFor}
                    </span>
                )}
            </div>) : <div className="rounded-t h-60 w-full object-cover object-center relative bg-[#e5e7eb] animate-pulse"></div>}

            <div className="p-[0.8rem] border border-solid border-[#ececec] border-t-0 rounded-b space-y-5">
                <div className="flex justify-between items-end">
                    <p className="text-2xl font-normal">{props.price}</p>
                    <span className="text-xs text-body font-normal">
                        {props.postDate}
                    </span>
                </div>
                <div className="">
                    <a
                        className="text-heading text-[15px] font-normal hover:underline transition_custom"
                        href=""
                    >
                        {props.address}
                    </a>
                </div>
                <div className="">
                    <ul className="flex space-x-3">
                        <li className="flex items-center text-xs text-body font-normal space-x-1">
                            <BiBed size={19} /> <span>{props.bed}</span>
                        </li>
                        <li className="flex items-center text-xs text-body font-normal space-x-1">
                            <BiBath size={19} />
                            <span>{props.bath}</span>
                        </li>
                        <li className="flex items-center text-xs text-body font-normal space-x-1">
                            <MdApartment size={19} /> <span>{props.sqft}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PropertiesItems;
