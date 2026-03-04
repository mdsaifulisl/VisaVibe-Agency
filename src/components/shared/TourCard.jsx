import React from "react";
import { FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
const TourCard = ({ cardData }) => {
  const navigate = useNavigate();

  
const tourData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25',
    title: "Modern Tokyo Discovery",
    location: "Japan",
    duration: "5 Days",
    price: "$850",
    rating: 4.8
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    title: "Santorini Sunset Dream",
    location: "Greece",
    duration: "7 Days",
    price: "$1200",
    rating: 5.0
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    title: "Dubai Luxury Safari",
    location: "UAE",
    duration: "4 Days",
    price: "$990",
    rating: 4.7
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25',
    title: "Modern Tokyo Discovery",
    location: "Japan",
    duration: "5 Days",
    price: "$850",
    rating: 4.8
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    title: "Santorini Sunset Dream",
    location: "Greece",
    duration: "7 Days",
    price: "$1200",
    rating: 5.0
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    title: "Dubai Luxury Safari Dubai Luxury Safari Dubai Luxury Safari Dubai Luxury Safari",
    location: "UAE",
    duration: "4 Days",
    price: "$990",
    rating: 4.7
  }
];
  return (
    <>
      {tourData.map((tour) => (
        <div className="col-lg-4 col-md-6" key={tour.id}>
          <div className="tour-card shadow-sm border-0 h-100">
            <div className="tour-img-wrapper">
              <img src={tour.image} className="card-img-top" alt={tour.title} />
              <span className="tour-price-badge">{tour.price}</span>
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
                {tour.title.length > 20 ? `${tour.title.slice(0, 20)}...` : tour.title}
              </h4>
              <div className="d-flex justify-content-between align-items-center border-top pt-3">
                <span className="text-secondary-custom d-flex align-items-center gap-1">
                  <FaClock className="text-teal" /> {tour.duration}
                </span>
                <button onClick={() => navigate(`/tour/${tour.id}`)} className="btn btn-coral btn-sm px-3 rounded-pill">
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
