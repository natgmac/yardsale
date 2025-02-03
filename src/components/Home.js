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
          height: '100vh',
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/your-hero-image.jpg') no-repeat center center/cover`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Welcome to Yardsale
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h6" component="p" gutterBottom sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
              Connecting landowners and buyers for innovative infill development opportunities.
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

      {/* Our Mission Section */}
      <Box sx={{ py: 4, minHeight: '80vh', backgroundColor: (theme) => theme.palette.background.default, display: 'flex', alignItems: 'center' }}>
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
              We aim to unlock infill development potential by bridging the gap between land-rich sellers and cash-rich buyers.
              Our platform simplifies processes and standardizes legal documents for sustainable community growth.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* What We Offer Section */}
      <Box sx={{ py: 4, minHeight: '80vh', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typography variant="h4" gutterBottom>
              What We Offer
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="body1">
              Our platform provides innovative tools and resources—from interactive mapping to pre-approved legal documents—that streamline the infill development process.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Call-to-Action Section */}
      <Box sx={{ py: 4, minHeight: '60vh', backgroundColor: (theme) => theme.palette.background.paper, display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Typography variant="h4" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/contact">
              Contact Us
            </Button>
          </motion.div>
        </Container>
      </Box>
    </div>
  );
}

export default Home;
