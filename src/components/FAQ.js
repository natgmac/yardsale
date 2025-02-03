// src/components/FAQ.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function FAQ() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
      </motion.div>

      <Box sx={{ my: 3 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h6">
            What is Yardsale?
          </Typography>
          <Typography variant="body1">
            Yardsale is an innovative marketplace that unlocks the potential of urban infill development. We connect landowners with buyers, developers, and investors by offering standardized legal documents, interactive mapping tools, and educational resources.
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ my: 3 }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h6">
            How does the platform work?
          </Typography>
          <Typography variant="body1">
            Our platform allows users to browse listings through an interactive map, post “land wanted” ads, and connect directly with potential buyers or sellers. We offer pre-listing feasibility analyses and standardized legal frameworks to simplify the complex process of infill development.
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ my: 3 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h6">
            Who can use Yardsale?
          </Typography>
          <Typography variant="body1">
            Yardsale is designed for a wide range of users. Homeowners with underutilized land can access new ways to extract equity, while builders and developers gain access to affordable, urban infill opportunities. Our platform supports both individual and institutional participants.
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ my: 3 }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography variant="h6">
            How can I get started?
          </Typography>
          <Typography variant="body1">
            Getting started is easy! Simply sign up for an account, create your profile, and start listing your property or browsing opportunities. Our extensive educational resources and community support ensure you have the guidance you need every step of the way.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
}

export default FAQ;
