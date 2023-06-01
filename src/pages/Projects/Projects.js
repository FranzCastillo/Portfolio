import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import CalcImg from '../../assets/images/calc.png';
import ProjectCard from "./ProjectCard/ProjectCard";

import './Projects.scss';

const Projects = () => {
    return (
        <Container
            className={"projects-container"}
            id={"projects"}
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: 'rgba(227, 132, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '10px',
                marginTop: '10px',
                marginBottom: '10px',
            }}
        >
            <div className={"projects"}>
                <Typography
                    className={"title"}
                    variant="h4"
                    component="h1"
                    gutterBottom
                >
                    Proyectos
                </Typography>
                <div className={"projects-list"}>
                    <ProjectCard
                        title={"Calculadora en Línea"}
                        description={"Calculadora en línea con las operaciones básicas"}
                        image={CalcImg}
                        githubLink={"https://github.com/FranzCastillo/STW-Lab9-Calculadora"}
                        demoLink={"https://stw-lab9.web.app"}
                    />
                    <ProjectCard
                        title={"Calculadora en Línea"}
                        description={"Calculadora en línea con las operaciones básicas"}
                        image={CalcImg}
                        githubLink={"https://github.com/FranzCastillo/STW-Lab9-Calculadora"}
                        demoLink={"https://stw-lab9.web.app"}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Projects;