import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "/public/logo.jpg";
import Image from "next/image";
import { Box, Drawer, Typography } from '@mui/material';
import Link from 'next/link';

function ResponsiveAppBar() {

    const [hamburgerActive, setHamburgerActive] = useState(false);

    return <>
        <AppBar position="relative">
            <Toolbar>
                <IconButton
                    onMouseEnter={() => setHamburgerActive(true)}
                    size="large"
                    edge="start"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Image
                        src={logo}
                        alt="logo"
                        height="50"
                    />
                </Box>
            </Toolbar>
        </AppBar>

        <Drawer
            open={hamburgerActive}
            onClose={() => setHamburgerActive(false)}
        >
            <SideMenuItem href="o_nas">O nas</SideMenuItem>
            <SideMenuItem href="vodstvo">Vodstvo</SideMenuItem>
            <SideMenuItem href="novice">Novice</SideMenuItem>
            <SideMenuItem href="seminarji">Seminarji</SideMenuItem>
        </Drawer>
    </>;
}

type SideMenuItemProps = {
    children?: React.ReactNode;
    href: string;
}

function SideMenuItem({ children, href }: SideMenuItemProps) {
    return (
        <Box sx={{ paddingX: "20px" }}>
            <Link href={href}>
                <Typography>{children}</Typography>
            </Link>
        </Box>
    );
}

export default ResponsiveAppBar