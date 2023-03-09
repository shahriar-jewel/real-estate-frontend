import React from "react";
import { FiMap } from "react-icons/fi";
import ButtonLink from "../Button/ButtonLink";

const CardBlock = (props) => {
    return (
        <div className="min-h-[34.3rem] p-5 lg:p-6 border border-solid border-[#ececec] bg-white">
            <div className="pb-2">
                <div className="flex justify-between items-center">
                    <h2>
                        <a
                            className="text-2xl lg:text-[26px] text-heading font-frank hover:underline hover:text-body transition_custom"
                            href="#"
                        >
                            {props.title}
                        </a>
                    </h2>
                    {props.buttonText && (
                        <ButtonLink className="border-body text-heading hover:bg-body hover:text-white">
                            <FiMap className="inline-block mr-2" />
                            <span className="">{props.buttonText}</span>
                        </ButtonLink>
                    )}
                </div>
                {props.subTitle && (
                    <p className="text-xs my-2">{props.subTitle}</p>
                )}
            </div>
            <div className="">{props.children}</div>
        </div>
    );
};

export default CardBlock;
