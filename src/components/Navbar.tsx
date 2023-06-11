import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "/public/logo.jpg";
import Image from "next/image";
import { Box, Drawer, Typography } from '@mui/material';
import Link from 'next/link';
import { Theme, useTheme } from "@mui/material/styles";

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1

    },

  }
}

function ResponsiveAppBar() {

  const theme = useTheme();
  const [sidebarActive, setSidebarActive] = useState(false);

  return <>
    <AppBar position="relative" sx={themedStyles(theme).appBar} style={{ borderBottomLeftRadius: '2%', borderBottomRightRadius: '2%', background: '#2eac9c' }}>
      <Toolbar sx={{ height: '115px', }}>
        <IconButton
          onMouseEnter={() => setSidebarActive(true)}
          size="large"
          edge="start"
          color="inherit"
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
      sx: { width: "12%", borderRadius: '2%', background: '#0d7f6d' },
    }}
      open={sidebarActive}
      onClose={() => setSidebarActive(false)}
    >
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
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
    <Box sx={{ paddingX: "50px", color: "#FAFAFA" }}>
      <Link href={href}>
        <Typography>{children}</Typography>
      </Link>
    </Box>
  );
}

export default ResponsiveAppBar