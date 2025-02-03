// src/components/About.js
import React from 'react';
import { Container, Typography, Box, List, ListItem } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Yardsale
      </Typography>
      <Typography variant="body1" gutterBottom>
        Yardsale is a groundbreaking platform designed to unlock the potential of infill development by connecting landowners with buyers, developers, and investors.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" gutterBottom>
          Founded in 2025, we bridge the gap between communities with underutilized land and those ready to develop new opportunities.
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Our Team
        </Typography>
        <List>
          <ListItem><strong>Eric Din:</strong> CEO, Director</ListItem>
          <ListItem><strong>Kate Hambley:</strong> Land use attorney</ListItem>
          <ListItem><strong>Eric Larsson:</strong> Planner and attorney</ListItem>
          <ListItem>Additional experts in GIS, entrepreneurship, and technology development.</ListItem>
        </List>
      </Box>
    </Container>
  );
}

export default About;
