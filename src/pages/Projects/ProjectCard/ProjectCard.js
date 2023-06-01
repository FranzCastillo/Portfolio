import * as React from 'react';
import './ProjectCard.scss';

export default function ProjectCard({title, description, image, githubLink, demoLink}) {
    return (
        <dix className={"project-card"}>
            <img src={image} alt={title} />
            <div className={"content"}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={"links"}>
                    <a href={githubLink}>
                        GitHub
                    </a>
                    {demoLink? (
                        <a href={demoLink}>
                            Demo
                        </a>
                    ) : null}
                </div>
            </div>
        </dix>
    );
}