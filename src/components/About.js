// src/components/About.js
import React from 'react';
import { Container, Typography, Box, List, ListItem } from '@mui/material';
import { Logo } from './Logo.tsx';

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Logo height="100px" />
      </Box>
      {/* Introduction Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Yardsale
        </Typography>
        <Typography variant="body1" gutterBottom>
          Yardsale is a groundbreaking platform designed to unlock the potential of infill development by connecting landowners with buyers, developers, and investors. Many homeowners possess parcels with untapped development potential yet lack the capital to build, while buyers and developers struggle to locate affordable, buildable sites in urban areas.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our innovative approach bridges this gap by facilitating less-than-a-parcel transactions—allowing landowners to sell development rights through creative ownership models such as land leases, contractual rights to build, or mixed-ownership structures.
        </Typography>
      </Box>

      {/* Our Approach Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Approach
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Yardsale, we do more than just list properties. We provide standardized legal documents and pre-approved ownership models that de-risk these unconventional transactions. This not only helps homeowners unlock the latent value in their properties but also provides builders and developers with affordable opportunities in established neighborhoods.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Additionally, our platform serves as an educational hub. Through white papers, case studies, and community outreach events, we demystify the complex legal and planning processes that often deter innovative infill development.
        </Typography>
      </Box>

      {/* Our Impact Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Impact
        </Typography>
        <Typography variant="body1" gutterBottom>
          By streamlining the process of mixed-ownership and infill development transactions, Yardsale aims to:
        </Typography>
        <List>
          <ListItem>
            • Revitalize urban centers by increasing the supply of buildable sites in high-demand areas.
          </ListItem>
          <ListItem>
            • Lower barriers to entry for buyers by unbundling traditional property rights and reducing upfront costs.
          </ListItem>
          <ListItem>
            • Enable homeowners to extract equity from their property without the need to relocate.
          </ListItem>
          <ListItem>
            • Foster smart growth by promoting sustainable development that leverages existing infrastructure.
          </ListItem>
        </List>
      </Box>

      {/* Our Team Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our diverse team brings together expertise in land use planning, legal frameworks, mapping/GIS, and entrepreneurship. Key team members include:
        </Typography>
        <List>
          <ListItem>
            <strong>Eric Din:</strong> CEO, Director – Expert in federal grant administration and project management.
          </ListItem>
          <ListItem>
            <strong>Kate Hambley:</strong> Land use attorney – Specialist in municipal land use law and planning.
          </ListItem>
          <ListItem>
            <strong>Eric Larsson:</strong> Planner and attorney – Expert in land use planning and mapping.
          </ListItem>
          <ListItem>
            <strong>Nat MacDonald:</strong> Specializing in automated site planning and development feasibility analysis.
          </ListItem>
          <ListItem>
            Additional experts in GIS and entrepreneurship.
          </ListItem>
        </List>
      </Box>

      {/* Future Developments Section */}
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Looking Ahead
        </Typography>
        <Typography variant="body1" gutterBottom>
          As we grow, Yardsale will continue to refine and expand its offerings. Future developments include integrating interactive mapping tools, pre-development feasibility assessments, and dynamic, user-friendly interfaces to further streamline the process of infill development transactions.
        </Typography>
        <Typography variant="body1">
          With a clear vision and a robust strategy, we are committed to transforming urban development, fostering community revitalization, and making sustainable, smart growth a reality.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
