import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Popover from '@mui/material/Popover';
import AssignmentIcon from '@mui/icons-material/Assignment'; // Import To-Do icon

function Navbar({ onCartClick }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleContactClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'contact-popover' : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: '#4682B4',
          borderRadius: 2,
          mx: 2,
          mt: 2,
          mb: 2,
          p: 1,
          boxShadow: 3,
        }}
      >
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My E-Commerce
          </Typography>
          <Tooltip title="Home">
            <IconButton
              size="large"
              color="inherit"
              aria-label="home"
              component={Link}
              to="/"
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="About">
            <IconButton
              size="large"
              color="inherit"
              aria-label="about"
              component={Link}
              to="/about" // Add link to About page
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Contact">
            <IconButton
              size="large"
              color="inherit"
              aria-label="contact"
              onClick={handleContactClick}
            >
              <ContactSupportIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="To-Do">
            <IconButton
              size="large"
              color="inherit"
              aria-label="todo"
              component={Link}
              to="/todo"
            >
              <AssignmentIcon />
            </IconButton>
          </Tooltip>
          <Button color="inherit" onClick={onCartClick}>
            <ShoppingCartIcon />
          </Button>   
          <Popover
            id={id}
            open={openPopover}
            anchorEl={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography>
                Contact us at: fakestorexy@mail.com
              </Typography>
            </Box>
          </Popover>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
