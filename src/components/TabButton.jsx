import React from "react";

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-white border-[#ce82ff] border-b bg-[#1f333b] hover:bg-[#1f333b]"
        : "text-[#A1AFAC] border-b border-[#1f333b] hover:bg-[#1f333b] hover:text-white";

    return (
        <button onClick={selectTab} className={"flex-1"}>
            <p className={`font-semibold hover:text-white mr-3 md:mr-0 ${buttonClasses}`}>
                {children}
            </p>
        </button>
    );
};

export default TabButton;
