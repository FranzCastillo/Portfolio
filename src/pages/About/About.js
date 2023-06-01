import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AboutTabs from "../../components/AboutTabs/AboutTabs";
import "./About.scss";

const About = () => {
    return (
        <Container
            className={"about"}
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: 'rgba(96, 40, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                borderRadius: '10px',
            }}
        >
            <Typography
                className={"title"}
                variant="h4"
                component="h1"
                gutterBottom>
                Conoce un poco más sobre mí.
            </Typography>
            <Typography
                className={"title"}
                variant="h6"
                component="h3"
                gutterBottom
                sx={{
                    textAlign: 'center',
                }}
            >
                <div>Soy un estudiante de <span id={"about-career"}>Ingeniería en Ciencias de la Computación y Tecnologías de la Información</span></div>
                cursando actualmente su 5to semestre en la <span id={"university"}>Universidad del Valle de Guatemala</span>.
            </Typography>
            <AboutTabs />
        </Container>
    );
}

export default About;