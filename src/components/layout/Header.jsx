import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPlane, FaUser, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // IonIcons ব্যবহার করা হয়েছে আধুনিক লুকের জন্য
import { FaFacebookF, FaTwitter as FaTwitterBird, FaInstagram as FaInsta } from 'react-icons/fa';
import '../../assets/style/header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowTopHeader(false);
      } else {
        setShowTopHeader(true);
      }
    }; 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header - Mobile এ ডিফল্ট হাইড */}
      <div className={`top-header ${!showTopHeader ? 'hide-top' : ''} d-none d-lg-block`}>
        <div className="container d-flex justify-content-between align-items-center h-100">
          <div className="top-left d-flex gap-4">
            <span className="d-flex align-items-center gap-1"><FaEnvelope className="top-icon" /> info@amazingtours.com</span>
            <span className="d-flex align-items-center gap-1"><FaPhoneAlt className="top-icon" /> +880 1234 567 890</span>
          </div>
          <div className="top-right d-flex gap-3">
            <FaFacebookF className="social-icon" />
            <FaTwitterBird className="social-icon" />
            <FaInsta className="social-icon" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="main-header">
        <div className="container d-flex justify-content-between align-items-center h-100">
          
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon"><FaPlane /></span>
            <span className="logo-text">Your<span className="highlight">Logo</span></span>
          </Link>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${isMobile ? "mobile-show" : ""}`}>
            {/* Mobile-Only Header inside Drawer */}
            <div className="mobile-drawer-header d-lg-none">
              <div className="logo">
                <span className="logo-icon"><FaPlane /></span>
                <span className="logo-text text-white">Your<span className="highlight">Logo</span></span>
              </div>
              <button className="close-btn" onClick={() => setIsMobile(false)}>
                <FaTimes />
              </button>
            </div>

            <NavLink to="/" className="nav-item" onClick={() => setIsMobile(false)}>Home</NavLink>
            <NavLink to="/about" className="nav-item" onClick={() => setIsMobile(false)}>About</NavLink>
            <NavLink to="/destinations" className="nav-item" onClick={() => setIsMobile(false)}>Destinations</NavLink>
            <NavLink to="/tours" className="nav-item" onClick={() => setIsMobile(false)}>Tours</NavLink>
            <NavLink to="/visa-service" className="nav-item" onClick={() => setIsMobile(false)}>Visa Service</NavLink>
            <NavLink to="/air-tickets" className="nav-item" onClick={() => setIsMobile(false)}>Air Tickets</NavLink>
            <NavLink to="/blog" className="nav-item" onClick={() => setIsMobile(false)}>Blog</NavLink>
            <NavLink to="/contact" className="nav-item" onClick={() => setIsMobile(false)}>Contact</NavLink>
            <NavLink to="/login" className="nav-item d-block d-lg-none" onClick={() => setIsMobile(false)}>Login</NavLink>

        
           
          </nav>

          {/* Right Actions */}
          <div className="header-actions d-flex align-items-center">
            <Link to="/login" className="login-link d-none d-lg-flex align-items-center gap-1">
              <FaUser />
              <span>Login</span>
            </Link>
            
            {/* Hamburger Icon for Mobile */}
            <button className="mobile-toggle-btn d-lg-none border-0" onClick={() => setIsMobile(true)}>
              <FaBars />
            </button>
          </div>
        </div>
      </header>
      
      {/* Overlay */}
      <div className={`menu-overlay ${isMobile ? 'active' : ''}`} onClick={() => setIsMobile(false)}></div>
    </>
  );
};

export default Header;