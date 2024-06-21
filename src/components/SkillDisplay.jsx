import React from 'react';
import Image from "next/image";

const SkillDisplay = ({name, imgPath}) => (
    <div className="flex flex-col items-center bg-[#1f333b] rounded-box p-2 hover:bg-[#2b4758] transition duration-250 ease-in-out">
        <div className="relative w-20 h-20 rounded-box overflow-hidden">
            <Image src={imgPath} layout="fill" alt={"Skill"} objectFit="contain"/>
        </div>
        <p className="text-white text-sm mt-2">{name}</p>
    </div>
);

export default SkillDisplay;
