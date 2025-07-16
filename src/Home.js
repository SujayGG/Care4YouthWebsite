import React from 'react';
import { Users, Home as HomeIcon, Gift, ChevronRight, Calendar, BookOpen, Award } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import marchEventGroup from './assets/march_group.jpg';
import './Home.css';
import DonateButton from './components/DonateButton';
import NewsletterSignup from './components/NewsletterSignup';
import { Helmet } from 'react-helmet-async';

const Home = React.memo(function Home() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleVolunteer = () => {
    navigate('/volunteer');
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>Care4Youth | Bringing Hope to Children in Need</title>
        <meta name="description" content="Care4Youth is a nonprofit dedicated to supporting children and families through programs, healthcare, and community support." />
        <meta property="og:title" content="Care4Youth | Bringing Hope to Children in Need" />
        <meta property="og:description" content="Support children and families in need. Learn about our programs, donate, or volunteer today!" />
        <meta property="og:image" content="https://SujayGG.github.io/Care4YouthWebsite/care4youth-logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://SujayGG.github.io/Care4YouthWebsite/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Care4Youth | Bringing Hope to Children in Need" />
        <meta name="twitter:description" content="Support children and families in need. Learn about our programs, donate, or volunteer today!" />
        <meta name="twitter:image" content="https://SujayGG.github.io/Care4YouthWebsite/care4youth-logo.svg" />
      </Helmet>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h2 className="hero-title">
                Bringing Hope to Children in Need
              </h2>
              <p className="hero-description">
                Every child deserves a chance to smile, laugh, and dream. Join us in creating magical moments and providing essential support for children facing life's greatest challenges. (Make img to right a image carosel)
              </p>
              <div className="hero-buttons">
                <DonateButton className="btn-primary">
                  Make a Difference Today
                </DonateButton>
                <button className="btn-secondary" onClick={handleLearnMore}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <img 
                  src={marchEventGroup} 
                  alt="Care 4 Youth March Event Group" 
                  loading="lazy"
                  style={{ width: '100%', maxWidth: 400, borderRadius: '1.5rem', boxShadow: '0 8px 32px rgba(30, 64, 175, 0.15)', objectFit: 'cover' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Children Helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Programs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,200+</div>
              <div className="stat-label">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Our Programs</h3>
            <p className="section-description">
              We provide comprehensive support through various programs designed to bring joy, comfort, and hope to children and their families.
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <HomeIcon size={32} />
              </div>
              <h4 className="program-title">Family Support</h4>
              <p className="program-description">
                Providing housing, meals, and emotional support to families during their most challenging times.
              </p>
              <button className="program-link" onClick={handleLearnMore}>
                Learn More <ChevronRight size={16} />
              </button>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <Gift size={32} />
              </div>
              <h4 className="program-title">Wish Fulfillment</h4>
              <p className="program-description">
                Making dreams come true through special experiences and gifts that bring smiles and create lasting memories.
              </p>
              <button className="program-link" onClick={handleLearnMore}>
                Learn More <ChevronRight size={16} />
              </button>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <Users size={32} />
              </div>
              <h4 className="program-title">Community Care</h4>
              <p className="program-description">
                Building a network of support through volunteers, mentorship, and community engagement programs.
              </p>
              <button className="program-link" onClick={handleLearnMore}>
                Learn More <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="features-section" style={{ padding: '4rem 0', backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Explore Our Platform</h3>
            <p className="section-description">
              Discover our comprehensive resources and community features designed to support families and connect donors.
            </p>
          </div>

          <div className="programs-grid">
            <Link to="/donors" className="program-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="program-icon" style={{ backgroundColor: '#fef3c7' }}>
                <Award size={32} style={{ color: '#f59e0b' }} />
              </div>
              <h4 className="program-title">Donor Recognition Wall</h4>
              <p className="program-description">
                Celebrate our generous supporters and see the impact of your donations. Opt-in to be recognized for your contributions.
              </p>
              <div className="program-link">
                View Donors <ChevronRight size={16} />
              </div>
            </Link>

            <Link to="/events" className="program-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="program-icon" style={{ backgroundColor: '#dbeafe' }}>
                <Calendar size={32} style={{ color: '#3b82f6' }} />
              </div>
              <h4 className="program-title">Upcoming Events</h4>
              <p className="program-description">
                Join our fundraisers, volunteer opportunities, and community events. Register for upcoming activities and make a difference.
              </p>
              <div className="program-link">
                View Events <ChevronRight size={16} />
              </div>
            </Link>

            <Link to="/resources" className="program-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="program-icon" style={{ backgroundColor: '#e0e7ff' }}>
                <BookOpen size={32} style={{ color: '#8b5cf6' }} />
              </div>
              <h4 className="program-title">Resource Library</h4>
              <p className="program-description">
                Access helpful guides, educational materials, and support resources for families. Download documents and watch informative videos.
              </p>
              <div className="program-link">
                Browse Resources <ChevronRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">Join Us in Making a Difference</h3>
            <p className="cta-description">
              Every contribution, no matter how small, helps us bring hope and joy to children who need it most. Together, we can create lasting positive change.
            </p>
            <div className="cta-buttons">
              <DonateButton className="btn-white">
                Donate Now
              </DonateButton>
              <button className="btn-outline" onClick={handleVolunteer}>
                Volunteer Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
});

export default Home;
