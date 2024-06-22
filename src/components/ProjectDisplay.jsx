import React from 'react';
import Image from "next/image";

const ProjectDisplay = ({title, description, tags, repo, image, center=true}) => {
    return (
        <div className="bg-[#1f333b] shadow-xl flex flex-col rounded-box w-full max-w-sm">
            <div className="relative w-full h-56">
                <Image src={image} layout="fill" objectFit="cover" objectPosition={center ? "" : "top left"} alt={title} className={"rounded-t-box"}/>
            </div>
            <div className={"p-4"}>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-[#A1AFAC] mb-2">{description}</p>
                <div className="flex flex-row flex-wrap gap-2">
                    {tags && tags.map((tag, index) => (
                        <span key={index} className="badge badge-outline">{tag}</span>
                    ))}
                </div>
                <div className={"items-center flex flex-row"}>
                    <button
                        className="btn mt-4 w-full bg-gradient-to-br from-[#5c5ee6] via-[#7d1cd6] to-[#5c5ee6] hover:from-[#7d1cd6] hover:to-[#7d1cd6]">
                        <Image src={"/images/GitHub.png"} width={24} height={24} alt={"GitHub"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;
