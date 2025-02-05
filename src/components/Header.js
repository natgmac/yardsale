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
import { Logo } from './Logo.tsx';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // true for width <= 600px
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
        background: 'rgba(255, 255, 255, 0.95)', // Slightly more opaque
        backdropFilter: 'blur(5px)',
        boxShadow: 1,
      }}
    >
      <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <NavLink
            to="/"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <Logo height={isMobile ? '40px' : '50px'} />
          </NavLink>
          {!isMobile && (
            <Typography variant="h6" component="div" sx={{ color: '#444', ml: 2 }}>
              Yardsale
            </Typography>
          )}
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              onClick={toggleDrawer}
              sx={{ 
                display: { xs: 'block', sm: 'block' },
                padding: '12px',
              }}
              aria-label="menu"
            >
              <MenuIcon sx={{ color: '#444' }} />
            </IconButton>
            <Drawer 
              anchor="right" 
              open={drawerOpen} 
              onClose={toggleDrawer}
              PaperProps={{
                sx: {
                  width: '80%', // Percentage-based width
                  maxWidth: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                }
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  paddingTop: '20px',
                }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
              >
                <List>
                  {navLinks.map((item, index) => (
                    <ListItem 
                      button 
                      key={index} 
                      component={NavLink} 
                      to={item.path}
                      sx={{
                        padding: '12px 24px',
                        '&.active': {
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        }
                      }}
                    >
                      <ListItemText 
                        primary={item.label}
                        sx={{
                          '& .MuiTypography-root': {
                            fontSize: '1.1rem',
                          }
                        }}
                      />
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
              sx={{
                color: '#444',
                ml: 2,
                '&.active': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
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
