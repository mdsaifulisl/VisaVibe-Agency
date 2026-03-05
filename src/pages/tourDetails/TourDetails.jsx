import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaClock,
  FaUserFriends,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaArrowLeft,
  FaHeadset,
  FaPhone,
} from "react-icons/fa";
import "react-quill-new/dist/quill.snow.css";
import "../../assets/style/details.css";

// components 
import Gallery from "../../components/shared/Gallery";
import EnquiryForm from "../../components/shared/EnquiryForm";
const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tour = {
    id: id,
    title: "Mesmerizing Switzerland Adventure",
    location: "Alps, Switzerland",
    duration: "7 Days, 6 Nights",
    groupSize: "15 People",
    price: 1250,
    rating: 4.8,
    reviews: 124,
    description:
      "Experience the magic of the Swiss Alps with our premium adventure tour. This package covers Lucerne, Interlaken, and Mt. Titlis. Enjoy panoramic views, luxury stays, and authentic Swiss chocolate tasting sessions.",
    highlights: [
      "Cable car ride to Mt. Titlis",
      "Lucerne City Walking Tour",
      "Lake Brienz Cruise",
      "Stay in Luxury Chalets",
    ],
    images: [
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=81",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=82",
    ],
    anotherdetals: `<h3>1. Additional Details </h3>
    <p> If you have any further questions or need any additional assistance, please don't hesitate to reach out to us.</p>
    <p> Our team is here to help you every step of the way, providing personalized guidance and support to ensure your visa application is successful.</p>
    <p> Thank you for considering our services and we look forward to serving you with a smooth and hassle-free visa application process.</p>
    <ul>
      <li>Our team is here to help you every step of the way, providing personalized guidance and support to ensure your visa application is successful.</li>
      <li>Thank you for considering our services and we look forward to serving you with a smooth and hassle-free visa application process.</li>
    </ul>`,
  };

  const [current, setCurrent] = useState(0);

  // Auto Slider Logic with 5 seconds interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === tour.images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [tour.images.length]);

  return (
    <div className="tour-details-page overflow-hidden pb-5">
      {/* Header Slider Section */}
      <div className="tour-hero-container position-relative">
        {tour.images.map((img, index) => (
          <div
            key={index}
            className={`tour-hero-slide ${index === current ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
            }}
          />
        ))}

        {/* Hero Content */}
        <div className="container h-100 d-flex flex-column justify-content-center text-white position-relative z-3">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-light rounded-pill mb-4 align-self-start px-4"
          >
            <FaArrowLeft className="me-2" /> Back to Tours
          </button>
          <h1 className="display-4 fw-bold">{tour.title}</h1>
          <div className="d-flex align-items-center gap-4 mt-2">
            <span className="d-flex align-items-center gap-2">
              <FaMapMarkerAlt className="text-coral" /> {tour.location}
            </span>
            <span className="d-flex align-items-center gap-2">
              <FaStar className="text-warning" /> {tour.rating} ({tour.reviews} Reviews)
            </span>
          </div>
        </div>
        
        {/* Slider Dots */}
        <div className="slider-dots d-flex gap-2 position-absolute bottom-0 start-50 translate-middle-x mb-4">
            {tour.images.map((_, i) => (
                <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}></span>
            ))}
        </div>
      </div>

      <div className="container mt-5">
        <div className="row g-5">
          {/* Main Content Column */}
          <div className="col-lg-8">
            <div className="info-bar d-flex flex-wrap gap-4 p-4 bg-alice-blue rounded-4 mb-5 shadow-sm">
              <div className="d-flex align-items-center gap-3">
                <div className="icon-box-small bg-white text-teal p-3 rounded-circle shadow-sm">
                  <FaClock size={20} />
                </div>
                <div>
                  <small className="text-muted d-block">Duration</small>
                  <strong className="text-dark">{tour.duration}</strong>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 border-md-start ps-md-4 border-light">
                <div className="icon-box-small bg-white text-teal p-3 rounded-circle shadow-sm">
                  <FaUserFriends size={20} />
                </div>
                <div>
                  <small className="text-muted d-block">Group Size</small>
                  <strong className="text-dark">{tour.groupSize}</strong>
                </div>
              </div>
            </div>

            <h3 className="fw-bold text-teal mb-3 border-bottom pb-2">Tour Overview</h3>
            <p className="text-secondary mb-5 fs-5 leading-relaxed">{tour.description}</p>

            <h3 className="fw-bold text-teal mb-3">Highlights</h3>
            <div className="row g-3 mb-5">
              {tour.highlights.map((h, i) => (
                <div key={i} className="col-md-6">
                  <div className="card border-0 bg-light p-3 rounded-3 d-flex flex-row align-items-center gap-3">
                    <FaCheckCircle className="text-coral flex-shrink-0" />
                    <span className="fw-medium text-dark">{h}</span>
                  </div>
                </div>
              ))}
            </div>

            {tour.anotherdetals && (
              <div className="another-details-box mt-5 pt-4 border-top">
                <h4 className="fw-bold text-teal mb-4">Good to Know</h4>
                <div className="ql-snow">
                  <div className="ql-editor p-0">
                    <div
                      className="text-secondary fs-6 additional-details"
                      dangerouslySetInnerHTML={{ __html: tour.anotherdetals }}
                    />
                  </div>
                </div>
              </div>
            )}


            <div>
              <h3>Tour Photos</h3>
              <Gallery images={tour.images} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden position-sticky" style={{ top: "100px" }}>
              <div className="bg-text-coral text-white p-4 text-center">
                <small className="d-block opacity-75 text-uppercase letter-spacing-1">Starting from</small>
                <h2 className="fw-bold mb-0 text-white">${tour.price} <span className="fs-6 fw-normal">/ person</span></h2>
              </div>

              <div>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;