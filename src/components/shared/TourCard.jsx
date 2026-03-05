import React from "react";
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const TourCard = ({ tourData }) => {
  const navigate = useNavigate();
  
  

  return (
    <>
      {tourData.map((tour) => (
        <div className="col-lg-4 col-md-6 mb-4" key={tour.id}>
          <div className="tour-card shadow-sm border-0 h-100">
            <div className="tour-img-wrapper position-relative overflow-hidden">
              <img
                src={tour.images[0]}
                className="card-img-top transition-all"
                style={{ height: "220px", objectFit: "cover" }} 
                alt={tour.title}
              />
              <span className="tour-price-badge position-absolute top-0 end-0 m-3 badge bg-coral px-3 py-2">
                {tour.price}
              </span>
            </div>
            
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-secondary-custom small d-flex align-items-center gap-1">
                  <FaMapMarkerAlt className="text-coral" /> {tour.location}
                </span>
                <span className="rating d-flex align-items-center gap-1">
                  <FaStar className="text-warning" /> {tour.rating}
                </span>
              </div>
              
              <h4 className="card-title text-teal fw-bold mb-3">
                {tour.title.length > 20
                  ? `${tour.title.slice(0, 20)}...`
                  : tour.title}
              </h4>
              
              <div className="d-flex justify-content-between align-items-center border-top pt-3">
                <span className="text-secondary-custom d-flex align-items-center gap-1">
                  <FaClock className="text-teal" /> {tour.duration}
                </span>
                <button
                  onClick={() => navigate(`/tours/${tour.id}`)}
                  className="btn btn-coral btn-sm px-4 rounded-pill shadow-sm"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TourCard;
