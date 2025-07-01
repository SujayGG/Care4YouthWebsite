require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// Endpoint to create a payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, email, name, isMonthly } = req.body;

  if (!amount || amount < 50) {
    return res.status(400).json({ error: 'Minimum donation is $0.50' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // amount in cents
      currency: 'usd',
      receipt_email: email,
      metadata: {
        donor_name: name,
        donor_email: email,
        recurring: isMonthly ? 'monthly' : 'one-time',
      },
      description: isMonthly ? 'Monthly Donation' : 'One-Time Donation',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 