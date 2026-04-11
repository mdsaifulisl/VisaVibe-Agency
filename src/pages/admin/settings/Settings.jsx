import React, { useState } from "react";
import { 
  FaCog, FaGlobe, FaShareAlt, FaSearch, FaLock, 
  FaSave, FaCloudUploadAlt, FaFacebook, FaInstagram, 
  FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt 
} from "react-icons/fa";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  // Settings State
  const [settings, setSettings] = useState({
    siteName: "Travel Admin",
    siteEmail: "info@travelagency.com",
    phone: "+880 1700-000000",
    address: "Dhaka, Bangladesh",
    footerText: "© 2026 Travel Admin. All rights reserved.",
    facebook: "https://facebook.com/travel",
    instagram: "https://instagram.com/travel",
    linkedin: "https://linkedin.com/travel",
    whatsapp: "+8801700000000",
    metaTitle: "Best Travel Agency in Bangladesh",
    metaDescription: "Book your dream vacation with ease.",
    maintenanceMode: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      <div className="mb-4">
        <h3 className="fw-bold" style={{ color: "var(--primary-teal)" }}>Global Settings</h3>
        <p className="text-muted small">Configure your website's core information and social links</p>
      </div>

      <div className="row g-4">
        {/* Sidebar Tabs */}
        <div className="col-lg-3">
          <div className="card border-0 shadow-sm rounded-4 p-2">
            <div className="nav flex-column nav-pills gap-2">
              <button 
                className={`nav-link rounded-3 py-3 d-flex align-items-center gap-3 border-0 ${activeTab === 'general' ? 'bg-teal text-white shadow' : 'text-dark hover-bg-light'}`}
                style={activeTab === 'general' ? {backgroundColor: 'var(--primary-teal)'} : {}}
                onClick={() => setActiveTab("general")}
              >
                <FaGlobe /> General
              </button>
              <button 
                className={`nav-link rounded-3 py-3 d-flex align-items-center gap-3 border-0 ${activeTab === 'contact' ? 'bg-teal text-white shadow' : 'text-dark hover-bg-light'}`}
                style={activeTab === 'contact' ? {backgroundColor: 'var(--primary-teal)'} : {}}
                onClick={() => setActiveTab("contact")}
              >
                <FaPhoneAlt /> Contact & Social
              </button>
              <button 
                className={`nav-link rounded-3 py-3 d-flex align-items-center gap-3 border-0 ${activeTab === 'seo' ? 'bg-teal text-white shadow' : 'text-dark hover-bg-light'}`}
                style={activeTab === 'seo' ? {backgroundColor: 'var(--primary-teal)'} : {}}
                onClick={() => setActiveTab("seo")}
              >
                <FaSearch /> SEO & Analytics
              </button>
              <button 
                className={`nav-link rounded-3 py-3 d-flex align-items-center gap-3 border-0 ${activeTab === 'security' ? 'bg-teal text-white shadow' : 'text-dark hover-bg-light'}`}
                style={activeTab === 'security' ? {backgroundColor: 'var(--primary-teal)'} : {}}
                onClick={() => setActiveTab("security")}
              >
                <FaLock /> Security
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="col-lg-9">
          <div className="card border-0 shadow-sm rounded-4 p-4">
            
            {/* 1. GENERAL SETTINGS */}
            {activeTab === "general" && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="fw-bold mb-4 border-bottom pb-2">Basic Information</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">Site Name</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="siteName" value={settings.siteName} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">Footer Copyright Text</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="footerText" value={settings.footerText} onChange={handleInputChange} />
                  </div>
                  <div className="col-12 mt-3">
                    <label className="small fw-bold mb-2">Upload Site Logo</label>
                    <div className="border border-dashed rounded-3 p-4 text-center bg-light">
                      <FaCloudUploadAlt size={30} className="text-muted mb-2" />
                      <p className="small text-muted mb-0">Drag and drop your logo here or click to browse</p>
                      <input type="file" hidden id="logoUpload" />
                      <label htmlFor="logoUpload" className="btn btn-sm btn-outline-dark mt-2">Select Image</label>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="form-check form-switch p-3 bg-light rounded-3 d-flex justify-content-between align-items-center">
                       <div>
                          <label className="fw-bold mb-0 d-block">Maintenance Mode</label>
                          <small className="text-muted">Turn off the website for visitors during updates</small>
                       </div>
                       <input className="form-check-input text-teal" type="checkbox" name="maintenanceMode" checked={settings.maintenanceMode} onChange={handleInputChange} style={{width: '50px', height: '25px'}} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. CONTACT & SOCIAL */}
            {activeTab === "contact" && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="fw-bold mb-4 border-bottom pb-2">Contact & Social Media</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1"><FaEnvelope className="me-1" /> Public Email</label>
                    <input type="email" className="form-control bg-light border-0 py-2" name="siteEmail" value={settings.siteEmail} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1"><FaPhoneAlt className="me-1" /> Phone Number</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="phone" value={settings.phone} onChange={handleInputChange} />
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1"><FaMapMarkerAlt className="me-1" /> Office Address</label>
                    <textarea className="form-control bg-light border-0 py-2" rows="2" name="address" value={settings.address} onChange={handleInputChange}></textarea>
                  </div>
                  <hr className="my-3 opacity-10" />
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1"><FaFacebook className="text-primary me-1" /> Facebook URL</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="facebook" value={settings.facebook} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1"><FaInstagram className="text-danger me-1" /> Instagram URL</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="instagram" value={settings.instagram} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1"><FaLinkedin className="text-primary me-1" /> LinkedIn URL</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="linkedin" value={settings.linkedin} onChange={handleInputChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1"><FaWhatsapp className="text-success me-1" /> WhatsApp Number</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="whatsapp" value={settings.whatsapp} onChange={handleInputChange} />
                  </div>
                </div>
              </div>
            )}

            {/* 3. SEO SETTINGS */}
            {activeTab === "seo" && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="fw-bold mb-4 border-bottom pb-2">Search Engine Optimization</h5>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="small fw-bold mb-1">Meta Title (Homepage)</label>
                    <input type="text" className="form-control bg-light border-0 py-2" name="metaTitle" value={settings.metaTitle} onChange={handleInputChange} />
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1">Meta Description</label>
                    <textarea className="form-control bg-light border-0 py-2" rows="4" name="metaDescription" value={settings.metaDescription} onChange={handleInputChange}></textarea>
                  </div>
                  <div className="col-12 mt-3 p-3 rounded-3" style={{backgroundColor: '#e3f2fd', borderLeft: '4px solid #2196f3'}}>
                    <p className="small mb-0 text-dark">
                      <strong>Tip:</strong> Good SEO titles should be under 60 characters and descriptions under 160 characters for better visibility in Google.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. SECURITY SETTINGS */}
            {activeTab === "security" && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="fw-bold mb-4 border-bottom pb-2">Admin Security</h5>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">Current Password</label>
                    <input type="password" placeholder="••••••••" className="form-control bg-light border-0 py-2" />
                  </div>
                  <div className="col-12"></div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">New Password</label>
                    <input type="password" placeholder="New Password" className="form-control bg-light border-0 py-2" />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold mb-1">Confirm New Password</label>
                    <input type="password" placeholder="Confirm Password" className="form-control bg-light border-0 py-2" />
                  </div>
                  <div className="col-12 mt-3 p-3 bg-light rounded-3">
                     <button className="btn btn-danger btn-sm rounded-pill px-4">Force Logout All Sessions</button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-5 border-top pt-4 text-end">
              <button className="btn text-white px-5 py-2 rounded-pill shadow" style={{backgroundColor: 'var(--secondary-coral)', fontWeight: 'bold'}}>
                <FaSave className="me-2" /> Save All Settings
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;