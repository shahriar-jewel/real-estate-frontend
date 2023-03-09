import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./rangeSlider.scss";

const RangeSlider = ({ min, max, onChange }) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return (
        <div className="relative">
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(
                        Number(event.target.value),
                        maxVal - 1
                    );
                    setMinVal(value);
                    minValRef.current = value;
                }}
                className="thumb z-[3] pointer-events-none absolute h-0 w-full outline-none appearance-none"
                style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(
                        Number(event.target.value),
                        minVal + 1
                    );
                    setMaxVal(value);
                    maxValRef.current = value;
                }}
                className="thumb z-[4] pointer-events-none absolute h-0 w-full outline-none appearance-none"
            />

            <div className="relative w-full">
                <div className="absolute h-2 rounded bg-border_color z-[1] w-full" />
                <div
                    ref={range}
                    className="absolute h-2 rounded bg-primary z-[2]"
                />

                <div className="flex justify-between relative items-center pt-4">
                    <div className="text-sm font-medium">${minVal}</div>
                    <div className="text-sm font-medium absolute top-4 left-1/2 -translate-x-1/2">
                        1M
                    </div>
                    <div className="text-sm font-medium">${maxVal}</div>
                </div>
            </div>
        </div>
    );
};

RangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default RangeSlider;
