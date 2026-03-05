import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Destinations = () => {
  const navigate = useNavigate();

  // আপনার দেওয়া অ্যারে ফরম্যাট অনুযায়ী ডেটা
  const destinationsData = [
    {
      id: 1,
      title: "Modern Tokyo Discovery",
      location: "Japan",
      description: "Experience the perfect blend of ancient traditions and ultra-modern technology in Japan's bustling capital.",
      images: ['https://images.unsplash.com/photo-1518391846015-55a9cc003b25'],
    },
    {
      id: 2,
      title: "Santorini Sunset Dream",
      location: "Greece",
      description: "Witness the world's most beautiful sunsets over the iconic blue-domed churches and white-washed buildings.",
      images: ['https://images.unsplash.com/photo-1533105079780-92b9be482077'],
    },
    {
      id: 3,
      title: "Dubai Luxury Safari",
      location: "UAE",
      description: "From gold souks to desert dunes, experience the unmatched luxury and adventure of Dubai.",
      images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c'],
    },
    {
      id: 4,
      title: "Swiss Alps Adventure",
      location: "Switzerland",
      description: "Explore the breathtaking snowy peaks and crystal-clear lakes of the majestic Swiss Alps.",
      images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e'],
    },
    {
      id: 5,
      title: "Bali Tropical Paradise",
      location: "Indonesia",
      description: "Relax in the lush jungles and pristine beaches of Bali, the ultimate tropical escape.",
      images: ['https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b'],
    },
    {
      id: 6,
      title: "Paris Romantic Escape",
      location: "France",
      description: "Indulge in the art, culture, and romance of the world's most stylish city.",
      images: ['https://images.unsplash.com/photo-1502602898657-3e91760cbb34'],
    }
  ];

  return (
    <div className="destinations-page">
      {/* --- Hero Section --- */}
      <section 
        className="destinations-hero d-flex align-items-center justify-content-center text-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1600&q=80')`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "80px"
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">Destinations</h1>
          <p className="lead mx-auto" style={{ maxWidth: "600px" }}>
            Explore the world's most beautiful places and create memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* --- All Destinations Grid --- */}
      <section className="container mb-5">
        <div className="row g-4">
          {destinationsData.map((dest) => (
            <div className="col-lg-4 col-md-6" key={dest.id}>
              <div className="card h-100 shadow-sm border-0 overflow-hidden destination-card rounded-4">
                {/* Image Section */}
                <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                  <img 
                    src={dest.images[0]} 
                    className="card-img-top w-100 h-100 object-fit-cover transition-all duration-500" 
                    alt={dest.title} 
                    style={{ transition: "transform 0.5s ease" }}
                  />
                  <div className="destination-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3">
                    <span className="badge bg-coral text-white px-3 py-2 rounded-pill small fw-bold shadow-sm">
                      {dest.location}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="card-title fw-bold text-teal mb-3">{dest.title}</h4>
                  <p className="card-text text-secondary mb-4 flex-grow-1">
                    {dest.description.length > 100 
                      ? `${dest.description.slice(0, 100)}...` 
                      : dest.description}
                  </p>
                  <button 
                    onClick={() => navigate(`/destinations/${dest.id}`)}
                    className="btn btn-coral w-100 py-2 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2"
                  >
                    Explore <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;