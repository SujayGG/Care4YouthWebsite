import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Alert,
  CircularProgress,
  Chip,
  Divider
} from '@mui/material';
import { Heart, CreditCard, CheckCircle, X } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Initialize Stripe (you'll need to replace with your actual publishable key)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_publishable_key_here');

const donationAmounts = [
  { value: 25, label: '$25', description: 'Provides a meal for a family' },
  { value: 50, label: '$50', description: 'Supports a child for a week' },
  { value: 100, label: '$100', description: 'Funds a month of programs' },
  { value: 250, label: '$250', description: 'Creates lasting impact' },
  { value: 500, label: '$500', description: 'Transforms lives' },
  { value: 'custom', label: 'Custom Amount', description: 'Choose your own amount' }
];

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const DonationForm = ({ onClose, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    if (value !== 'custom') {
      setCustomAmount('');
    }
  };

  const getFinalAmount = () => {
    return amount === 'custom' ? parseFloat(customAmount) : amount;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const finalAmount = getFinalAmount();
    if (!finalAmount || finalAmount < 1) {
      setError('Please enter a valid amount');
      return;
    }

    if (!email || !name) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Create payment intent on your backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount * 100, // Convert to cents
          email,
          name,
          isMonthly,
        }),
      });

      const { clientSecret, error: serverError } = await response.json();

      if (serverError) {
        setError(serverError);
        setLoading(false);
        return;
      }

      // Confirm payment with Stripe
      const { error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name,
            email,
          },
        },
      });

      if (paymentError) {
        setError(paymentError.message);
      } else {
        setSuccess(true);
        setTimeout(() => {
          onSuccess && onSuccess();
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  if (success) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <CheckCircle size={64} style={{ color: '#10b981', marginBottom: '1rem' }} />
        <Typography variant="h5" sx={{ color: '#10b981', mb: 2 }}>
          Thank You for Your Donation!
        </Typography>
        <Typography variant="body1" sx={{ color: '#6b7280' }}>
          Your generous contribution will make a real difference in children's lives.
        </Typography>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', color: '#1e40af' }}>
        Make a Difference Today
      </Typography>

      {/* Donation Amount Selection */}
      <FormControl component="fieldset" sx={{ mb: 3, width: '100%' }}>
        <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
          Choose Your Donation Amount
        </FormLabel>
        <RadioGroup
          value={amount}
          onChange={handleAmountChange}
          sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}
        >
          {donationAmounts.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {option.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>
                    {option.description}
                  </Typography>
                </Box>
              }
              sx={{
                border: '1px solid #e5e7eb',
                borderRadius: 2,
                p: 1,
                m: 0,
                '&.Mui-checked': {
                  borderColor: '#1e40af',
                  backgroundColor: 'rgba(30, 64, 175, 0.05)',
                },
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {/* Custom Amount Input */}
      {amount === 'custom' && (
        <TextField
          fullWidth
          label="Custom Amount ($)"
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          sx={{ mb: 3 }}
          inputProps={{ min: 1, step: 0.01 }}
        />
      )}

      {/* Monthly Donation Toggle */}
      <Box sx={{ mb: 3, p: 2, backgroundColor: '#f3f4f6', borderRadius: 2 }}>
        <FormControlLabel
          control={
            <Radio
              checked={isMonthly}
              onChange={(e) => setIsMonthly(e.target.checked)}
            />
          }
          label={
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Make this a monthly donation
              </Typography>
              <Typography variant="caption" sx={{ color: '#6b7280' }}>
                Provide ongoing support to children in need
              </Typography>
            </Box>
          }
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Personal Information */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Your Information
      </Typography>
      
      <TextField
        fullWidth
        label="Full Name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
        required
      />
      
      <TextField
        fullWidth
        label="Email Address *"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 3 }}
        required
      />

      {/* Payment Information */}
      <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <CreditCard size={20} />
        Payment Information
      </Typography>
      
      <Box sx={{ 
        p: 2, 
        border: '1px solid #e5e7eb', 
        borderRadius: 2, 
        backgroundColor: '#fafafa',
        mb: 3 
      }}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </Box>

      {/* Donation Summary */}
      <Box sx={{ 
        p: 2, 
        backgroundColor: '#eff6ff', 
        borderRadius: 2, 
        mb: 3,
        border: '1px solid #dbeafe'
      }}>
        <Typography variant="body2" sx={{ color: '#1e40af', mb: 1 }}>
          <strong>Donation Summary:</strong>
        </Typography>
        <Typography variant="body2" sx={{ color: '#374151' }}>
          Amount: ${getFinalAmount() || 0}
        </Typography>
        {isMonthly && (
          <Chip 
            label="Monthly Donation" 
            size="small" 
            sx={{ 
              mt: 1, 
              backgroundColor: '#f59e0b', 
              color: 'white',
              fontWeight: 600
            }} 
          />
        )}
      </Box>

      {/* Action Buttons */}
      <DialogActions sx={{ px: 0, pt: 2 }}>
        <Button
          onClick={onClose}
          sx={{ color: '#6b7280' }}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          disabled={loading || !stripe}
          sx={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
              background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
            },
            '&:disabled': {
              background: '#e5e7eb',
              color: '#9ca3af',
            }
          }}
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: 'white' }} />
          ) : (
            `Donate $${getFinalAmount() || 0}`
          )}
        </Button>
      </DialogActions>
    </Box>
  );
};

const DonationModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          maxHeight: '90vh',
        }
      }}
    >
      <DialogTitle sx={{ 
        pb: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Heart size={24} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Support Care4Youth
          </Typography>
        </Box>
        <Button
          onClick={onClose}
          sx={{ color: 'white', minWidth: 'auto', p: 0 }}
        >
          <X size={20} />
        </Button>
      </DialogTitle>
      
      <DialogContent sx={{ p: 3 }}>
        <Elements stripe={stripePromise}>
          <DonationForm onClose={onClose} />
        </Elements>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal; 