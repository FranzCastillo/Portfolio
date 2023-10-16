import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CalcImg from '../../assets/images/calc.png';
import Bliss from '../../assets/images/bliss.png';
import Medium from '../../assets/images/medium.png';
import Memory from '../../assets/images/memory.png';
import BB8 from '../../assets/images/bb8.png';
import Portfolio from '../../assets/images/portfolio.png';
import Intercambios from '../../assets/images/intercambios.png';
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
                        title={"Intercambios UVG"}
                        description={"Desarrollo de base de datos y plataforma administrativa para los intercambios de la Universidad del Valle de Guatemala."}
                        image={Intercambios}
                        githubLink={"https://github.com/FranzCastillo/UVG-Intercambios"}
                        demoLink={"https://uvg-intercambios.vercel.app"}
                    />
                    <ProjectCard
                        title={"Bliss"}
                        description={"Desarrollo de la página de venta en línea y administración para todas aquellas personas involucradas con la empresa, desde los clientes hasta los encargados."}
                        image={Bliss}
                        githubLink={"https://github.com/FranzCastillo/Bliss"}
                        demoLink={"https://bliss-gt.web.app"}
                    />
                    <ProjectCard
                        title={"Medium Clone"}
                        description={"Un clon de la página de Medium para demostrar habilidades de CSS"}
                        image={Medium}
                        githubLink={"https://github.com/FranzCastillo/STW-Proyecto1-Medium-Website"}
                        demoLink={"https://medium-replica-five.vercel.app"}
                    />
                    <ProjectCard
                        title={"DS Memory Game"}
                        description={"Un juego de memoria funcional inspirado en Memory Match de Super Mario Bros DS"}
                        image={Memory}
                        githubLink={"https://github.com/FranzCastillo/STW-Lab8-React-Memoria"}
                        demoLink={"https://stw-lab8.web.app"}
                    />
                    <ProjectCard
                        title={"BB-8 CSS Art"}
                        description={"Arte hecho con CSS con referencia a BB8, un personaje de Star Wars"}
                        image={BB8}
                        githubLink={"https://github.com/FranzCastillo/Portfolio"}
                    />
                    <ProjectCard
                        title={"Portafolio"}
                        description={"Este mismo portafolio es un proyecto para demostrar conocimiento de tecnologías web"}
                        image={Portfolio}
                        githubLink={"https://github.com/FranzCastillo/Portfolio"}
                        demoLink={"https://portfolio-franzcastillo.vercel.app/"}
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