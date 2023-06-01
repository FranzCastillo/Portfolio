import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CalcImg from '../../assets/images/calc.png';
import Bliss from '../../assets/images/bliss.png';
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
                        title={"Bliss"}
                        description={"Desarrollo de la página de venta en línea y administración para todas aquellas personas involucradas con la empresa, desde los clientes hasta los encargados."}
                        image={Bliss}
                        githubLink={"https://github.com/FranzCastillo/Bliss"}
                        demoLink={"https://bliss-gt.web.app"}
                    />
                </div>
            </div>
        </Container>
    );
}

export default Projects;