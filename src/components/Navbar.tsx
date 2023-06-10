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
    <AppBar position="relative" sx={themedStyles(theme).appBar}>
      <Toolbar>
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
          <Image
            src={logo}
            alt="logo"
            height="100"
          />
        </Box>
      </Toolbar>
    </AppBar>

    <Drawer PaperProps={{
      sx: { width: "12%" },
    }}
      open={sidebarActive}
      onClose={() => setSidebarActive(false)}
    >
      <Toolbar></Toolbar>
      <Toolbar></Toolbar>
      <SideMenuItem href=" ">Predstavitev</SideMenuItem>
      <SideMenuItem href="vodstvo_drustva">Vodstvo</SideMenuItem>
      <SideMenuItem href="kronologija">Kronologija</SideMenuItem>
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
    <Box sx={{ paddingX: "50px" }}>
      <Link href={href}>
        <Typography>{children}</Typography>
      </Link>
    </Box>
  );
}

export default ResponsiveAppBar