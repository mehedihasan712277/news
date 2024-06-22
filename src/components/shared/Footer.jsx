import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import { Facebook, Twitter, YouTube } from '@mui/icons-material';
import Link from 'next/link';

const Footer = () => {
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
    return (
        <Box>
            <Container>
                {/* -----------------icons-------------------- */}
                <Stack direction="row" justifyContent="center">
                    <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                    <IconButton>
                        <Twitter></Twitter>
                    </IconButton>
                    <IconButton>
                        <YouTube></YouTube>
                    </IconButton>
                </Stack>


                <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                    {
                        navItems.map(ele => {
                            return <Link href={ele.pathname} key={ele.id}>
                                <Button sx={{ color: "gray" }}>{ele.route}</Button>
                            </Link>
                        })
                    }
                </Box>

                <Typography color="gray" variant='body2' textAlign="center">
                    @2024 The Dragon News. Design by Programming Hero.
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer