import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Home.scss';

const Home = () => {
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
                    ¡Hola! Soy <span id={"name"}>Francisco Castillo.</span>👋
                </Typography>
                <Typography
                    className={"title"}
                    variant="h4"
                    component="h1"
                    gutterBottom>
                    Alch, no se que poner aquí.😅
                </Typography>
            </Container>
        );
};

export default Home;
