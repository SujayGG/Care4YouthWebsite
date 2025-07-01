import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
  Chip,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { 
  Heart, 
  Users, 
  Clock, 
  MapPin, 
  Star,
  Send,
  CheckCircle,
  Calendar,
  Award
} from 'lucide-react';
import DonateButton from './components/DonateButton';
import { Helmet } from 'react-helmet-async';

const volunteerOpportunities = [
  {
    title: "Mentorship Program",
    description: "Provide guidance and support to children and youth in our community.",
    commitment: "2-4 hours/week",
    location: "Various locations",
    skills: ["Communication", "Patience", "Leadership"],
    category: "Youth Development"
  },
  {
    title: "Event Support",
    description: "Help organize and run community events, fundraisers, and special programs.",
    commitment: "Flexible",
    location: "Main office & community venues",
    skills: ["Organization", "Teamwork", "Customer service"],
    category: "Events"
  },
  {
    title: "Administrative Support",
    description: "Assist with office tasks, data entry, and administrative duties.",
    commitment: "4-8 hours/week",
    location: "Main office",
    skills: ["Computer skills", "Attention to detail", "Organization"],
    category: "Administrative"
  },
  {
    title: "Food Bank Support",
    description: "Help distribute food and essential items to families in need.",
    commitment: "3-6 hours/week",
    location: "Food bank facility",
    skills: ["Physical stamina", "Compassion", "Teamwork"],
    category: "Direct Service"
  },
  {
    title: "Transportation Support",
    description: "Provide rides to families for medical appointments and essential services.",
    commitment: "Flexible",
    location: "Community-wide",
    skills: ["Valid driver's license", "Reliability", "Compassion"],
    category: "Transportation"
  },
  {
    title: "Social Media & Marketing",
    description: "Help create content and manage our social media presence.",
    commitment: "2-4 hours/week",
    location: "Remote",
    skills: ["Social media", "Content creation", "Creativity"],
    category: "Marketing"
  }
];

