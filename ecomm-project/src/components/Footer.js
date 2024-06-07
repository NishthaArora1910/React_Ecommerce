import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'black', mt: 'auto' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body1" component="div" sx={{ mr: 2 }}>
            Follow Us On:
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="facebook"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="instagram"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
