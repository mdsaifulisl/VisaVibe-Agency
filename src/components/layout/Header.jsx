import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  FaBars, FaTimes, FaPlane, FaUser, 
  FaEnvelope, FaPhoneAlt, FaFacebookF, 
  FaTwitter, FaInstagram 
} from 'react-icons/fa';
import '../../assets/style/header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showTopHeader, setShowTopHeader] = useState(true);

  // মেনু আইটেমগুলো এক জায়গায় রাখা হলো
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Destinations", path: "/destinations" },
    { name: "Tours", path: "/tours" },
    { name: "Visa Service", path: "/visa-service" },
    { name: "Air Tickets", path: "/air-tickets" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/admin" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTopHeader(window.scrollY <= 100);
    }; 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <div className={`top-header ${!showTopHeader ? 'hide-top' : ''} d-none d-lg-block`}>
        <div className="container d-flex justify-content-between align-items-center h-100">
          <div className="top-left d-flex gap-4">
            <span className="d-flex align-items-center gap-1"><FaEnvelope className="top-icon" /> info@amazingtours.com</span>
            <span className="d-flex align-items-center gap-1"><FaPhoneAlt className="top-icon" /> +880 1234 567 890</span>
          </div>
          <div className="top-right d-flex gap-3">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="main-header shadow-sm">
        <div className="container d-flex justify-content-between align-items-center h-100">
          
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-icon"><FaPlane /></span>
            <span className="logo-text">Expert<span className="highlight">Travel</span></span>
          </Link>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${isMobile ? "mobile-show" : ""}`}>
            <div className="mobile-drawer-header d-lg-none">
              <div className="logo">
                <span className="logo-icon"><FaPlane /></span>
                <span className="logo-text text-white">Expert<span className="highlight">Travel</span></span>
              </div>
              <button className="close-btn" onClick={() => setIsMobile(false)}><FaTimes /></button>
            </div>

            {navLinks.map((link, index) => (
              <NavLink 
                key={index} 
                to={link.path} 
                className="nav-item" 
                onClick={() => setIsMobile(false)}
              >
                {link.name}
              </NavLink>
            ))}
            
            <NavLink to="/login" className="nav-item d-block d-lg-none" onClick={() => setIsMobile(false)}>Login</NavLink>
          </nav>

          {/* Right Actions */}
          <div className="header-actions d-flex align-items-center">
            <Link to="/login" className="login-link d-none d-lg-flex align-items-center gap-1">
              <FaUser />
              <span>Login</span>
            </Link>
            
            <button className="mobile-toggle-btn d-lg-none border-0 bg-transparent" onClick={() => setIsMobile(true)}>
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