const volunteerTestimonials = [
  {
    name: "Sarah Johnson",
    role: "Mentor",
    testimonial: "Volunteering with Care4Youth has been one of the most rewarding experiences of my life. Seeing the impact we make on children's lives is incredible.",
    time: "2 years"
  },
  {
    name: "Michael Chen",
    role: "Event Coordinator",
    testimonial: "The team here is amazing and the work we do truly makes a difference. I've met so many wonderful people and learned so much.",
    time: "1 year"
  },
  {
    name: "Emily Rodriguez",
    role: "Food Bank Volunteer",
    testimonial: "Every time I volunteer, I'm reminded of how important community support is. The families we help are so grateful and it's humbling to be part of this.",
    time: "3 years"
  }
];

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    experience: '',
    message: '',
    agreeToTerms: false
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your application! We\'ll contact you within 48 hours.',
      severity: 'success'
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interests: [],
      availability: '',
      experience: '',
      message: '',
      agreeToTerms: false
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleLearnMore = () => {
    navigate('/programs');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Helmet>
        <title>Volunteer | Care4Youth</title>
        <meta name="description" content="Volunteer with Care4Youth and make a difference in the lives of children and families. Apply for opportunities today!" />
        <meta property="og:title" content="Volunteer | Care4Youth" />
        <meta property="og:description" content="Volunteer with Care4Youth and make a difference in the lives of children and families. Apply for opportunities today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://SujayGG.github.io/Care4YouthWebsite/volunteer" />
      </Helmet>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Users size={64} style={{ marginBottom: '2rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
              Volunteer With Us (TBD)
            </Typography>
            <Typography variant="h5" sx={{ 
              mb: 4, 
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Join our community of dedicated volunteers making a real difference 
              in the lives of children and families. Every hour you give creates lasting impact.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Why Volunteer */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              color: '#1f2937',
              mb: 3
            }}>
              Why Volunteer?
            </Typography>
            <Typography variant="body1" sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#374151',
              mb: 3
            }}>
              Volunteering with Care4Youth is more than just giving your time—it's about 
              being part of a community that believes every child deserves to thrive.
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Star size={20} style={{ color: '#f59e0b' }} />
                <Typography variant="body1" sx={{ color: '#374151' }}>
                  Make a direct impact on children's lives
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Star size={20} style={{ color: '#f59e0b' }} />
                <Typography variant="body1" sx={{ color: '#374151' }}>
                  Join a supportive community of like-minded individuals
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Star size={20} style={{ color: '#f59e0b' }} />
                <Typography variant="body1" sx={{ color: '#374151' }}>
                  Gain valuable skills and experience
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Star size={20} style={{ color: '#f59e0b' }} />
                <Typography variant="body1" sx={{ color: '#374151' }}>
                  Flexible scheduling to fit your lifestyle
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 4, 
              backgroundColor: 'white', 
              borderRadius: 3, 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <Typography variant="h4" sx={{ 
                fontWeight: 800, 
                color: '#f59e0b',
                mb: 2
              }}>
                1,200+ Volunteers
              </Typography>
              <Typography variant="h6" sx={{ color: '#6b7280', mb: 3 }}>
                Making a Difference
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                    25,000+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Hours Donated
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                    95%
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Satisfaction Rate
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Volunteer Roles
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                    24/7
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    Support Available
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Volunteer Opportunities */}
      <Box sx={{ backgroundColor: '#eff6ff', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              color: '#1f2937',
              mb: 3
            }}>
              Volunteer Opportunities
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#6b7280',
              maxWidth: 600,
              mx: 'auto'
            }}>
              Find the perfect volunteer role that matches your skills, interests, and schedule.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {volunteerOpportunities.map((opportunity, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Chip 
                      label={opportunity.category} 
                      size="small" 
                      sx={{ 
                        mb: 2,
                        backgroundColor: '#1e40af',
                        color: 'white',
                        fontWeight: 600
                      }} 
                    />
                    
                    <Typography variant="h6" sx={{ 
                      fontWeight: 700, 
                      color: '#1f2937',
                      mb: 2
                    }}>
                      {opportunity.title}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ 
                      color: '#6b7280',
                      mb: 3,
                      lineHeight: 1.6
                    }}>
                      {opportunity.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Clock size={16} style={{ color: '#6b7280', marginRight: '8px' }} />
                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                          {opportunity.commitment}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <MapPin size={16} style={{ color: '#6b7280', marginRight: '8px' }} />
                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                          {opportunity.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      color: '#374151',
                      mb: 2
                    }}>
                      Skills Needed:
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      {opportunity.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          size="small"
                          sx={{
                            m: 0.5,
                            backgroundColor: '#f3f4f6',
                            color: '#374151',
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={handleLearnMore}
                      sx={{
                        borderColor: '#1e40af',
                        color: '#1e40af',
                        '&:hover': {
                          borderColor: '#1e3a8a',
                          backgroundColor: 'rgba(30, 64, 175, 0.05)'
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Volunteer Testimonials */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: '#1f2937',
            mb: 3
          }}>
            Volunteer Stories
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {volunteerTestimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 4, borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Typography variant="body1" sx={{ 
                  color: '#6b7280',
                  lineHeight: 1.6,
                  mb: 3,
                  fontStyle: 'italic'
                }}>
                  "{testimonial.testimonial}"
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 700, 
                      color: '#1f2937'
                    }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#f59e0b', fontWeight: 600 }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    {testimonial.time}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Application Form */}
      <Box sx={{ backgroundColor: '#f9fafb', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              color: '#1f2937',
              mb: 3
            }}>
              Apply to Volunteer
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#6b7280',
              maxWidth: 600,
              mx: 'auto'
            }}>
              Ready to make a difference? Fill out our volunteer application and we'll 
              get back to you within 48 hours.
            </Typography>
          </Box>

          <Paper sx={{ p: 6, borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name *"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name *"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mb: 2, color: '#1f2937' }}>
                    Areas of Interest
                  </Typography>
                  <Grid container spacing={1}>
                    {volunteerOpportunities.map((opportunity, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={formData.interests.includes(opportunity.title)}
                              onChange={() => handleInterestChange(opportunity.title)}
                            />
                          }
                          label={opportunity.title}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Availability</InputLabel>
                    <Select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      label="Availability"
                    >
                      <MenuItem value="weekdays">Weekdays</MenuItem>
                      <MenuItem value="weekends">Weekends</MenuItem>
                      <MenuItem value="evenings">Evenings</MenuItem>
                      <MenuItem value="flexible">Flexible</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Previous Volunteer Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    multiline
                    rows={2}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Why do you want to volunteer with us?"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                        required
                      />
                    }
                    label="I agree to the terms and conditions and understand that this is a volunteer position."
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    disabled={!formData.agreeToTerms}
                    sx={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      color: 'white',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                      }
                    }}
                  >
                    Submit Application
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Success Snackbar */}
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

export default Volunteer; 