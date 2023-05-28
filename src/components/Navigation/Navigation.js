// Obtained from: https://mui.com/material-ui/react-app-bar/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Link as ScrollLink } from 'react-scroll';

const pages = ['Inicio', 'Sobre mí', 'Experiencia', 'Proyectos', 'Contacto'];
const pagesId = ['home', 'about', 'experience', 'projects', 'contact']

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="sticky"
            style={{ backgroundColor: '#865DFF' }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LogoDevIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FRANZ
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                        <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <ScrollLink
                                        to={pagesId[pages.indexOf(page)]}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        sx={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                            },
                                        }}
                                    >
                                        {page}
                                    </ScrollLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <LogoDevIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FRANZ
                    </Typography>
                    <Box sx={{
                        flexGrow: 1,
                        display: {xs: 'none', md: 'flex'},
                        justifyContent: 'start',
                        '> *': {
                            mx: 2,
                        },
                        '.active': {
                            color: '#ffd058'
                        }
                    }}>
                        {pages.map((page) => (
                            <ScrollLink
                                activeClass="active"
                                to={pagesId[pages.indexOf(page)]}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    color: 'white',
                                    display: 'block',
                                    textTransform: 'uppercase',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                {page}
                            </ScrollLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
