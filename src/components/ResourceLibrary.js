import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  Search,
  Download,
  FileText,
  Video,
  BookOpen,
  Heart,
  Brain,
  Users,
  School,
  Calendar,
  ExpandMore,
  ExternalLink,
  Play,
  File,
  Image
} from 'lucide-react';

const resourceCategories = {
  mentalHealth: { label: 'Mental Health', icon: <Brain size={20} />, color: '#8b5cf6' },
  familySupport: { label: 'Family Support', icon: <Heart size={20} />, color: '#ef4444' },
  education: { label: 'Education', icon: <School size={20} />, color: '#3b82f6' },
  community: { label: 'Community Resources', icon: <Users size={20} />, color: '#10b981' },
  activities: { label: 'Activities & Events', icon: <Calendar size={20} />, color: '#f59e0b' }
};

const sampleResources = [
  {
    id: 1,
    title: 'Understanding Teen Depression',
    description: 'A comprehensive guide for parents on recognizing and supporting teens with depression.',
    category: 'mentalHealth',
    type: 'pdf',
    fileSize: '2.3 MB',
    downloads: 145,
    tags: ['depression', 'teens', 'parents', 'mental health'],
    url: '#',
    image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Mental+Health+Guide'
  },
  {
    id: 2,
    title: 'Family Communication Workshop',
    description: 'Video workshop on improving communication within families and building stronger relationships.',
    category: 'familySupport',
    type: 'video',
    duration: '45 min',
    views: 89,
    tags: ['communication', 'family', 'relationships'],
    url: '#',
    image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Family+Workshop'
  },
  {
    id: 3,
    title: 'Educational Support Resources',
    description: 'List of local educational resources, tutoring programs, and academic support services.',
    category: 'education',
    type: 'pdf',
    fileSize: '1.8 MB',
    downloads: 203,
    tags: ['education', 'tutoring', 'academic support'],
    url: '#',
    image: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Education+Resources'
  },
  {
    id: 4,
    title: 'Community Activity Calendar',
    description: 'Monthly calendar of free and low-cost activities for families in the community.',
    category: 'activities',
    type: 'pdf',
    fileSize: '1.2 MB',
    downloads: 167,
    tags: ['activities', 'calendar', 'community'],
    url: '#',
    image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Activity+Calendar'
  },
  {
    id: 5,
    title: 'Crisis Intervention Guide',
    description: 'Step-by-step guide for families dealing with crisis situations and where to get help.',
    category: 'mentalHealth',
    type: 'pdf',
    fileSize: '3.1 MB',
    downloads: 78,
    tags: ['crisis', 'emergency', 'help'],
    url: '#',
    image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Crisis+Guide'
  },
  {
    id: 6,
    title: 'Parenting Support Groups',
    description: 'Directory of local parenting support groups and meeting schedules.',
    category: 'community',
    type: 'pdf',
    fileSize: '0.9 MB',
    downloads: 134,
    tags: ['support groups', 'parenting', 'community'],
    url: '#',
    image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Support+Groups'
  }
];

const ResourceLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState(null);
  const [showResourceDialog, setShowResourceDialog] = useState(false);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const handleResourceClick = (resource) => {
    setSelectedResource(resource);
    setShowResourceDialog(true);
  };

  const handleDownload = (resource) => {
    // Here you would typically trigger a download
    console.log('Downloading:', resource.title);
    // For demo purposes, we'll just log the action
  };

  const filteredResources = sampleResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getResourceIcon = (type) => {
    switch (type) {
      case 'pdf': return <FileText size={20} />;
      case 'video': return <Video size={20} />;
      case 'image': return <Image size={20} />;
      default: return <File size={20} />;
    }
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#1f2937', mb: 2 }}>
          Resource Library
        </Typography>
        <Typography variant="h6" sx={{ color: '#6b7280', mb: 3 }}>
          Helpful resources, guides, and information for families
        </Typography>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={20} />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 3 }}
        />

        <Tabs
          value={selectedCategory}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              minWidth: 'auto',
              px: 3,
              py: 1,
              borderRadius: 2,
              mx: 0.5,
              '&.Mui-selected': {
                backgroundColor: '#1e40af',
                color: 'white',
              }
            }
          }}
        >
          <Tab label="All Resources" value="all" />
          {Object.entries(resourceCategories).map(([key, category]) => (
            <Tab
              key={key}
              label={category.label}
              value={key}
              icon={category.icon}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      {/* Resources Grid */}
      <Grid container spacing={3}>
        {filteredResources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <Card sx={{
              height: '100%',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }
            }} onClick={() => handleResourceClick(resource)}>
              <Box sx={{
                height: 200,
                backgroundImage: `url(${resource.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <Chip
                  label={resourceCategories[resource.category].label}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    backgroundColor: `${resourceCategories[resource.category].color}20`,
                    color: resourceCategories[resource.category].color,
                    fontWeight: 600
                  }}
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: 12,
                  right: 12,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  borderRadius: 1,
                  px: 1,
                  py: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}>
                  {getResourceIcon(resource.type)}
                  <Typography variant="caption">
                    {resource.type === 'video' ? resource.duration : resource.fileSize}
                  </Typography>
                </Box>
              </Box>
              
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
                  {resource.title}
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#6b7280', mb: 2, lineHeight: 1.5 }}>
                  {resource.description}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  {resource.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        mr: 0.5,
                        mb: 0.5,
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280'
                      }}
                    />
                  ))}
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    {resource.type === 'video' ? `${resource.views} views` : `${resource.downloads} downloads`}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={resource.type === 'video' ? <Play size={16} /> : <Download size={16} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(resource);
                    }}
                  >
                    {resource.type === 'video' ? 'Watch' : 'Download'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Resource Details Dialog */}
      <Dialog open={showResourceDialog} onClose={() => setShowResourceDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {selectedResource && getResourceIcon(selectedResource.type)}
            {selectedResource?.title}
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedResource && (
            <Box>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                {selectedResource.description}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Details
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <BookOpen size={16} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Category"
                      secondary={resourceCategories[selectedResource.category].label}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      {getResourceIcon(selectedResource.type)}
                    </ListItemIcon>
                    <ListItemText
                      primary="Type"
                      secondary={selectedResource.type.toUpperCase()}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Download size={16} />
                    </ListItemIcon>
                    <ListItemText
                      primary="File Size"
                      secondary={selectedResource.type === 'video' ? selectedResource.duration : selectedResource.fileSize}
                    />
                  </ListItem>
                </List>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Tags
                </Typography>
                <Box>
                  {selectedResource.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        mr: 0.5,
                        mb: 0.5,
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowResourceDialog(false)}>Close</Button>
          {selectedResource && (
            <Button
              variant="contained"
              startIcon={selectedResource.type === 'video' ? <Play size={16} /> : <Download size={16} />}
              onClick={() => {
                handleDownload(selectedResource);
                setShowResourceDialog(false);
              }}
            >
              {selectedResource.type === 'video' ? 'Watch Now' : 'Download'}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ResourceLibrary; 