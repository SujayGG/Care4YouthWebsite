import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { Heart, Star, Crown, Award } from 'lucide-react';

const donorLevels = {
  bronze: { name: 'Bronze Supporter', minAmount: 100, icon: <Heart size={20} />, color: '#cd7f32' },
    silver: { name: 'Silver Supporter', minAmount: 500, icon: <Star size={20} />, color: '#c0c0c0' },
    gold: { name: 'Gold Supporter', minAmount: 1000, icon: <Award size={20} />, color: '#ffd700' },
    platinum: { name: 'Platinum Supporter', minAmount: 5000, icon: <Crown size={20} />, color: '#e5e4e2' }
};

const sampleDonors = [
  { name: 'Anonymous', level: 'bronze', amount: 150, date: '2024-01-15', anonymous: true },
  { name: 'Sarah Johnson', level: 'silver', amount: 750, date: '2024-02-20', anonymous: false },
  { name: 'Anonymous', level: 'gold', amount: 2500, date: '2024-03-10', anonymous: true },
  { name: 'Michael Chen', level: 'bronze', amount: 200, date: '2024-03-15', anonymous: false },
  { name: 'Anonymous', level: 'platinum', amount: 10000, date: '2024-03-20', anonymous: true },
  { name: 'Emily Rodriguez', level: 'silver', amount: 600, date: '2024-03-25', anonymous: false }
];

const DonorWall = () => {
  const [showOptIn, setShowOptIn] = useState(false);
  const [optInData, setOptInData] = useState({
    name: '',
    email: '',
    allowRecognition: false,
    anonymous: false
  });

  const handleOptInSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save to your backend
    console.log('Opt-in submitted:', optInData);
    setShowOptIn(false);
    setOptInData({ name: '', email: '', allowRecognition: false, anonymous: false });
  };

  const getDonorDisplay = (donor) => {
    if (donor.anonymous) {
      return 'Anonymous Supporter';
    }
    return donor.name;
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#1f2937', mb: 2 }}>
          Donor Recognition Wall
        </Typography>
        <Typography variant="h6" sx={{ color: '#6b7280', mb: 3 }}>
          Thank you to our generous supporters who make our mission possible
        </Typography>
        <Button
          variant="outlined"
          onClick={() => setShowOptIn(true)}
          sx={{
            borderColor: '#1e40af',
            color: '#1e40af',
            '&:hover': { borderColor: '#1e3a8a', backgroundColor: 'rgba(30, 64, 175, 0.05)' }
          }}
        >
          Opt-in to Recognition
        </Button>
      </Box>

      {/* Donor Levels Legend */}
      <Box sx={{ mb: 4, p: 3, backgroundColor: '#f9fafb', borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Recognition Levels
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(donorLevels).map(([key, level]) => (
            <Grid item xs={6} sm={3} key={key}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ color: level.color }}>
                  {level.icon}
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {level.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Donors Grid */}
      <Grid container spacing={3}>
        {sampleDonors.map((donor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              height: '100%',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }}>
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Avatar sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: donorLevels[donor.level].color,
                  color: 'white'
                }}>
                  {donorLevels[donor.level].icon}
                </Avatar>
                
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {getDonorDisplay(donor)}
                </Typography>
                
                <Chip
                  label={donorLevels[donor.level].name}
                  size="small"
                  sx={{
                    backgroundColor: `${donorLevels[donor.level].color}20`,
                    color: donorLevels[donor.level].color,
                    fontWeight: 600,
                    mb: 1
                  }}
                />
                
                <Typography variant="body2" sx={{ color: '#6b7280' }}>
                  {new Date(donor.date).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Opt-in Dialog */}
      <Dialog open={showOptIn} onClose={() => setShowOptIn(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Opt-in to Donor Recognition</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 3, color: '#6b7280' }}>
            Choose how you'd like to be recognized on our donor wall. You can opt-in or out at any time.
          </Typography>
          
          <Box component="form" onSubmit={handleOptInSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              value={optInData.name}
              onChange={(e) => setOptInData({...optInData, name: e.target.value})}
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={optInData.email}
              onChange={(e) => setOptInData({...optInData, email: e.target.value})}
              sx={{ mb: 2 }}
            />
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={optInData.allowRecognition}
                  onChange={(e) => setOptInData({...optInData, allowRecognition: e.target.checked})}
                />
              }
              label="Allow my name to appear on the donor wall"
              sx={{ mb: 1 }}
            />
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={optInData.anonymous}
                  onChange={(e) => setOptInData({...optInData, anonymous: e.target.checked})}
                  disabled={!optInData.allowRecognition}
                />
              }
              label="Show as 'Anonymous Supporter'"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowOptIn(false)}>Cancel</Button>
          <Button onClick={handleOptInSubmit} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DonorWall; 