import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

const eventCategories = {
  fundraiser: { label: 'Fundraiser', color: '#f59e0b' },
  volunteer: { label: 'Volunteer Event', color: '#10b981' },
  community: { label: 'Community Event', color: '#3b82f6' },
  awareness: { label: 'Awareness Campaign', color: '#8b5cf6' }
};

const sampleEvents = [
  {
    id: 1,
    title: 'Annual Gala Dinner',
    description: 'Join us for our biggest fundraising event of the year. Enjoy dinner, entertainment, and help support children in need.',
    date: '2024-04-15',
    time: '18:00',
    location: 'Grand Hotel Ballroom',
    category: 'fundraiser',
    attendees: 150,
    maxAttendees: 200,
    registrationUrl: '#',
    image: 'https://via.placeholder.com/300x200/1e40af/ffffff?text=Gala+Dinner'
  },
  {
    id: 2,
    title: 'Volunteer Training Day',
    description: 'New volunteer orientation and training session. Learn about our programs and how you can make a difference.',
    date: '2024-04-20',
    time: '10:00',
    location: 'Care4Youth Community Center',
    category: 'volunteer',
    attendees: 25,
    maxAttendees: 30,
    registrationUrl: '#',
    image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Volunteer+Training'
  },
  {
    id: 3,
    title: 'Family Fun Day',
    description: 'A day of activities, games, and fun for families we support. Food, entertainment, and community building.',
    date: '2024-04-25',
    time: '12:00',
    location: 'City Park',
    category: 'community',
    attendees: 80,
    maxAttendees: 100,
    registrationUrl: '#',
    image: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Family+Fun+Day'
  },
  {
    id: 4,
    title: 'Mental Health Awareness Walk',
    description: 'Join us for a 5K walk to raise awareness about children\'s mental health and support our counseling programs.',
    date: '2024-05-01',
    time: '09:00',
    location: 'Downtown Walking Trail',
    category: 'awareness',
    attendees: 120,
    maxAttendees: 150,
    registrationUrl: '#',
    image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Mental+Health+Walk'
  }
];

const EventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    attendees: 1
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Here you would typically save registration to your backend
    console.log('Registration submitted:', registrationData);
    setShowRegistration(false);
    setRegistrationData({ name: '', email: '', phone: '', attendees: 1 });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventStatus = (event) => {
    const now = new Date();
    const eventDate = new Date(event.date);
    if (eventDate < now) return 'past';
    if (event.attendees >= event.maxAttendees) return 'full';
    return 'upcoming';
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#1f2937', mb: 2 }}>
          Upcoming Events
        </Typography>
        <Typography variant="h6" sx={{ color: '#6b7280', mb: 3 }}>
          Join us for fundraisers, volunteer opportunities, and community events
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {sampleEvents.map((event) => {
          const status = getEventStatus(event);
          const isPast = status === 'past';
          const isFull = status === 'full';
          
          return (
            <Grid item xs={12} md={6} lg={3} key={event.id}>
              <Card sx={{
                height: '100%',
                transition: 'all 0.3s ease',
                opacity: isPast ? 0.6 : 1,
                '&:hover': {
                  transform: isPast ? 'none' : 'translateY(-4px)',
                  boxShadow: isPast ? 'none' : '0 8px 25px rgba(0,0,0,0.15)'
                }
              }}>
                <Box sx={{
                  height: 200,
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  <Chip
                    label={eventCategories[event.category].label}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: `${eventCategories[event.category].color}20`,
                      color: eventCategories[event.category].color,
                      fontWeight: 600
                    }}
                  />
                  {isPast && (
                    <Chip
                      label="Past Event"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: '#6b7280',
                        color: 'white'
                      }}
                    />
                  )}
                  {isFull && !isPast && (
                    <Chip
                      label="Full"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: '#ef4444',
                        color: 'white'
                      }}
                    />
                  )}
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
                    {event.title}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 2, lineHeight: 1.5 }}>
                    {event.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Calendar size={16} style={{ color: '#6b7280', marginRight: '8px' }} />
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        {formatDate(event.date)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Clock size={16} style={{ color: '#6b7280', marginRight: '8px' }} />
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        {event.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <MapPin size={16} style={{ color: '#6b7280', marginRight: '8px' }} />
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        {event.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Users size={16} style={{ color: '#6b7280', marginRight: '8px' }} />
                      <Typography variant="body2" sx={{ color: '#6b7280' }}>
                        {event.attendees}/{event.maxAttendees} registered
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={isPast || isFull}
                    onClick={() => {
                      setSelectedEvent(event);
                      setShowRegistration(true);
                    }}
                    sx={{
                      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                      color: 'white',
                      fontWeight: 'bold',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                      }
                    }}
                  >
                    {isPast ? 'Event Ended' : isFull ? 'Event Full' : 'Register Now'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Registration Dialog */}
      <Dialog open={showRegistration} onClose={() => setShowRegistration(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Register for {selectedEvent?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 3, color: '#6b7280' }}>
            Please fill out the form below to register for this event.
          </Typography>
          
          <Box component="form" onSubmit={handleRegister}>
            <TextField
              fullWidth
              label="Full Name *"
              value={registrationData.name}
              onChange={(e) => setRegistrationData({...registrationData, name: e.target.value})}
              required
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Email Address *"
              type="email"
              value={registrationData.email}
              onChange={(e) => setRegistrationData({...registrationData, email: e.target.value})}
              required
              sx={{ mb: 2 }}
            />
            
            <TextField
              fullWidth
              label="Phone Number"
              value={registrationData.phone}
              onChange={(e) => setRegistrationData({...registrationData, phone: e.target.value})}
              sx={{ mb: 2 }}
            />
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Number of Attendees</InputLabel>
              <Select
                value={registrationData.attendees}
                onChange={(e) => setRegistrationData({...registrationData, attendees: e.target.value})}
                label="Number of Attendees"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <MenuItem key={num} value={num}>{num}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowRegistration(false)}>Cancel</Button>
          <Button onClick={handleRegister} variant="contained">Register</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EventCalendar; 