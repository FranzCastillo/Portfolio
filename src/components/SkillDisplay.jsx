import React from 'react';
import Image from "next/image";

const SkillDisplay = ({name, imgPath}) => (
    <React.Fragment>
        <div className="flex flex-col items-center bg-[#1f333b] rounded-box p-2 hover:bg-[#2b4758] transition duration-250 ease-in-out">
            <Image src={imgPath} width={75} height={75} className={"rounded-box"} alt={"Skill"}/>
            <p className="text-white text-sm mt-2">{name}</p>
        </div>
    </React.Fragment>
);

export default SkillDisplay;
