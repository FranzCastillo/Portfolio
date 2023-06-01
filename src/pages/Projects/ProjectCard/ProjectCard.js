import * as React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./ProjectCard.scss";

export default function ProjectCard({
  title, description, image, githubLink, demoLink,
}) {
  return (
    <dix className="project-card">
      <a href={demoLink || githubLink} className="overlay">
        <img src={image} alt={title} />
      </a>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="links">
          <a href={githubLink}>
            GitHub
            <OpenInNewIcon
              sx={{
                fontSize: "1rem",
                marginLeft: "5px",
              }}
            />
          </a>
          {demoLink ? (
            <a href={demoLink}>
              Demo
              <OpenInNewIcon
                sx={{
                  fontSize: "1rem",
                  marginLeft: "5px",
                }}
              />
            </a>
          ) : null}
        </div>
      </div>
    </dix>
  );
}
