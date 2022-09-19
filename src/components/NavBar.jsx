import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CartWidget from './CartWidget';
import { NavLink, useNavigate } from 'react-router-dom';
import { IndeterminateCheckBoxOutlined } from '@mui/icons-material';


const pages = [{enlace:'/aromas', nombre:'Aromas'}, {enlace:'/category/clasica', nombre:'Clásica'}, {enlace:'/category/romantica', nombre:'Romántica'}, {enlace:'/category/moderna', nombre:'Moderna'}, {enlace:'/informacion', nombre:'Información'}];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className='header'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <NavLink to='/' className='links'>
          <Typography
            variant="h6"
            noWrap

            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >              
          <img src='/believe.png' alt='Believe logo' className='logo'/> 

          </Typography>
          </NavLink>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                <NavLink className='links' to={page.enlace}>{page.nombre}</NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
>
<NavLink to='/'>
  <img src='/believe.png' alt='Believe logo' className='logo'/> 
</NavLink>
            
          </Typography>


          {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <NavLink style={{color:'white', textDecoration:'none'}} to={page.enlace}>{page.nombre}</NavLink>
                </MenuItem>
              ))}

<NavLink to='/cart' style={{color:'white', textDecoration:'none'}} >
    <CartWidget/>
</NavLink>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;


