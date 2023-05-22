import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import logo from "/home/anze/Desktop/varnostni_inzinerji/logo.jpg";
import Image from "next/image";
import Link from 'next/link';
import { Theme, useTheme } from "@mui/material/styles"
import { Drawer } from '@mui/material';




const menu = ['O nas', 'Vodstvo', 'Novice', 'Seminarji'];
const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },

  }
}

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);


  function handleClick(event: React.MouseEvent<HTMLElement>) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <AppBar position="relative" sx={themedStyles(theme).appBar}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Tooltip
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onMouseOver={handleClick}
            size="large"
            edge="start"
            //color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </Tooltip>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <Image
              src={logo}
              alt='/home/anze/Desktop/varnostni_inzinerji/logo.jpg'

            />

          </div>


          <Drawer
            PaperProps={{
              sx: { width: "12%" },
            }}
            anchor='left'

            open={Boolean(anchorEl)}
            onClose={handleClose}

          >
            <Toolbar></Toolbar>
            <Toolbar></Toolbar>


            {menu.map((menu) => (
              <Link key={menu} href={`/${menu.toLowerCase()}`}>
                <MenuItem key={menu} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{menu}</Typography>
                </MenuItem>
              </Link>
            ))}


          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar