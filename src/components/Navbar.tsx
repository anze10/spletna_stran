import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "/public/logo.jpg";
import Image from "next/image";
import { Box, Drawer, ListItemButton, ListItemText, ThemeProvider, Typography, createTheme, useTheme } from '@mui/material';
import Link from 'next/link';



function ResponsiveAppBar() {

  const [sidebarActive, setSidebarActive] = useState(false);

  return <>
    <AppBar position="relative" sx={{ zIndex: '9999', borderBottomLeftRadius: '2%', borderBottomRightRadius: '2%' }}>
      <Toolbar sx={{ height: '115px', }}>
        <IconButton
          onMouseEnter={() => setSidebarActive(true)}
          size="large"
          edge="start"

          aria-label="menu"
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
          <a href="/">
            <Image
              src={logo}
              alt="logo"
              height="100"
            />
          </a>


        </Box>
      </Toolbar>
    </AppBar>

    <Drawer PaperProps={{
      sx: { maxWidth: "300px", borderRadius: '2%', backgroundColor: '#d2fad7', paddingTop: '120px' },
    }}
      open={sidebarActive}
      onClose={() => setSidebarActive(false)}
    >
      <SideMenuItem href="/">Predstavitev</SideMenuItem>
      <SideMenuItem href="/vodstvo_drustva">Vodstvo</SideMenuItem>
      <SideMenuItem href="/kronologija">Kronologija</SideMenuItem>
      <SideMenuItem href="/novice">Novice</SideMenuItem>
      <SideMenuItem href="/seminarji">Seminarji</SideMenuItem>
      <SideMenuItem href="/ekskurzije">Strokovne ekskurzije</SideMenuItem>
      <SideMenuItem href="/obvestila">Obvestila članom</SideMenuItem>
      <SideMenuItem href="/prijavnica">Postani član</SideMenuItem>
      <SideMenuItem href="/predpisi">Predpisi</SideMenuItem>
      <SideMenuItem href="/akti">Akti društva</SideMenuItem>
      <SideMenuItem href="povezave">Povezave</SideMenuItem>
    </Drawer>
  </>;
}

type SideMenuItemProps = {
  children?: React.ReactNode;
  href: string;
}

function SideMenuItem({ children, href }: SideMenuItemProps) {
  return (

    <ListItemButton component="a" href={href} sx={{ paddingX: "50px", color: "#000000" }}>
      <ListItemText primary={children} />
    </ListItemButton>

  );

}

export default ResponsiveAppBar