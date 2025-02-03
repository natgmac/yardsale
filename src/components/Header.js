// src/components/Header.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Include all desired navigation links here.
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Map', path: '/map-prototype' },
    { label: 'Lead Form', path: '/lead-form' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Legal Structures', path: '/legal-structures' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(5px)',
        boxShadow: 1,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo192.png"
              alt="Yardsale Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
          </NavLink>
          {!isMobile && (
            <Typography variant="h6" component="div" sx={{ color: '#444' }}>
              Yardsale
            </Typography>
          )}
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                <List>
                  {navLinks.map((item, index) => (
                    <ListItem button key={index} component={NavLink} to={item.path}>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          navLinks.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              component={NavLink}
              to={item.path}
              sx={{ color: '#444', ml: 2 }}
            >
              {item.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
