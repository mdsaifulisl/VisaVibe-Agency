import React from 'react';
import { FaAward, FaGlobe, FaUsers, FaShieldAlt } from 'react-icons/fa';
import '../../assets/style/about.css';

// components
import FAQ from '../../components/shared/FAQ';

const About = () => {
  return (
    <div className="about-page overflow-hidden">
      {/* 1. Breadcrumb / Header */}
      <section className="about-hero d-flex align-items-center justify-content-center text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Your Trusted Partner in World Exploration</p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="story-section section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="story-img-wrapper position-relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Team" 
                  className="img-fluid rounded-4 shadow-lg"
                />
                <div className="experience-badge bg-coral text-white p-3 text-center rounded-3">
                  <h3 className="fw-bold mb-0">10+</h3>
                  <p className="small mb-0">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-coral fw-bold text-uppercase">Who We Are</h6>
              <h2 className="display-6 fw-bold text-teal mb-4">Making Your Travel Dreams Come True Since 2014</h2>
              <p className="text-secondary mb-4">
                Amazing Tours is a premier travel agency dedicated to providing unforgettable travel experiences. We believe that traveling is more than just visiting a new place; it’s about making memories that last a lifetime.
              </p>
              <p className="text-secondary mb-4">
                Our team of experts works tirelessly to curate the best flight deals, visa assistance, and tour packages tailored to your specific needs. From solo adventures to family vacations, we’ve got you covered.
              </p>
              <button className="btn btn-teal px-4 py-2 fw-bold shadow-sm">View Our Tours</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us (Icon Grid) */}
      <section className="why-choose-us py-5 bg-alice-blue">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-teal">Why Choose Amazing Tours?</h2>
            <div className="header-line mx-auto"></div>
          </div>
          <div className="row g-4">
            <div className="col-md-3 text-center">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <FaGlobe className="fs-1 text-coral mb-3" />
                <h5 className="fw-bold text-teal">Global Reach</h5>
                <p className="small text-secondary">Tours across 50+ countries around the globe.</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <FaAward className="fs-1 text-coral mb-3" />
                <h5 className="fw-bold text-teal">Certified Service</h5>
                <p className="small text-secondary">A multi-award winning travel agency.</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <FaUsers className="fs-1 text-coral mb-3" />
                <h5 className="fw-bold text-teal">Happy Clients</h5>
                <p className="small text-secondary">Over 10,000 satisfied travelers worldwide.</p>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="feature-card p-4 bg-white rounded-4 shadow-sm h-100">
                <FaShieldAlt className="fs-1 text-coral mb-3" />
                <h5 className="fw-bold text-teal">Safe Travel</h5>
                <p className="small text-secondary">Your safety is our top priority always.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <FAQ />
      </section>
    </div>
  );
};

export default About;