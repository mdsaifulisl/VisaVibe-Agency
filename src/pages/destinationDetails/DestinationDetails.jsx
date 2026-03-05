import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaArrowLeft,
  FaCheckCircle,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";
import Gallery from "../../components/shared/Gallery";

const DestinationDetails = () => {
  const navigate = useNavigate();

  // আপনার স্যাম্পল ডেটা (অ্যারে)
  const destinationsData = [
    {
      id: 1,
      title: "Modern Tokyo Discovery",
      location: "Japan",
      price: "$850",
      rating: 4.8,
      duration: "5 Days",
      description:
        "<h3>Experience Tokyo</h3><p>Explore the neon-lit streets of <strong>Shinjuku</strong> and the temples of <strong>Asakusa</strong>.</p><ul><li>Visit Meiji Shrine</li><li>Authentic Ramen workshop</li></ul>",
      images: [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      ],
      highlights: [
        "Luxury Stay",
        "Local Guide",
        "Entrance Fees Included",
        "Free WiFi",
      ],
    },
  ];

  // আমরা আপাতত প্রথম ডেটাটি ব্যবহার করছি (Real API হলে আপনি useParams ব্যবহার করবেন)
  const destination = destinationsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="destination-details py-5"
      style={{ backgroundColor: "var(--accent-alice-blue)" }}
    >
      <div className="container">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-coral mb-4 rounded-pill px-4"
        >
          <FaArrowLeft className="me-2" /> Back to Destinations
        </button>

        <div className="row g-4">
          {/* --- Left Column --- */}
          <div className="col-lg-12">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4 bg-white">
              {/* Main Image */}
              <div
                className="position-relative overflow-hidden"
                style={{ maxHeight: "450px" }}
              >
                <img
                  src={destination.images[0]}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt={destination.title}
                />
              </div>

              <div className="card-body p-4 p-md-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span
                    className="badge px-3 py-2 rounded-pill fw-bold"
                    style={{
                      backgroundColor: "var(--light-coral)",
                      color: "var(--secondary-coral)",
                    }}
                  >
                    {destination.location}
                  </span>
                  <div className="text-warning fw-bold d-flex align-items-center gap-1">
                    <FaStar /> {destination.rating}{" "}
                    <span className="text-muted fw-normal small">
                      (120 Reviews)
                    </span>
                  </div>
                </div>

                <h1
                  className="fw-bold mb-4"
                  style={{ color: "var(--primary-teal)" }}
                >
                  {destination.title}
                </h1>

                {/* Quick Info Grid */}
                <div className="row g-3 mb-5 py-3 border-top border-bottom text-center">
                  <div className="col-4 border-end">
                    <small className="text-secondary d-block text-uppercase">
                      Duration
                    </small>
                    <span className="fw-bold">
                      <FaClock style={{ color: "var(--primary-teal)" }} />{" "}
                      {destination.duration}
                    </span>
                  </div>
                  <div className="col-4 border-end">
                    <small className="text-secondary d-block text-uppercase">
                      Tour Type
                    </small>
                    <span className="fw-bold">Group Tour</span>
                  </div>
                  <div className="col-4">
                    <small className="text-secondary d-block text-uppercase">
                      Availability
                    </small>
                    <span className="fw-bold text-success">Available</span>
                  </div>
                </div>

                {/* Description */}
                <div className="description-content mb-5">
                  <h4
                    className="fw-bold mb-3"
                    style={{ color: "var(--primary-teal)" }}
                  >
                    Description
                  </h4>
                  <div
                    className="ql-editor p-0 additional-details2"
                    dangerouslySetInnerHTML={{
                      __html: destination.description,
                    }}
                  />
                </div>

                {/* Highlights */}
                <h4
                  className="fw-bold mb-3"
                  style={{ color: "var(--primary-teal)" }}
                >
                  Highlights
                </h4>
                <div className="row g-2">
                  {destination.highlights.map((h, i) => (
                    <div className="col-md-6" key={i}>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <FaCheckCircle
                          style={{ color: "var(--secondary-coral)" }}
                        />{" "}
                        {h}
                      </div>
                    </div>
                  ))}
                </div>


                <div className="mt-5">
                  <hr />
                  <h3 className="fw-bold mb-4">Gallery</h3>
                  <Gallery images={destination.images} />
                </div>

                
              </div>
            </div>
          </div>

          {/* --- Right Column (Sidebar) --- */}
          {/* <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '20px', zIndex: 1 }}>
              <div className="card border-0 shadow-md rounded-4 p-4" style={{ borderTop: '5px solid var(--secondary-coral)' }}>
                <h4 className="fw-bold mb-4 text-center">Book Your Spot</h4>
                <div className="text-center mb-4">
                  <span className="text-muted d-block small">Starting from</span>
                  <h2 className="fw-bold mb-0" style={{ color: 'var(--secondary-coral)' }}>{destination.price}</h2>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold">Select Date</label>
                  <div className="input-group border rounded-3 overflow-hidden">
                    <span className="input-group-text bg-white border-0"><FaCalendarAlt style={{ color: 'var(--primary-teal)' }} /></span>
                    <input type="date" className="form-control border-0" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-bold">Guests</label>
                  <select className="form-select border rounded-3 shadow-none">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>Family Pack</option>
                  </select>
                </div>

                <button className="btn w-100 py-3 fw-bold rounded-pill mb-3 text-white" style={{ backgroundColor: 'var(--secondary-coral)' }}>
                  Book This Destination
                </button>
                <p className="small text-center text-muted mb-0">No cancellation fee for up to 48 hours.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
