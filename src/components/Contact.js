// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent! (This is a demo.)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          For more information about Yardsale, inquiries about partnership opportunities, or assistance with our platform, please get in touch. We’re here to help and look forward to connecting with you.
        </Typography>
      </motion.div>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
