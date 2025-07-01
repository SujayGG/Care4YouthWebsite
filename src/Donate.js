import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
  Paper
} from '@mui/material';
import { Heart, Users, Gift, Home as HomeIcon, Star, TrendingUp } from 'lucide-react';
import DonateButton from './components/DonateButton';
import SocialShare from './components/SocialShare';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const impactStories = [
  {
    title: "Sarah's Story",
    description: "Thanks to your donations, Sarah received the medical care she needed and is now thriving in school.",
    impact: "Medical Care",
    amount: "$2,500"
  },
  {
    title: "The Johnson Family",
    description: "Your support provided housing and meals for a family of four during their most difficult time.",
    impact: "Family Support",
    amount: "$1,800"
  },
  {
    title: "Community Garden Project",
    description: "Together we built a community garden that now feeds 50 families fresh produce every week.",
    impact: "Community Program",
    amount: "$5,000"
  }
];

const donationTiers = [
  {
    title: "Hope Builder",
    amount: 25,
    description: "Provides a meal for a family in need",
    benefits: ["Tax-deductible receipt", "Impact report", "Thank you card"]
  },
  {
    title: "Dream Supporter",
    amount: 50,
    description: "Supports a child for an entire week",
    benefits: ["All previous benefits", "Monthly newsletter", "Photo updates"]
  },
  {
    title: "Life Changer",
    amount: 100,
    description: "Funds a month of comprehensive programs",
    benefits: ["All previous benefits", "Personal thank you call", "Annual report"]
  },
  {
    title: "Legacy Creator",
    amount: 250,
    description: "Creates lasting impact for multiple families",
    benefits: ["All previous benefits", "VIP event invitation", "Named recognition"]
  }
];

