import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const About = () => {
    return (
        <Container
            className={"home"}
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                fontFamily: 'Roboto, sans-serif',
            }}
        >
            <Typography
                className={"title"}
                variant="h4"
                component="h1"
                gutterBottom>
                Conoce un poco más sobre mí. 🦦
            </Typography>
            <Typography
                className={"title"}
                variant="h5"
                component="h2"
                gutterBottom>
                Alch, no se que poner aquí tampoco.😅
            </Typography>
        </Container>
    );
}

export default About;