import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

// Create a blue theme to match the charity design
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Blue-600
      dark: '#1d4ed8', // Blue-700
    },
    secondary: {
      main: '#1e40af', // Blue-800
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static" sx={{ backgroundColor: '#1e3a8a' }}> {/* Blue-900 */}
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Care4Youth
            </Typography>
            <Button 
              color="inherit" 
              component={Link} 
              to="/"
              sx={{ fontWeight: 'medium', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/about"
              sx={{ fontWeight: 'medium', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              About
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/contact"
              sx={{ fontWeight: 'medium', '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
            >
              Contact
            </Button>
            <Button 
              variant="contained"
              sx={{ 
                ml: 2,
                backgroundColor: '#2563eb',
                '&:hover': { backgroundColor: '#1d4ed8' },
                borderRadius: '9999px',
                fontWeight: 'bold'
              }}
            >
              Donate Now
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 0, p: 0 }} maxWidth={false}> {/* Remove default padding/margin */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;