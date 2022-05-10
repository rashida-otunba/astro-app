import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css"
import {Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <Box
    className="navbar-container"
     sx={{flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="nav-items " variant="h6" component="div" sx={{ flexGrow: 1 }}><Link to="/" className="link-style main-home-nav">
            astro. 
         </Link> </Typography>
          <Button 
          className="nav-items" 
        //   color="inherit"
          ><Link to="/signlist" className="link-style">star signs</Link></Button>
          <Button 
        //   color="inherit"
          
          ><Link to="/signlist" className="link-style">about us</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
