import React from 'react';
import Image from "next/image";

const CertificationDisplay = ({title, issuer, date}) => (
    <div className={"bg-[#1f333b] rounded-box w-full p-2 flex flex-row items-center space-x-2"}>
        <div>
            <Image src="/images/Trophy.svg" alt="Skill" width={60} height={60}/>
        </div>
        <div className={"flex flex-col"}>
            <span className={"text-white"}>{title}</span>
            <span>{issuer}</span>
            <span className={"italic"}>{date}</span>
        </div>
    </div>
);

export default CertificationDisplay;
