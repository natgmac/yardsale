// src/components/Home.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: '70vh', md: '100vh' },
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/your-hero-image.jpg') no-repeat center center/cover`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}>
              Welcome to Yardsale
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h6" component="p" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
              Unlocking urban infill development potential with innovative ownership models.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button variant="contained" color="primary" component={Link} to="/about" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Additional Sections */}
      <Box sx={{ py: 6, backgroundColor: '#f9f9f9', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typography variant="h4" gutterBottom>
              Our Mission
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="body1">
              We bridge the gap between land-rich homeowners and cash-rich builders by simplifying the complex process of urban infill development. Our platform offers standardized legal structures, interactive mapping tools, and educational resources to empower communities.
            </Typography>
          </motion.div>
        </Container>
      </Box>
      {/* You can add more sections here as needed */}
    </div>
  );
}

export default Home;
