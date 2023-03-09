import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

const Quantity = () => {
    const [num, setNum] = useState(0);

    return (
        <div className="flex space-x-3 items-center">
            <button
                className="w-5 h-5 border flex items-center justify-center rounded-full border-solid border-border_color hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ease-linear"
                onClick={() => {
                    if (num > 0) {
                        setNum(num - 1);
                    }
                }}
            >
                <BiMinus className="text-xs" />
            </button>
            <div className="text-sm font-medium">{num}</div>
            <button
                className="w-5 h-5 border flex items-center justify-center rounded-full border-solid border-border_color hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 ease-linear"
                onClick={() => setNum(num + 1)}
            >
                <BiPlus className="text-xs" />
            </button>
        </div>
    );
};

export default Quantity;