const Donate = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Helmet>
        <title>Donate | Care4Youth</title>
        <meta name="description" content="Support Care4Youth by making a donation. Your contribution helps children and families in need." />
        <meta property="og:title" content="Donate | Care4Youth" />
        <meta property="og:description" content="Support Care4Youth by making a donation. Your contribution helps children and families in need." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://SujayGG.github.io/Care4YouthWebsite/donate" />
      </Helmet>
      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1000 1000\'><defs><radialGradient id=\'c\' cx=\'50%\' cy=\'50%\' r=\'50%\'><stop offset=\'0%\' stop-color=\'%23ffffff\' stop-opacity=\'0.1\'/><stop offset=\'100%\' stop-color=\'%23ffffff\' stop-opacity=\'0\'/></radialGradient></defs><circle cx=\'100\' cy=\'100\' r=\'80\' fill=\'url(%23c)\'/><circle cx=\'900\' cy=\'800\' r=\'120\' fill=\'url(%23c)\'/><circle cx=\'500\' cy=\'200\' r=\'100\' fill=\'url(%23c)\'/></svg>")',
          opacity: 0.3,
          animation: 'float 25s ease-in-out infinite reverse'
        }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Heart size={64} style={{ marginBottom: '2rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
              Make a Real Difference
            </Typography>
            <Typography variant="h5" sx={{ 
              mb: 4, 
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Every dollar you donate directly supports children and families in need. 
              Join our mission to bring hope, joy, and healing to those who need it most.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <DonateButton 
                size="large" 
                sx={{ 
                  fontSize: '1.25rem',
                  px: 4,
                  py: 1.5
                }}
              >
                Donate Now
              </DonateButton>
              <Button
                variant="outlined"
                onClick={handleLearnMore}
                sx={{
                  borderColor: 'rgba(255,255,255,0.8)',
                  color: 'white',
                  fontSize: '1.25rem',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Impact Stats */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#1e40af',
                mb: 1
              }}>
                5,000+
              </Typography>
              <Typography variant="h6" sx={{ color: '#6b7280' }}>
                Children Helped
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#1e40af',
                mb: 1
              }}>
                $2.5M
              </Typography>
              <Typography variant="h6" sx={{ color: '#6b7280' }}>
                Funds Raised
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#1e40af',
                mb: 1
              }}>
                95%
              </Typography>
              <Typography variant="h6" sx={{ color: '#6b7280' }}>
                Goes to Programs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#1e40af',
                mb: 1
              }}>
                25
              </Typography>
              <Typography variant="h6" sx={{ color: '#6b7280' }}>
                Years of Service
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Donation Tiers */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: '#1f2937',
            mb: 2
          }}>
            Choose Your Impact Level
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#6b7280',
            maxWidth: 600,
            mx: 'auto'
          }}>
            Every donation level comes with meaningful benefits and creates real change in children's lives.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {donationTiers.map((tier, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent sx={{ 
                  p: 3, 
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    color: '#1e40af',
                    mb: 1
                  }}>
                    {tier.title}
                  </Typography>
                  
                  <Typography variant="h4" sx={{ 
                    fontWeight: 800, 
                    color: '#f59e0b',
                    mb: 2
                  }}>
                    ${tier.amount}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ 
                    color: '#6b7280',
                    mb: 3,
                    flexGrow: 1
                  }}>
                    {tier.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      mb: 2,
                      color: '#374151'
                    }}>
                      Benefits Include:
                    </Typography>
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <Box key={benefitIndex} sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 1 
                      }}>
                        <Star size={16} style={{ color: '#f59e0b', marginRight: '8px' }} />
                        <Typography variant="body2" sx={{ color: '#6b7280' }}>
                          {benefit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <DonateButton 
                    fullWidth 
                    variant="contained"
                    sx={{ mt: 'auto' }}
                  >
                    Donate ${tier.amount}
                  </DonateButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Stories */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: '#1f2937',
            mb: 2
          }}>
            Real Stories, Real Impact
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#6b7280',
            maxWidth: 600,
            mx: 'auto'
          }}>
            See how your donations are making a difference in the lives of children and families.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {impactStories.map((story, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{
                p: 3,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Chip 
                    label={story.impact} 
                    sx={{ 
                      backgroundColor: '#eff6ff', 
                      color: '#1e40af',
                      fontWeight: 600
                    }} 
                  />
                  <Typography variant="h6" sx={{ 
                    fontWeight: 700, 
                    color: '#f59e0b'
                  }}>
                    {story.amount}
                  </Typography>
                </Box>
                
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 2
                }}>
                  {story.title}
                </Typography>
                
                <Typography variant="body1" sx={{ 
                  color: '#6b7280',
                  lineHeight: 1.6
                }}>
                  {story.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Donate Section */}
      <Box sx={{ 
        backgroundColor: '#eff6ff', 
        py: 6 
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              color: '#1f2937',
              mb: 2
            }}>
              Why Donate to Care4Youth?
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <TrendingUp size={48} style={{ color: '#1e40af', marginBottom: '1rem' }} />
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 2
                }}>
                  Proven Impact
                </Typography>
                <Typography variant="body1" sx={{ color: '#6b7280' }}>
                  Over 25 years of experience helping children and families in need with measurable results.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Heart size={48} style={{ color: '#1e40af', marginBottom: '1rem' }} />
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 2
                }}>
                  Direct Support
                </Typography>
                <Typography variant="body1" sx={{ color: '#6b7280' }}>
                  95% of every dollar goes directly to programs and services for children and families.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Users size={48} style={{ color: '#1e40af', marginBottom: '1rem' }} />
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 2
                }}>
                  Community Focused
                </Typography>
                <Typography variant="body1" sx={{ color: '#6b7280' }}>
                  We work closely with local communities to address the specific needs of children and families.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ 
          textAlign: 'center',
          p: 6,
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: '#1f2937',
            mb: 3
          }}>
            Ready to Make a Difference?
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#6b7280',
            mb: 4,
            maxWidth: 600,
            mx: 'auto'
          }}>
            Your donation today will create lasting change in the lives of children and families who need it most.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <DonateButton 
              size="large" 
              sx={{ 
                fontSize: '1.25rem',
                px: 4,
                py: 1.5
              }}
            >
              Donate Now
            </DonateButton>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#1e40af',
                color: '#1e40af',
                fontSize: '1.25rem',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: '#1e3a8a',
                  backgroundColor: 'rgba(30, 64, 175, 0.05)'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box sx={{ mt: 4 }}>
            <SocialShare title="Support Care4Youth - Donate Today!" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Donate; 