// src/components/HomePage.jsx
import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom>
              Welcome to Expense Tracker
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Manage your expenses effortlessly.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary" onClick={() => navigate('/login')} sx={{ mr: 2 }}>
                Login
              </Button>
              <Button variant="outlined" color="primary" onClick={() => navigate('/register')}>
                Register
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* You can use any image or illustration */}
          <Box
            component="img"
            src="https://img.freepik.com/free-vector/invoice-concept-illustration_114360-2411.jpg?t=st=1739385885~exp=1739389485~hmac=35cb335256d97305e40805eec3f4defbf85a063ea68e4e00bca9ca4e0cda9b89&w=826"
            alt="Finance Illustration"
            sx={{ width: '100%', borderRadius: 2 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
