import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.scss';
import { Container } from '@mui/material';

const Navigation = () => {
    return (
        <Container
            maxWidth={false}
            minWidth={'xs'}
            disableGutters={true}
            className={"navigationContainer"}
        >
            <div className="navBar">
                <div className="navLinks">
                    <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                        Inicio
                    </Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                        Sobre mí
                    </Link>
                    <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>
                        Experiencia
                    </Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                        Proyectos
                    </Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                        Contacto
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Navigation;
