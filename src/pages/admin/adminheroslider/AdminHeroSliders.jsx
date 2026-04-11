import React, { useState } from "react";
import { 
  FaImages, FaQuestionCircle, FaInfoCircle, FaEdit, 
  FaTrash, FaPlus, FaSave, FaLink, FaHeading, FaCloudUploadAlt 
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminHeroSlider = () => {
  const [activeTab, setActiveTab] = useState("slider");

  // ১. Slider Data
  const [sliders] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
      headline: "Dream Your Next Vacation",
      subtext: "Explore the most beautiful beaches in the world",
      link: "/destinations",
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80',
      headline: "Adventure Awaits",
      subtext: "Trekking, hiking & mountain tours",
      link: "/tours",
    }
  ]);

  // ২. FAQ Data
  const [faqs] = useState([
    { id: 1, question: "How to book a tour?", answer: "You can book directly from our website or call us." },
    { id: 2, question: "What is the refund policy?", answer: "Refunds are processed within 7 working days." }
  ]);

  // ৩. About Content Data (Updated with Image instead of Video URL)
  const [aboutContent, setAboutContent] = useState({
    title: "Why Choose Travel Admin?",
    description: "We provide the best travel experience with affordable prices and expert guides.",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80"
  });

  const [aboutImagePreview, setAboutImagePreview] = useState(aboutContent.image);

  const handleAboutImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAboutImagePreview(reader.result);
        setAboutContent({ ...aboutContent, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold" style={{ color: "var(--primary-teal)" }}>Home Page Management</h3>
        <p className="text-muted small">Manage Hero Slider, FAQ, and About section content</p>
      </div>

      {/* Tab Navigation */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body p-2">
          <ul className="nav nav-pills nav-justified gap-2">
            <li className="nav-item">
              <button 
                className={`nav-link rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 ${activeTab === 'slider' ? 'bg-teal text-white active' : 'text-dark hover-bg-light'}`}
                style={activeTab === 'slider' ? {backgroundColor: 'var(--primary-teal)'} : {}}
                onClick={() => setActiveTab("slider")}
              >
                <FaImages /> Slider
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 ${activeTab === 'faq' ? 'bg-teal text-white active' : 'text-dark hover-bg-light'}`}
                style={activeTab === 'faq' ? {backgroundColor: 'var(--primary-teal)'} : {}}
                onClick={() => setActiveTab("faq")}
              >
                <FaQuestionCircle /> Frequently Questions
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link rounded-3 py-3 d-flex align-items-center justify-content-center gap-2 ${activeTab === 'about' ? 'bg-teal text-white active' : 'text-dark hover-bg-light'}`}
                style={activeTab === 'about' ? {backgroundColor: 'var(--primary-teal)'} : {}}
                onClick={() => setActiveTab("about")}
              >
                <FaInfoCircle /> About Content
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        
        {/* 1. SLIDER MANAGEMENT */}
        {activeTab === "slider" && (
          <div className="row g-4">
            <div className="col-12 text-end">
              <Link to="/admin/add-slider" className="btn text-white rounded-pill px-4" style={{backgroundColor: 'var(--primary-teal)'}}>
                <FaPlus className="me-2" /> Add New Slider
              </Link>
            </div>
            {sliders.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative slider-card">
                  <img src={item.image} className="card-img-top" alt="Slider" style={{height: '200px', objectFit: 'cover'}} />
                  <div className="card-body">
                    <h5 className="fw-bold text-truncate">{item.headline}</h5>
                    <p className="text-muted small text-truncate">{item.subtext}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3 border-top pt-3">
                      <span className="small fw-bold text-teal" style={{color: 'var(--primary-teal)'}}><FaLink /> {item.link}</span>
                      <div className="d-flex gap-2">
                        <Link to={`/admin/edit-slider/${item.id}`} className="btn btn-sm btn-light border rounded-circle shadow-sm"><FaEdit className="text-teal"/></Link>
                        <button className="btn btn-sm btn-light border rounded-circle shadow-sm"><FaTrash className="text-danger"/></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. FAQ MANAGEMENT */}
        {activeTab === "faq" && (
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="d-flex justify-content-between mb-4">
              <h5 className="fw-bold">Manage FAQ</h5>
              <Link to="/admin/add-faq" className="btn btn-sm text-white px-3" style={{backgroundColor: 'var(--primary-teal)'}}><FaPlus /> Add FAQ</Link>
            </div>
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-light p-3 rounded-3 mb-3 border-start border-4" style={{borderColor: 'var(--primary-teal)'}}>
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-1">{index + 1}. {faq.question}</h6>
                    <p className="small text-muted mb-0">{faq.answer}</p>
                  </div>
                  <div className="d-flex gap-2 ms-3">
                    <Link to={`/admin/edit-faq/${faq.id}`} className="btn btn-sm btn-white border-0 shadow-none"><FaEdit className="text-teal"/></Link>
                    <button className="btn btn-sm btn-white border-0 shadow-none"><FaTrash className="text-danger"/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. ABOUT CONTENT MANAGEMENT (Updated) */}
        {activeTab === "about" && (
          <div className="card border-0 shadow-sm rounded-4 p-4">
            <h5 className="fw-bold mb-4">Edit About Section</h5>
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="small fw-bold mb-1">Headline</label>
                    <div className="input-group shadow-sm rounded-3 overflow-hidden">
                      <span className="input-group-text bg-white border-0"><FaHeading className="text-muted" /></span>
                      <input 
                        type="text" 
                        className="form-control border-0 py-2 bg-white" 
                        value={aboutContent.title} 
                        onChange={(e) => setAboutContent({...aboutContent, title: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1">Description</label>
                    <textarea 
                      className="form-control border-0 shadow-sm rounded-3 p-3 bg-white" 
                      rows="5" 
                      value={aboutContent.description} 
                      onChange={(e) => setAboutContent({...aboutContent, description: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold mb-1">Experience Info (e.g. 10+ Years)</label>
                    <input 
                      type="text" 
                      className="form-control border-0 shadow-sm rounded-3 py-2 bg-white" 
                      value={aboutContent.experience} 
                      onChange={(e) => setAboutContent({...aboutContent, experience: e.target.value})} 
                    />
                  </div>
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="col-lg-5">
                <label className="small fw-bold mb-2 d-block">About Section Image</label>
                <div className="card border-2 border-dashed rounded-4 p-2 text-center bg-light" style={{ cursor: 'pointer', position: 'relative' }}>
                  <img 
                    src={aboutImagePreview} 
                    className="rounded-3 mb-2 w-100" 
                    alt="About Preview" 
                    style={{ height: '220px', objectFit: 'cover' }} 
                  />
                  <label htmlFor="about-image-upload" className="btn btn-sm btn-dark position-absolute top-50 start-50 translate-middle shadow-lg px-3">
                    <FaCloudUploadAlt className="me-2" /> Change Image
                  </label>
                  <input 
                    id="about-image-upload" 
                    type="file" 
                    hidden 
                    accept="image/*" 
                    onChange={handleAboutImageChange} 
                  />
                  <p className="small text-muted mt-2 mb-0">Accepted: JPG, PNG, WEBP</p>
                </div>
              </div>

              <div className="col-12 text-end mt-4">
                <button className="btn text-white px-5 py-2 rounded-pill shadow-sm fw-bold" style={{backgroundColor: 'var(--secondary-coral)'}}>
                  <FaSave className="me-2" /> Save All Changes
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminHeroSlider;