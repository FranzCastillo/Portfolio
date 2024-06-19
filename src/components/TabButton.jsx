import React from "react";

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-white border-purple-500 border-b bg-[#1f333b] hover:bg-[#1f333b]"
        : "text-[#A1AFAC]";

    return (
        <button onClick={selectTab} className={"flex-1"}>
            <p className={`font-semibold hover:text-white mr-3 md:mr-0 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;