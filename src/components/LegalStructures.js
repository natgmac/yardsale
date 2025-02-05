// src/components/LegalStructures.js
import React from 'react';
import { Container, Typography, Box, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import { Logo } from './Logo.tsx';

function LegalStructures() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Logo height="80px" />
      </Box>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Legal Structures for Infill Development
        </Typography>
      </motion.div>

      <Typography variant="body1" gutterBottom>
        Yardsale is committed to simplifying the complex legal challenges of infill development. Our platform offers standardized legal structures that help de-risk transactions and lower costs for both landowners and developers. Below are some of the key legal frameworks we provide:
      </Typography>

      <List sx={{ pl: 4 }}>
        <ListItem disableGutters>
          <Typography variant="body1">
            <strong>Land Lease:</strong> A long-term lease (often up to 99 years) that enables the developer to construct on the land while the landowner retains title.
          </Typography>
        </ListItem>
        <ListItem disableGutters>
          <Typography variant="body1">
            <strong>Contractual Development Rights:</strong> A structure in which the landowner sells the right to develop the property. This can later be converted—through standardized legal processes—into a condominium or other shared ownership model.
          </Typography>
        </ListItem>
        <ListItem disableGutters>
          <Typography variant="body1">
            <strong>Mixed-Ownership (Land Condo):</strong> In this model, property rights are unbundled. The buyer may own the building, while the land remains under a different legal framework (such as a condominium association, tenancy in common, or community land trust).
          </Typography>
        </ListItem>
        <ListItem disableGutters>
          <Typography variant="body1">
            <strong>Joint Ventures & Cooperative Structures:</strong> Parties may form joint ventures or cooperatives to share both the risks and benefits of development, pooling resources to achieve mutually beneficial outcomes.
          </Typography>
        </ListItem>
      </List>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" gutterBottom>
          By offering these repeatable, standardized legal structures, Yardsale reduces the need for costly, bespoke legal arrangements and builds greater trust among homeowners, developers, and financial institutions. Our goal is to make urban infill development more accessible and sustainable for communities statewide.
        </Typography>
      </Box>
    </Container>
  );
}

export default LegalStructures;
