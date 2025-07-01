import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import { Download, X, Smartphone } from 'lucide-react';

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                        (window.navigator && window.navigator.standalone === true);
    
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
      setShowSnackbar(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    } catch (error) {
      console.error('Error during install prompt:', error);
    }
    
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  if (isInstalled || !showInstallPrompt) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: { xs: '90%', sm: 400 }
        }}
      >
        <Card
          sx={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'white',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(30, 64, 175, 0.3)'
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Smartphone size={24} style={{ marginRight: 12 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 1 }}>
                Install Care4Youth App
              </Typography>
              <IconButton
                onClick={handleDismiss}
                sx={{ color: 'white', p: 0.5 }}
              >
                <X size={20} />
              </IconButton>
            </Box>
            
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              Get quick access to our resources, events, and donation features. Install our app for a better experience!
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<Download size={16} />}
                onClick={handleInstallClick}
                sx={{
                  backgroundColor: 'white',
                  color: '#1e40af',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#f8fafc'
                  }
                }}
              >
                Install App
              </Button>
              <Button
                variant="text"
                onClick={handleDismiss}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Maybe Later
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Care4Youth app installed successfully! 🎉
        </Alert>
      </Snackbar>
    </>
  );
};

export default PWAInstallPrompt; 