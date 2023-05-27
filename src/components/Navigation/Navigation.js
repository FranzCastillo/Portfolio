import React from 'react';
import { Link } from 'react-scroll';
import './Navigation.scss';
const Navigation = () => {
    return (
        <div className="navBar">
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}>
                Home
            </Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}>
                About
            </Link>
        </div>
    );
};
export default Navigation;