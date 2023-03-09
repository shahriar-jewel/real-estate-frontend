import React, { useState } from "react";

const TabView = (props) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activateTab = (index) => {
        setActiveTabIndex(index);
    };

    return (
        <div className="tab-body">
            {Object.keys(props.tabs).length === 0 ? (
                <div className="text-white text-2xl font-semibold text-center">
                    No Tab
                </div>
            ) : (
                <>
                    <ul className="flex justify-center space-x-3">
                        {props.tabs.map((tab, index) => (
                            <li key={index}>
                                <label
                                    className={`block cursor-pointer px-6 py-2 transition_custom rounded-md text-base font-bold hover:bg-primary hover:text-white relative max-w-[200px] w-full z-[1] after:content-[''] after:w-4 after:h-4 after:bg-primary after:absolute after:bottom-[-7px] after:z-[-1] after:left-1/2 after:rotate-45 after:-translate-x-1/2  after:transition-all after:ease-linear after:duration-300 ${
                                        index === activeTabIndex
                                            ? "bg-primary text-white after:opacity-100 after:visible"
                                            : "bg-white text-body after:opacity-0 after:invisible"
                                    }`}
                                    onClick={() => activateTab(index)}
                                >
                                    {tab.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                    <div className="tab-content ">
                        {props.tabs[activeTabIndex].content}
                    </div>
                </>
            )}
        </div>
    );
};

export default TabView;
