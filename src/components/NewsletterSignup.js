import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, Snackbar } from '@mui/material';
import { Mail, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_44fcwmi',
        'template_j3hnloh',
        { user_email: email },
        'czWu_aOTVXmIGiMZf'
      );
      setSnackbar({ open: true, message: 'Thank you for subscribing!', severity: 'success' });
      setEmail('');
    } catch (error) {
      setSnackbar({ open: true, message: 'Subscription failed. Please try again.', severity: 'error' });
    }
    setLoading(false);
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  return (
    <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: '0 4px 16px rgba(30,64,175,0.08)', textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#1e40af', fontWeight: 700 }}>
        Subscribe to Our Newsletter
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: '#6b7280' }}>
        Get the latest updates, stories, and ways to help—straight to your inbox.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          type="email"
          label="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          size="small"
          sx={{ minWidth: 220 }}
        />
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          startIcon={<Mail size={16} />}
          sx={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            color: 'white',
            fontWeight: 'bold',
            px: 3,
            '&:hover': {
              background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
            }
          }}
        >
          Subscribe
        </Button>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          icon={<CheckCircle />}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsletterSignup; 