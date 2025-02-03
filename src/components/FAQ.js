// src/components/FAQ.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function FAQ() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>
      
      <Box sx={{ my: 2 }}>
        <Typography variant="h6">
          What is Yardsale?
        </Typography>
        <Typography variant="body1">
          Yardsale is an innovative marketplace that connects landowners with buyers, developers, and investors to unlock the potential of infill development.
        </Typography>
      </Box>
      
      <Box sx={{ my: 2 }}>
        <Typography variant="h6">
          How does the platform work?
        </Typography>
        <Typography variant="body1">
          Our map-based interface lets users create and search for listings, while providing standardized legal documents and educational resources to simplify the process.
        </Typography>
      </Box>
      
      <Box sx={{ my: 2 }}>
        <Typography variant="h6">
          Who can use Yardsale?
        </Typography>
        <Typography variant="body1">
          Both landowners seeking to capitalize on underdeveloped land and buyers or developers looking for infill opportunities can use our platform.
        </Typography>
      </Box>
      
      <Box sx={{ my: 2 }}>
        <Typography variant="h6">
          How can I get started?
        </Typography>
        <Typography variant="body1">
          Simply sign up, create your profile, and start exploring or listing properties. For more details, please contact us.
        </Typography>
      </Box>
    </Container>
  );
}

export default FAQ;
