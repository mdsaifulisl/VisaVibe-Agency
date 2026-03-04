import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaClock,
  FaUserFriends,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaArrowLeft,
  FaHeadset,
} from "react-icons/fa";
import "../../assets/style/details.css";

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // এটি একটি ডামি ডেটা। বাস্তবে আপনি এটি API বা আপনার Data ফাইল থেকে নিয়ে আসবেন।
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
    images:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",

     anotherdetals:
      "<p> If you have any further <u>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad.</u> questions or need any additional assistance, please don't hesitate to reach out to us. We are here to help you every step of the way.</p> <p> Thank you for considering our services. We look forward to serving you!</p> <ol><li>hello</li><li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a ut itaque nisi modi molestiae.</li></ol> <p> If you have any further questions or need any additional assistance, please don't hesitate to reach out to us. We are here to help you every step of the way.</p> <p> Thank you for considering our services. We look forward to serving you!</p> <ul><li>hello</li><li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a ut itaque nisi modi molestiae.</li></ul>", 
  };

  return (
    <div className="tour-details-page overflow-hidden">
      
      {/* Back Button & Header */}
      <div
        className="tour-header-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${tour.images})`,
        }}
      >
        <div className="container h-100 d-flex flex-column justify-content-center text-white">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-light-outline-coral mb-4 align-self-start"
          >
            <FaArrowLeft /> Back to Tours
          </button>
          <h1 className="display-4 fw-bold">{tour.title}</h1>
          <div className="d-flex align-items-center gap-3 mt-2">
            <span>
              <FaMapMarkerAlt className="text-coral" /> {tour.location}
            </span>
            <span>
              <FaStar className="text-warning" /> {tour.rating} ({tour.reviews}{" "}
              Reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Main Content Column */}
          <div className="col-lg-8">
            <div className="info-bar d-flex flex-wrap gap-4 p-4 bg-alice-blue rounded-4 mb-5">
              <div className="info-item">
                <FaClock className="text-teal" />
                <div>
                  <small className="d-block">Duration</small>
                  <strong>{tour.duration}</strong>
                </div>
              </div>
              <div className="info-item">
                <FaUserFriends className="text-teal" />
                <div>
                  <small className="d-block">Group Size</small>
                  <strong>{tour.groupSize}</strong>
                </div>
              </div>
            </div>

            <h3 className="fw-bold text-teal mb-3">Tour Overview</h3>
            <p className="text-secondary mb-5 fs-5">{tour.description}</p>

            <h3 className="fw-bold text-teal mb-3">Highlights</h3>
            <div className="row g-3 mb-5">
              {tour.highlights.map((h, i) => (
                <div key={i} className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <FaCheckCircle className="text-coral" /> <span>{h}</span>
                  </div>
                </div>
              ))}
            </div>

            {tour.anotherdetals && (
                <div className="another-details-box mt-5 pt-4 border-top">
                   <div className="ql-snow">
                      <div className="ql-editor p-0">
                        <div 
                          className="text-secondary italic-font additional-details"
                          dangerouslySetInnerHTML={{ __html: tour.anotherdetals }} 
                        />
                      </div>
                   </div>
                </div>
              )}
          </div>

          {/* Booking Sidebar */}
          <div className="col-lg-4">
            <div
              className="card border-0 shadow-lg rounded-4 p-4 position-sticky"
              style={{ top: "100px" }}
            >
              <h4 className="fw-bold text-teal mb-3">Book Now</h4>
              <p className="small text-muted mb-4">
                Fill out the form below to get started
              </p>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control bg-light border-0 py-3"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control bg-light border-0 py-3"
                    placeholder="Email Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control bg-light border-0 py-3"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control bg-light border-0 py-3"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-coral w-100 py-3 rounded-pill fw-bold shadow-sm"
                >
                  Send Inquiry
                </button>
              </form>

              <hr className="my-4" />
              <div className="text-center">
                <p className="small text-muted mb-2">
                  Or call for instant support
                </p>
                <h5 className="text-teal fw-bold">
                  <FaHeadset className="me-2" /> +880 1234 567 890
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
