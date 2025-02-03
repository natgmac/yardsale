// src/components/DynamicForm.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

function DynamicForm() {
  // Track the current step of the form.
  const [step, setStep] = useState(0);

  // Form data object to hold all answers.
  const [formData, setFormData] = useState({
    role: '', // 'seller' or 'buyer'
    propertyType: '',
    location: '',
    timeline: '',
    // Seller-specific fields:
    askingPrice: '',
    mortgages: '',
    propertyFeatures: '',
    // Buyer-specific fields:
    budget: '',
    financing: '',
    partnership: '',
    additionalInfo: '',
  });

  // Update form data when a field changes.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Move to the next step.
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Move to the previous step.
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  // Handle final submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for submitting your information!');
    // Send the data to an API or backend service as needed.
    // Optionally, reset the form:
    setFormData({
      role: '',
      propertyType: '',
      location: '',
      timeline: '',
      askingPrice: '',
      mortgages: '',
      propertyFeatures: '',
      budget: '',
      financing: '',
      partnership: '',
      additionalInfo: '',
    });
    setStep(0);
  };

  // Render different content based on the step and role.
  const renderStep = () => {
    switch (step) {
      case 0:
        // Step 0: Determine if the user is a land seller or buyer.
        return (
          <Box sx={{ mb: 3 }}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend" sx={{ mb: 1 }}>
                Are you a land seller or a buyer?
              </FormLabel>
              <RadioGroup
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="seller"
                  control={<Radio />}
                  label="Seller"
                />
                <FormControlLabel
                  value="buyer"
                  control={<Radio />}
                  label="Buyer"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={nextStep}
              disabled={!formData.role}
              sx={{ mt: 2 }}
            >
              Next
            </Button>
          </Box>
        );
      case 1:
        // Step 1: Role-specific questions.
        if (formData.role === 'seller') {
          return (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Tell us about your property
              </Typography>
              <TextField
                fullWidth
                name="propertyType"
                label="Property Type (e.g., single-family home, vacant lot, multi-family)"
                value={formData.propertyType}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="location"
                label="Property Location"
                value={formData.location}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="timeline"
                label="When do you plan to sell? (e.g., immediately, within 3 months)"
                value={formData.timeline}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="askingPrice"
                label="Asking Price Range (approximate)"
                value={formData.askingPrice}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="mortgages"
                label="Any existing liens or mortgages? (Yes/No and details)"
                value={formData.mortgages}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="propertyFeatures"
                label="Unique Features or Conditions of the Property"
                value={formData.propertyFeatures}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={3}
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={nextStep}
                  disabled={
                    !formData.propertyType ||
                    !formData.location ||
                    !formData.timeline ||
                    !formData.askingPrice
                  }
                >
                  Next
                </Button>
                <Button
                  variant="outlined"
                  onClick={prevStep}
                  sx={{ ml: 2 }}
                >
                  Back
                </Button>
              </Box>
            </Box>
          );
        } else if (formData.role === 'buyer') {
          return (
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Tell us what you're looking for
              </Typography>
              <TextField
                fullWidth
                name="propertyType"
                label="Desired Property Type (e.g., buildable lot, infill opportunity)"
                value={formData.propertyType}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="location"
                label="Preferred Location"
                value={formData.location}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="timeline"
                label="Desired Purchase Timeline (e.g., immediately, within 6 months)"
                value={formData.timeline}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="budget"
                label="Budget Range"
                value={formData.budget}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="financing"
                label="Financing Status (e.g., pre-approved, need financing)"
                value={formData.financing}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                fullWidth
                name="partnership"
                label="Open to co-ownership or partnership structures? (Yes/No and details)"
                value={formData.partnership}
                onChange={handleChange}
                margin="normal"
              />
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={nextStep}
                  disabled={
                    !formData.propertyType ||
                    !formData.location ||
                    !formData.timeline ||
                    !formData.budget ||
                    !formData.financing
                  }
                >
                  Next
                </Button>
                <Button
                  variant="outlined"
                  onClick={prevStep}
                  sx={{ ml: 2 }}
                >
                  Back
                </Button>
              </Box>
            </Box>
          );
        }
        break;
      case 2:
        // Step 2: Collect additional information.
        return (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Additional Information
            </Typography>
            <TextField
              fullWidth
              name="additionalInfo"
              label="Any additional details or questions?"
              value={formData.additionalInfo}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
            />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" onClick={nextStep}>
                Next
              </Button>
              <Button variant="outlined" onClick={prevStep} sx={{ ml: 2 }}>
                Back
              </Button>
            </Box>
          </Box>
        );
      case 3:
        // Step 3: Review and submit the form.
        return (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Review Your Information
            </Typography>
            <Typography variant="body1">
              <strong>Role:</strong> {formData.role}
            </Typography>
            <Typography variant="body1">
              <strong>Property Type:</strong> {formData.propertyType}
            </Typography>
            <Typography variant="body1">
              <strong>Location:</strong> {formData.location}
            </Typography>
            <Typography variant="body1">
              <strong>Timeline:</strong> {formData.timeline}
            </Typography>
            {formData.role === 'seller' && (
              <>
                <Typography variant="body1">
                  <strong>Asking Price:</strong> {formData.askingPrice}
                </Typography>
                <Typography variant="body1">
                  <strong>Mortgages/ Liens:</strong> {formData.mortgages}
                </Typography>
                <Typography variant="body1">
                  <strong>Property Features:</strong> {formData.propertyFeatures}
                </Typography>
              </>
            )}
            {formData.role === 'buyer' && (
              <>
                <Typography variant="body1">
                  <strong>Budget:</strong> {formData.budget}
                </Typography>
                <Typography variant="body1">
                  <strong>Financing Status:</strong> {formData.financing}
                </Typography>
                <Typography variant="body1">
                  <strong>Partnership Interest:</strong> {formData.partnership}
                </Typography>
              </>
            )}
            <Typography variant="body1">
              <strong>Additional Info:</strong> {formData.additionalInfo}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="outlined" onClick={prevStep} sx={{ ml: 2 }}>
                Back
              </Button>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Lead Qualification Form
        </Typography>
      </motion.div>
      <form>{renderStep()}</form>
    </Container>
  );
}

export default DynamicForm;
