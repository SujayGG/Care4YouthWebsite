import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  Button
} from '@mui/material';
import { 
  Heart, 
  Home as HomeIcon, 
  Gift, 
  Users, 
  BookOpen, 
  Activity,
  Star,
  TrendingUp
} from 'lucide-react';
import DonateButton from './components/DonateButton';
import SocialShare from './components/SocialShare';
import { Helmet } from 'react-helmet-async';

const programs = [
  {
    title: "Family Support Program",
    icon: <HomeIcon size={32} />,
    description: "Comprehensive support for families facing housing insecurity, food insecurity, and other basic needs challenges.",
    impact: "500+ families supported annually",
    services: ["Housing assistance", "Food security", "Utility support", "Case management"],
    color: "#1e40af"
  },
  {
    title: "Wish Fulfillment",
    icon: <Gift size={32} />,
    description: "Making dreams come true through special experiences and gifts that bring smiles and create lasting memories.",
    impact: "1,200+ wishes granted",
    services: ["Dream experiences", "Educational gifts", "Medical equipment", "Special events"],
    color: "#f59e0b"
  },
  {
    title: "Community Care",
    icon: <Users size={32} />,
    description: "Building a network of support through volunteers, mentorship, and community engagement programs.",
    impact: "2,500+ volunteers engaged",
    services: ["Mentorship programs", "Community events", "Support groups", "Outreach initiatives"],
    color: "#10b981"
  },
  {
    title: "Educational Support",
    icon: <BookOpen size={32} />,
    description: "Ensuring every child has access to quality education and the resources they need to succeed academically.",
    impact: "3,000+ students supported",
    services: ["Tutoring programs", "School supplies", "Scholarships", "After-school programs"],
    color: "#8b5cf6"
  },
  {
    title: "Health & Wellness",
    icon: <Activity size={32} />,
    description: "Providing comprehensive healthcare services and promoting healthy lifestyles for children and families.",
    impact: "4,000+ health visits annually",
    services: ["Medical care", "Mental health support", "Nutrition programs", "Fitness activities"],
    color: "#ef4444"
  },
  {
    title: "Emergency Response",
    icon: <Heart size={32} />,
    description: "Rapid response support for families facing immediate crises and emergency situations.",
    impact: "24/7 crisis support",
    services: ["Emergency assistance", "Crisis intervention", "Resource coordination", "Follow-up care"],
    color: "#f97316"
  }
];

const impactStats = [
  { number: "5,000+", label: "Children Helped", icon: <Heart size={24} /> },
  { number: "150+", label: "Programs Active", icon: <Activity size={24} /> },
  { number: "95%", label: "Success Rate", icon: <TrendingUp size={24} /> },
  { number: "25", label: "Years of Service", icon: <Star size={24} /> }
];

const Programs = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Helmet>
        <title>Programs | Care4Youth</title>
        <meta name="description" content="Explore Care4Youth's programs supporting children and families: family support, wish fulfillment, education, health, and more." />
        <meta property="og:title" content="Programs | Care4Youth" />
        <meta property="og:description" content="Explore Care4Youth's programs supporting children and families: family support, wish fulfillment, education, health, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://SujayGG.github.io/Care4YouthWebsite/programs" />
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
            <Activity size={64} style={{ marginBottom: '2rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
              Our Programs (TBD)
            </Typography>
            <Typography variant="h5" sx={{ 
              mb: 4, 
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Comprehensive support services designed to meet the diverse needs of children 
              and families in our community. Every program is crafted with care and purpose.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Impact Stats */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {impactStats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <Box sx={{ 
                  color: '#1e40af', 
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {stat.icon}
                </Box>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800, 
                  color: '#1e40af',
                  mb: 1
                }}>
                  {stat.number}
                </Typography>
                <Typography variant="h6" sx={{ color: '#6b7280' }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Programs Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: '#1f2937',
            mb: 3
          }}>
            How We Help
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#6b7280',
            maxWidth: 600,
            mx: 'auto'
          }}>
            Our programs address the full spectrum of needs that children and families face, 
            from basic necessities to educational and emotional support.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {programs.map((program, index) => (
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
                  <Box sx={{ 
                    color: program.color, 
                    mb: 3,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {program.icon}
                  </Box>
                  
                  <Typography variant="h5" sx={{ 
                    fontWeight: 700, 
                    color: '#1f2937',
                    mb: 2,
                    textAlign: 'center'
                  }}>
                    {program.title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ 
                    color: '#6b7280',
                    mb: 3,
                    lineHeight: 1.6,
                    textAlign: 'center'
                  }}>
                    {program.description}
                  </Typography>

                  <Box sx={{ 
                    backgroundColor: `${program.color}10`, 
                    p: 2, 
                    borderRadius: 2, 
                    mb: 3,
                    textAlign: 'center'
                  }}>
                    <Typography variant="body2" sx={{ 
                      color: program.color,
                      fontWeight: 600
                    }}>
                      {program.impact}
                    </Typography>
                  </Box>

                  <Typography variant="subtitle2" sx={{ 
                    fontWeight: 600, 
                    color: '#374151',
                    mb: 2
                  }}>
                    Services Include:
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    {program.services.map((service, serviceIndex) => (
                      <Chip
                        key={serviceIndex}
                        label={service}
                        size="small"
                        sx={{
                          m: 0.5,
                          backgroundColor: `${program.color}15`,
                          color: program.color,
                          fontWeight: 500
                        }}
                      />
                    ))}
                  </Box>

                  <DonateButton 
                    fullWidth 
                    variant="outlined"
                    sx={{
                      borderColor: program.color,
                      color: program.color,
                      '&:hover': {
                        borderColor: program.color,
                        backgroundColor: `${program.color}10`
                      }
                    }}
                  >
                    Support This Program
                  </DonateButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Success Stories */}
      <Box sx={{ backgroundColor: '#eff6ff', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              color: '#1f2937',
              mb: 3
            }}>
              Success Stories
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#6b7280',
              maxWidth: 600,
              mx: 'auto'
            }}>
              Real stories from the children and families whose lives have been transformed 
              through our programs.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 2
                }}>
                  "A New Beginning"
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#6b7280',
                  lineHeight: 1.6,
                  mb: 3
                }}>
                  "Thanks to Care4Youth's Family Support Program, we found stable housing 
                  and my children can focus on their education. We're forever grateful."
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#f59e0b',
                  fontWeight: 600
                }}>
                  — Maria & Family
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 2
                }}>
                  "Dreams Come True"
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#6b7280',
                  lineHeight: 1.6,
                  mb: 3
                }}>
                  "When Care4Youth granted my wish to meet my favorite author, it wasn't 
                  just about the book signing—it was about believing in possibilities."
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#f59e0b',
                  fontWeight: 600
                }}>
                  — Alex, Age 12
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#1f2937',
                  mb: 2
                }}>
                  "Community Support"
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#6b7280',
                  lineHeight: 1.6,
                  mb: 3
                }}>
                  "The mentorship program connected my son with positive role models who 
                  helped him discover his passion for science and technology."
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#f59e0b',
                  fontWeight: 600
                }}>
                  — David's Mom
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Get Involved */}
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
            Get Involved
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#6b7280',
            mb: 4,
            maxWidth: 600,
            mx: 'auto'
          }}>
            Your support makes these programs possible. Whether through volunteering, 
            donating, or spreading awareness, you can help us continue our mission.
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
              Volunteer With Us
            </Button>
          </Box>
          <Box sx={{ mt: 4 }}>
            <SocialShare title="Explore Care4Youth Programs" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Programs; 