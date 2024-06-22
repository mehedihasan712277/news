"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';
import Image from 'next/image';

// image-----------
import logo from "@/assets/logo.jpg"
//icons------------
import { Facebook, Twitter, YouTube } from '@mui/icons-material';
import Link from 'next/link';

const navItems = [
    {
        id: 1,
        route: "Home",
        pathname: "/"
    },
    {
        id: 2,
        route: "Pages",
        pathname: "/pages"
    },
    {
        id: 3,
        route: "category",
        pathname: "/category"
    },
    {
        id: 4,
        route: "News",
        pathname: "/news"
    },
    {
        id: 5,
        route: "Contact",
        pathname: "/contact"
    }
];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className='bg-transparent shadow-none'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box>
                        <Image src={logo} alt='logo' width={100}></Image>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map((ele) => (
                                <MenuItem key={ele.id} onClick={handleCloseNavMenu}>
                                    <Link href={ele.pathname}>
                                        {ele.route}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {
                            navItems.map(ele => {
                                return <Link href={ele.pathname} key={ele.id}>
                                    <Button className='text-gray-500'>{ele.route}</Button>
                                </Link>
                            })
                        }
                    </Box>

                    <Box>
                        <IconButton>
                            <Facebook></Facebook>
                        </IconButton>
                        <IconButton>
                            <Twitter></Twitter>
                        </IconButton>
                        <IconButton>
                            <YouTube></YouTube>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
