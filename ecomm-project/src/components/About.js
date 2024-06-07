
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our e-commerce site! We offer a wide range of products to suit all your needs.
          Our mission is to provide the best quality products at competitive prices with excellent
          customer service. Thank you for visiting our store!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
