import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.scss';

const Contact = () => {
    return (
        <Container
            className={"reach-me-container"}
            id={"contact"}
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
                marginTop: '10px',
                marginBottom: '10px',
            }}
        >
            <div className={"reach-me"}>
                <Typography
                    className={"title"}
                    variant="h4"
                    component="h1"
                    gutterBottom
                >
                    ¡Contáctame!
                </Typography>
                <div className={"contact-links"}>
                    <a href={"mailto: castillocerna@gmail.com"}>
                        <EmailIcon
                            sx={{
                                fontSize: '3rem',
                                color: '#FFD166',
                                marginRight: '10px',
                            }}
                        />
                    </a>
                    <a href={"https://www.linkedin.com/in/francisco-castillo-78b8031b4/"}>
                        <LinkedInIcon
                            sx={{
                                fontSize: '3rem',
                                color: '#FFD166',
                                marginLeft: '10px',
                            }}
                        />
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
