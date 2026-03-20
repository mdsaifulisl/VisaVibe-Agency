import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaMapMarkerAlt, FaStar, FaClock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import FilterBar from "../../../components/shared/FilterBar";

const ManageDestinations = () => {
  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([
    {
      "id": 1,
      "title": "Modern Tokyo Discovery",
      "location": "Japan",
      "price": "$850",
      "rating": 4.8,
      "duration": "5 Days",
      "description": "<h3>Experience Tokyo</h3><p>Explore the neon-lit streets of <strong>Shinjuku</strong> and the temples of <strong>Asakusa</strong>.</p><ul><li>Visit Meiji Shrine</li><li>Authentic Ramen workshop</li></ul>",
      "images": [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26"
      ],
      "highlights": ["Luxury Stay", "Local Guide", "Entrance Fees Included"]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ফিল্টারের জন্য ইউনিক লোকেশন বের করা
  const uniqueLocations = [...new Set(destinations.map(d => d.location))];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this destination?")) {
      setDestinations(destinations.filter((dest) => dest.id !== id));
    }
  };

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dest.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || dest.location === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--primary-teal)" }}>Destinations</h3>
          <p className="text-muted small mb-0">Manage your featured spots and destination details</p>
        </div>
        <Link to="/admin/add-destination" className="btn shadow-sm px-4 py-2 rounded-pill fw-bold text-white" 
          style={{ backgroundColor: "var(--primary-teal)" }}>
          <FaPlus className="me-2" /> Add New Spot
        </Link>
      </div>

      <FilterBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={uniqueLocations}
        placeholder="Search by title or country..."
      />

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead style={{ backgroundColor: "var(--accent-alice-blue)" }}>
              <tr>
                <th className="ps-4 py-3 text-secondary small text-uppercase">Destination</th>
                <th className="py-3 text-secondary small text-uppercase">Highlights</th>
                <th className="py-3 text-secondary small text-uppercase">Duration & Rating</th>
                <th className="py-3 text-secondary small text-uppercase">Price</th>
                <th className="py-3 text-secondary small text-uppercase text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDestinations.map((dest) => (
                <tr key={dest.id}>
                  <td className="ps-4">
                    <div className="d-flex align-items-center gap-3">
                      <img 
                        src={dest.images[0]} 
                        alt={dest.title} 
                        className="rounded-3 shadow-sm" 
                        style={{ width: "60px", height: "45px", objectFit: "cover" }} 
                      />
                      <div>
                        <h6 className="mb-0 fw-bold text-dark">{dest.title}</h6>
                        <small className="text-muted d-flex align-items-center gap-1">
                          <FaMapMarkerAlt size={10} style={{color: 'var(--secondary-coral)'}} /> {dest.location}
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex flex-wrap gap-1">
                      {dest.highlights.slice(0, 2).map((h, i) => (
                        <span key={i} className="badge bg-light text-dark border-0 small fw-normal" style={{fontSize: '10px'}}>
                          {h}
                        </span>
                      ))}
                      {dest.highlights.length > 2 && <span className="small text-muted">+{dest.highlights.length - 2}</span>}
                    </div>
                  </td>
                  <td>
                    <div className="small text-dark mb-1"><FaClock className="me-1 text-muted" size={12} /> {dest.duration}</div>
                    <div className="small text-warning"><FaStar className="me-1" size={12} /> {dest.rating}</div>
                  </td>
                  <td className="fw-bold" style={{ color: "var(--primary-teal)" }}>{dest.price}</td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-2">
                      <button onClick={() => navigate(`/admin/edit-destination/${dest.id}`)} className="btn btn-sm btn-light border rounded-3">
                        <FaEdit style={{ color: "var(--primary-teal)" }} />
                      </button>
                      <button onClick={() => handleDelete(dest.id)} className="btn btn-sm btn-light border rounded-3">
                        <FaTrash style={{ color: "var(--secondary-coral)" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageDestinations;