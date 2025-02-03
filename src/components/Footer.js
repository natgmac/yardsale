// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 2, mt: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; 2025 Yardsale, Inc. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
