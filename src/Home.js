import React from 'react';
import { Heart, Users, Home as HomeIcon, Gift, ChevronRight } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h2 className="hero-title">
                Bringing Hope to Children in Need
              </h2>
              <p className="hero-description">
                Every child deserves a chance to smile, laugh, and dream. Join us in creating magical moments and providing essential support for children facing life's greatest challenges.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">
                  Make a Difference Today
                </button>
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <Heart size={96} className="heart-icon" />
                <p className="image-text">Children's smiling faces</p>
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
              <button className="program-link">
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
              <button className="program-link">
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
              <button className="program-link">
                Learn More <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3 className="cta-title">
              Every Child Deserves to Smile
            </h3>
            <p className="cta-description">
              Your support makes a real difference in the lives of children and families. Join our mission to spread hope, joy, and healing.
            </p>
            <div className="cta-buttons">
              <button className="btn-white">
                Donate Today
              </button>
              <button className="btn-outline">
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}