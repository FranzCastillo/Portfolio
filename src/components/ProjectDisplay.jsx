import React from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";

const ProjectDisplay = ({title, description, tags, repo, image}) => {
    const t = useTranslations("ProjectCard");

    return (
        <div className="card w-99 bg-base-100 shadow-xl">
            <figure>
                <Image src={image} alt="Project Preview" width={400} height={300} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    {tags && tags.map((tag, index) => (
                        <div key={index} className="badge badge-outline">{tag}</div>
                    ))}
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDisplay;
