import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Paper,
  Button
} from '@mui/material';
import { Heart, Users, Target, Award, Star, Instagram } from 'lucide-react';
import DonateButton from './components/DonateButton';
import { Helmet } from 'react-helmet-async';


const values = [
  {
    icon: <Heart size={32} />,
    title: "Compassion",
    description: "We approach every child and family with empathy and understanding."
  },
  {
    icon: <Users size={32} />,
    title: "Community",
    description: "Building strong networks of support for lasting positive change."
  },
  {
    icon: <Target size={32} />,
    title: "Impact",
    description: "Focused on measurable outcomes that transform lives."
  },
  {
    icon: <Award size={32} />,
    title: "Excellence",
    description: "Delivering the highest quality care and support services."
  }
];

const About = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <Helmet>
        <title>About | Care4Youth</title>
        <meta name="description" content="Learn about Care4Youth's mission, vision, story, and team dedicated to supporting children and families." />
        <meta property="og:title" content="About | Care4Youth" />
        <meta property="og:description" content="Learn about Care4Youth's mission, vision, story, and team dedicated to supporting children and families." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://SujayGG.github.io/Care4YouthWebsite/about" />
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
            <Heart size={64} style={{ marginBottom: '2rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }} />
            <Typography variant="h2" sx={{ 
              fontWeight: 800, 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}>
              About Care4Youth
            </Typography>
            <Typography variant="h5" sx={{ 
              mb: 4, 
              opacity: 0.9,
              lineHeight: 1.6
            }}>
              Dedicated to bringing hope, joy, and support to children and families in need. 
              Every child deserves to dream, smile, and thrive.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#1e40af',
                mb: 3
              }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: '#374151',
                mb: 3
              }}>
                To provide comprehensive support, medical care, and hope to children and families 
                facing life's greatest challenges. We believe every child deserves access to 
                quality healthcare, education, and the opportunity to reach their full potential.
              </Typography>
              <DonateButton variant="contained" size="large">
                Support Our Mission
              </DonateButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#1e40af',
                mb: 3
              }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: '#374151',
                mb: 3
              }}>
                A world where every child has the resources, support, and opportunities they need 
                to grow, learn, and succeed. We envision communities where families thrive and 
                children's dreams become reality.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Instagram size={20} />
                <Typography variant="body2" sx={{ color: '#6b7280' }}>
                  Follow our journey @care4_youth
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Our Story */}
      <Box sx={{ backgroundColor: '#eff6ff', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 800, 
              color: '#1f2937',
              mb: 3
            }}>
              Our Story (TBD)
            </Typography>
          </Box>
          
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ 
                fontWeight: 700, 
                color: '#1e40af',
                mb: 3
              }}>
                From plano to plano!
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#374151',
                mb: 3
              }}>
                Care4Youth is NOT edible
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#374151',
                mb: 3
              }}>
                What started as an idea to help children in hospitals has grown into a nonprofit organization that helps children in hospitals and communities.
              </Typography>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#374151'
              }}>
                Today, we continue to expand our reach and impact, guided by our core belief 
                that every child deserves the opportunity to thrive.
              </Typography>
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
                  0.75+ Years
                </Typography>
                <Typography variant="h6" sx={{ color: '#6b7280', mb: 3 }}>
                  of Service to Children
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                      5,000+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      Children Helped
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                      10+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      Programs
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                      1,200+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      Volunteers
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e40af' }}>
                      95%
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280' }}>
                      Program Funds
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Founders Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#1e40af', mb: 6, textAlign: 'center', letterSpacing: 2 }}>
            Meet the Founders
          </Typography>
          <Grid container spacing={6} justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto', flexWrap: 'nowrap' }}>
            {[{
              name: 'Kritika Kumar',
              role: 'Founder',
              img: require('./assets/team/kritika_kumar_founder.jpeg'),
              bio: `Hi there! My name is Kritika Kumar and I am one of your founders are Care 4 Youth! Through this nonprofit, my mission is work with many communities, hospitals, and volunteers to not only amplify the pediatric environment but also meet many dedicated individuals along the way! Not only am I committed to the cause, I am thrilled to see how big C4U can become and one day be something that many patients enjoy being a part of due to its engaging interactions and life-long lessons!`
            }, {
              name: 'Aditi Gaddam',
              role: 'Founder',
              img: require('./assets/team/aditi_gaddam_founder.jpeg'),
              bio: `Hey everyone! I'm Aditi Gaddam, a co-founder of Care 4 Youth. Through this nonprofit, my mission is to help enhance pediatric hospital environments through creativity, resources, and interaction. Throughout this year, the team and I will work hard to organize events, collaborate with volunteers and see visible change in community hospitals and beyond. I am so excited to serve as a leader for this organization and work with a growing team to reach our goals!`
            }].map((member, idx) => (
              <Grid item xs={12} sm={6} key={member.name}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 5,
                    boxShadow: 6,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 12,
                    },
                    borderTop: idx === 0 ? '6px solid #f59e0b' : '6px solid #1e40af',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <Avatar src={member.img} alt={member.name} sx={{ width: 140, height: 140, mb: 2, boxShadow: 3, border: '4px solid #e0e7ff' }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#1e40af', mb: 0.5 }}>{member.name}</Typography>
                  <Typography variant="subtitle1" sx={{ color: '#f59e0b', fontWeight: 700, mb: 2, letterSpacing: 1, textTransform: 'uppercase' }}>{member.role}</Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#374151', fontSize: '1.1rem', lineHeight: 1.7 }}>{member.bio}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Executive Team Section */}
      <Box sx={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #fef9c3 100%)', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#1e40af', mb: 6, textAlign: 'center', letterSpacing: 2 }}>
            Executive Team
          </Typography>
          <Grid container spacing={5} justifyContent="center">
            {[
              {
                name: 'Aditi Gaddam',
                role: 'Chief Executive Officer',
                img: require('./assets/team/aditi_gaddam_board.jpeg'),
              },
              {
                name: 'Kritika Kumar',
                role: 'Chief Operating Officer',
                img: require('./assets/team/kritika_kumar_board.jpeg'),
              },
              {
                name: 'Aayush Patel',
                role: 'Chief Financial Officer',
                img: require('./assets/team/aayush_patel_board.jpeg'),
              },
              {
                name: 'Vishi Krishna',
                role: 'Secretary',
                img: require('./assets/team/vishi_krishna.jpeg'),
              },
              {
                name: 'Aadi Patel',
                role: 'Event Planner',
                img: require('./assets/team/aadi_patel.jpeg'),
              },
              {
                name: 'Ashwin Goel',
                role: 'Tech Team Lead',
                img: require('./assets/team/ashwin_goel_board.jpeg'),
              }
            ].map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.name}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 5,
                    boxShadow: 4,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'scale(1.04)',
                      boxShadow: 10,
                    },
                    borderTop: '6px solid #f59e0b',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    background: 'white',
                  }}
                >
                  <Avatar src={member.img} alt={member.name} sx={{ width: 110, height: 110, mb: 2, boxShadow: 1, border: '3px solid #fef9c3' }} />
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#1e40af', mb: 0.5 }}>{member.name}</Typography>
                  <Typography variant="subtitle2" sx={{ color: '#f59e0b', fontWeight: 600, mb: 1, letterSpacing: 1 }}>{member.role}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

{/* Tech Team Section */}
<Box sx={{ background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)', py: 8 }}>
  <Container maxWidth="lg">
    <Typography variant="h3" sx={{ fontWeight: 900, color: '#1e40af', mb: 6, textAlign: 'center', letterSpacing: 2 }}>
      Tech Team
    </Typography>
    <Grid container spacing={5} justifyContent="center">
      {[
        {
          name: 'Ashwin Goel',
          img: require('./assets/team/ashwin_goel_tech_team_head.jpeg'),
        },
        {
          name: 'Shriyans Gupta',
          img: require('./assets/team/shriyans_gupta.JPEG'),
        },
        {
          name: 'Goutham Ronanki',
          img: require('./assets/team/default_icon.jpeg'),
        },
        {
          name: 'Sujay Gonchigar',
          img: require('./assets/team/default_icon.jpeg'),
        }
      ].map((member) => (
        <Grid item xs={12} sm={6} md={3} key={member.name}>
          <Card
            sx={{
              p: 4,
              borderRadius: 5,
              boxShadow: 4,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.04)',
                boxShadow: 10,
              },
              borderTop: '6px solid #1e40af',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              background: 'white',
              height: '100%',
              minHeight: 250,
            }}
          >
            <Avatar 
              src={member.img} 
              alt={member.name} 
              sx={{ 
                width: 110, 
                height: 110, 
                mb: 2, 
                boxShadow: 1, 
                border: '3px solid #e0e7ff' 
              }} 
            />
            <Typography variant="h6" sx={{ 
              fontWeight: 800, 
              color: '#1e40af', 
              mb: 0.5,
              textAlign: 'center',
              minHeight: '32px',
              display: 'flex',
              alignItems: 'center'
            }}>
              {member.name}
            </Typography>
            <Typography variant="subtitle2" sx={{ 
              color: '#64748b', 
              fontWeight: 600, 
              mb: 1, 
              letterSpacing: 1,
              textAlign: 'center'
            }}>
              Tech Team
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
      {/* Placeholder for the rest of the team */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#1e40af', mb: 4, textAlign: 'center' }}>
          The Rest of Our Team
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', color: '#374151' }}>
          More team members coming soon! Stay tuned for updates.
        </Typography>
      </Container>

      {/* Our Values */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 800, 
            color: '#1f2937',
            mb: 3
          }}>
            Our Values
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#6b7280',
            maxWidth: 600,
            mx: 'auto'
          }}>
            The principles that guide everything we do and every decision we make.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{
                height: '100%',
                textAlign: 'center',
                p: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                }
              }}>
                <CardContent>
                  <Box sx={{ 
                    color: '#1e40af', 
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 700, 
                    color: '#1f2937',
                    mb: 2
                  }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#6b7280',
                    lineHeight: 1.6
                  }}>
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Call to Action */}
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
            Join Our Mission
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#6b7280',
            mb: 4,
            maxWidth: 600,
            mx: 'auto'
          }}>
            Together, we can create lasting change in the lives of children and families. 
            Your support makes our work possible.
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
        </Box>
      </Container>
    </Box>
  );
};

export default About;
