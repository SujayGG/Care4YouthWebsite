import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Heart, Users, Phone } from 'lucide-react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

// Enhanced theme with more comprehensive color palette for nonprofit
const theme = createTheme({
  palette: {
    primary: {
      main: '#1e40af', // Deep blue
      light: '#3b82f6', // Lighter blue
      dark: '#1e3a8a', // Darker blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f59e0b', // Warm amber for accents
      light: '#fbbf24',
      dark: '#d97706',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          padding: '12px 32px',
          transition: 'all 0.3s ease',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Enhanced Navigation Bar */}
          <AppBar 
            position="sticky" 
            elevation={0}
            sx={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(30, 64, 175, 0.1)',
              color: 'primary.main',
            }}
          >
            <Toolbar sx={{ py: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <Heart 
                  size={32} 
                  style={{ 
                    color: '#1e40af', 
                    marginRight: '12px',
                    filter: 'drop-shadow(0 2px 4px rgba(30, 64, 175, 0.3))'
                  }} 
                />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Care4Youth
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button 
                  color="primary" 
                  component={Link} 
                  to="/"
                  sx={{ 
                    fontWeight: 'medium',
                    color: 'text.primary',
                    '&:hover': { 
                      backgroundColor: 'rgba(30, 64, 175, 0.05)',
                      color: 'primary.main'
                    } 
                  }}
                >
                  Home
                </Button>
                <Button 
                  color="primary" 
                  component={Link} 
                  to="/about"
                  sx={{ 
                    fontWeight: 'medium',
                    color: 'text.primary',
                    '&:hover': { 
                      backgroundColor: 'rgba(30, 64, 175, 0.05)',
                      color: 'primary.main'
                    } 
                  }}
                >
                  About
                </Button>
                <Button 
                  color="primary" 
                  component={Link} 
                  to="/contact"
                  sx={{ 
                    fontWeight: 'medium',
                    color: 'text.primary',
                    '&:hover': { 
                      backgroundColor: 'rgba(30, 64, 175, 0.05)',
                      color: 'primary.main'
                    } 
                  }}
                >
                  Contact
                </Button>
                
                <Button 
                  variant="contained"
                  sx={{ 
                    ml: 2,
                    background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
                    }
                  }}
                >
                  Donate Now
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Main Content */}
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          {/* Enhanced Footer */}
          <Box
            component="footer"
            sx={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
              color: 'white',
              py: 6,
              mt: 'auto',
            }}
          >
            <Container maxWidth="lg">
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Heart size={28} style={{ marginRight: '12px' }} />
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      Care4Youth
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                    Dedicated to bringing hope, joy, and support to children and families in need. 
                    Every child deserves to dream, smile, and thrive.
                  </Typography>
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Quick Links
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button 
                      component={Link} 
                      to="/about" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        p: 0,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      About Our Mission
                    </Button>
                    <Button 
                      component={Link} 
                      to="/contact" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        p: 0,
                        '&:hover': { color: 'white' }
                      }}
                    >
                      Get Involved
                    </Button>
                  </Box>
                </Box>
                
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Connect With Us
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 1 }}>
                    Follow us on Instagram @care4youth
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Join our community of hope
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)', 
                mt: 4, 
                pt: 3, 
                textAlign: 'center' 
              }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  © 2025 Care4Youth. Made with ❤️ for children everywhere.
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;