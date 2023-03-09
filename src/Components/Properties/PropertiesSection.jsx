import React, { useEffect, useState, useRef } from "react";
import { keywords } from "../../Data/keywords";
import PropertiesItems from "./PropertiesItems";
import CardBlock from "../UI/CardBlock/CardBlock";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdStarRate } from "react-icons/md";

import propertiesImage from "../../assets/properties-items.png";
import propertiesImage1 from "../../assets/property.png";
import coming_soon_image from "../../assets/coming-soon-image.png";
import propertiesImage3 from "../../assets/property3.png";
import hiringImage from "../../assets/hiring.png";
import NewsList from "../News/NewsList";
import ButtonLink from "../UI/Button/ButtonLink";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./PropertiesSection.scss";

// import data from api
import { getProperties, addedAt } from "../../api";

const PropertiesSection = (props) => {
    const [saleProperties, setSaleProperties] = useState([]);
    const [soldProperties, setSoldProperties] = useState([]);
    const [saleLoading, setSaleLoading] = useState(false);
    const [soldLoading, setSoldLoading] = useState(false);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current) {
            setSaleLoading(true);
            setSoldLoading(true);
            getProperties('sale', 10).then((c) => {
                setSaleProperties(c.data.data.properties);
                setSaleLoading(false);
            }).catch((err) => {
                setSaleProperties([]);
                console.log("error", err);
            });
            getProperties('sold', 10).then((c) => {
                setSoldProperties(c.data.data.properties);
                setSoldLoading(false);
            }).catch((err) => {
                setSoldProperties([]);
                console.log("error", err);
            });
        } else {
            isMounted.current = true;
        }
    }, []);

    const swiperSlide = (properties, loading, listingFor) => {
        return properties.length > 0 && !loading ?
            properties.map(item =>
                <SwiperSlide key={item._id}>
                    <PropertiesItems
                        propertiesImage={`${import.meta.env.VITE_IMAGE_BASE}/${item.imageUrl}`}
                        listingFor={`${listingFor}`}
                        price={`$${(item.price).toLocaleString()}`}
                        postDate={addedAt(item.soldAt?item.soldAt : item.addedAt, new Date())}
                        address={`${item.unitNumber ? item.unitNumber + ' - ' : ''}${item.streetNumber} ${item.streetName}`}
                        bed={`${item.bedrooms} Bed`}
                        bath={`${item.bathrooms} Bath`}
                        sqft={`${item.squareFootage?.min ? item.squareFootage?.min + ' - ' + item.squareFootage?.max + ' sqft' : 'N/A sqft'}`}
                    />
                </SwiperSlide>
            ) : <SwiperSlide>
                <PropertiesItems
                    propertiesImage={coming_soon_image}
                    listingFor={`${listingFor}`}
                    // sold="Sold"
                    price="$X"
                    postDate="0 minutes"
                    address="1403 - 17 Dundonald St"
                    bed="0 Bed"
                    bath="0 Bath"
                    sqft="N/A sqft"
                />
            </SwiperSlide>
    }

    return (
        <div className=" py-10 bg-[#fcfcfc]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
                    <div className="">
                        <CardBlock
                            title="Homes for Sale"
                            buttonText="Map View"
                            subTitle="Current Location: Toronto, ON"
                        >
                            <Swiper
                                className="group"
                                // install Swiper modules
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                // speed={410}
                                navigation={{
                                    prevEl: ".navigationPrev",
                                    nextEl: ".navigationNext",
                                    clickable: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                {swiperSlide(saleProperties, saleLoading, 'For Sale')}

                                <div className="w-12 h-12 bg-black/70 flex justify-center items-center text-2xl rounded-full border-2 border-solid border-white text-white absolute top-[calc(50%_-_4.5em)] z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition_custom left-2 navigationPrev">
                                    <MdArrowBackIosNew />
                                </div>
                                <div className="w-12 h-12 bg-black/70 flex justify-center items-center text-2xl rounded-full border-2 border-solid border-white text-white absolute top-[calc(50%_-_4.5em)] z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition_custom right-2 navigationNext">
                                    <MdArrowForwardIos />
                                </div>
                            </Swiper>
                        </CardBlock>
                    </div>
                    <div className="">
                        <CardBlock
                            title="Sold Prices"
                            buttonText="More Data"
                            subTitle="Search Sold Data from 2003 - 2023"
                        >
                            <Swiper
                                className="group"
                                // install Swiper modules
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                navigation={{
                                    prevEl: ".navigationPrev",
                                    nextEl: ".navigationNext",
                                    clickable: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                {swiperSlide(soldProperties, soldLoading, 'Sold')}

                                <div className="w-12 h-12 bg-black/70 flex justify-center items-center text-2xl rounded-full border-2 border-solid border-white text-white absolute top-[calc(50%_-_4.5em)] z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition_custom left-2 navigationPrev">
                                    <MdArrowBackIosNew />
                                </div>
                                <div className="w-12 h-12 bg-black/70 flex justify-center items-center text-2xl rounded-full border-2 border-solid border-white text-white absolute top-[calc(50%_-_4.5em)] z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition_custom right-2 navigationNext">
                                    <MdArrowForwardIos />
                                </div>
                            </Swiper>
                        </CardBlock>
                    </div>
                    <div className="">
                        <CardBlock
                            title="Market Insights"
                            buttonText="More News"
                            subTitle="Read the latest real estate news and reports"
                        >
                            <NewsList />
                            <NewsList />
                            <NewsList />
                        </CardBlock>
                    </div>
                    <div className="">
                        <div className="p-6 border border-solid border-[#ececec] bg-white">
                            <div className="flex justify-between items-center">
                                <h2>
                                    <a
                                        className="text-2xl lg:text-[26px] text-heading font-frank hover:underline hover:text-body transition_custom"
                                        href="#"
                                    >
                                        Google Reviews
                                    </a>
                                </h2>
                                <ButtonLink className="border-body text-heading hover:bg-body hover:text-white">
                                    <span className="">Rate us on Google</span>
                                </ButtonLink>
                            </div>
                            <div className="">
                                <div className="flex space-x-2 items-center mt-6">
                                    <p className="text-[2.75rem] leading-tight font-normal">
                                        4.8
                                    </p>
                                    <div className="relative">
                                        <div
                                            className="flex text-primary text-[2.75rem] absolute top-0
                                    left-0 invisible z-[1]"
                                            style={{
                                                width: "90%",
                                            }}
                                        >
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                        <div className="flex text-[#dbd7d6] text-[2.75rem]">
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                            <span>★</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-5 mt-4">
                                    <ButtonLink className="bg-body border-body text-white lg:h-12 lg:leading-[2rem] px-4 hover:text-body hover:bg-white">
                                        Testimonials
                                    </ButtonLink>
                                    <ButtonLink className="bg-body border-body text-white lg:h-12 lg:leading-[2rem] px-4 hover:text-body hover:bg-white">
                                        Meet our Agents
                                    </ButtonLink>
                                </div>
                            </div>
                        </div>

                        <div className="border border-solid border-[#ececec] bg-white p-2 mt-4">
                            <a className="block" href="#">
                                <img
                                    className="w-full"
                                    src={hiringImage}
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <CardBlock
                            title="Featured Homes"
                            buttonText="More Listings"
                        >
                            <Swiper
                                className="group mt-6"
                                // install Swiper modules
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                navigation={{
                                    prevEl: ".navigationPrev",
                                    nextEl: ".navigationNext",
                                    clickable: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                <SwiperSlide>
                                    <PropertiesItems
                                        propertiesImage={propertiesImage}
                                        forSale="For Sale"
                                        // sold="Sold"
                                        price="$628,000"
                                        postDate="53 minutes"
                                        address="1403 - 17 Dundonald St"
                                        bed="1Bed"
                                        bath="1Bath"
                                        sqft="500-599sqft"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PropertiesItems
                                        propertiesImage={propertiesImage}
                                        forSale="For Sale"
                                        // sold="Sold"
                                        price="$628,000"
                                        postDate="53 minutes"
                                        address="1403 - 17 Dundonald St"
                                        bed="1Bed"
                                        bath="1Bath"
                                        sqft="500-599sqft"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <PropertiesItems
                                        propertiesImage={propertiesImage}
                                        forSale="For Sale"
                                        // sold="Sold"
                                        price="$628,000"
                                        postDate="53 minutes"
                                        address="1403 - 17 Dundonald St"
                                        bed="1Bed"
                                        bath="1Bath"
                                        sqft="500-599sqft"
                                    />
                                </SwiperSlide>

                                <div className="w-12 h-12 bg-black/70 flex justify-center items-center text-2xl rounded-full border-2 border-solid border-white text-white absolute top-[calc(50%_-_4.5em)] z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition_custom left-2 navigationPrev">
                                    <MdArrowBackIosNew />
                                </div>
                                <div className="w-12 h-12 bg-black/70 flex justify-center items-center text-2xl rounded-full border-2 border-solid border-white text-white absolute top-[calc(50%_-_4.5em)] z-10 cursor-pointer opacity-0 group-hover:opacity-100 transition_custom right-2 navigationNext">
                                    <MdArrowForwardIos />
                                </div>
                            </Swiper>
                        </CardBlock>
                    </div>
                    <div className="">
                        <CardBlock title="Find by Keyword">
                            <div className="flex flex-wrap gap-2 mt-7">
                                {keywords.map((keyword, index) => (
                                    <a
                                        key={keyword.id}
                                        href={keyword.url}
                                        className="text-[13px] px-[0.6rem] border border-solid border-[#efefef] bg-[#efefef] text-body font-normal block h-8 leading-8"
                                    >
                                        {keyword.name}
                                    </a>
                                ))}
                            </div>
                        </CardBlock>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesSection;
