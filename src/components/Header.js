// src/components/Header.js
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function Header() {
  // State to track whether the header should be visible
  const [showHeader, setShowHeader] = useState(true);
  // Track the previous scroll position
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // If scrolling up or near the top, show header; otherwise, hide it.
    const shouldShow = prevScrollPos > currentScrollPos || currentScrollPos < 50;
    setShowHeader(shouldShow);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1100,
        transition: 'transform 0.3s ease',
        transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        elevation={1}
        sx={{
          background: 'rgba(255, 255, 255, 0.9)', // semi-transparent white background
          backdropFilter: 'blur(5px)', // adds a modern blur effect behind the header
        }}
      >
        <Toolbar>
          <NavLink
            to="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            {/* Replace with your logo image path if needed */}
            <img
              src="/logo192.png"
              alt="Yardsale Logo"
              style={{ height: '50px', marginRight: '20px' }}
            />
          </NavLink>
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#444' }}>
            Yardsale
          </Typography>
          <Button color="inherit" component={NavLink} to="/" sx={{ color: '#444' }}>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/about" sx={{ color: '#444' }}>
            About
          </Button>
          <Button color="inherit" component={NavLink} to="/faq" sx={{ color: '#444' }}>
            FAQ
          </Button>
          <Button color="inherit" component={NavLink} to="/contact" sx={{ color: '#444' }}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
