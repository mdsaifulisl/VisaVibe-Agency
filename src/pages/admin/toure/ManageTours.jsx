import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import FilterBar from "../../../components/shared/FilterBar";

const ManageTours = () => {
  const navigate = useNavigate();
  
  const [tours, setTours] = useState([
    { "id": 1, "title": "Mesmerizing Switzerland Adventure", "location": "Alps, Switzerland", "duration": "7 Days, 6 Nights", "price": "$1250", "category": "Adventure", "images": ["https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"] },
    { "id": 2, "title": "Modern Tokyo Discovery", "location": "Japan", "duration": "5 Days, 4 Nights", "price": "$850", "category": "City Tour", "images": ["https://images.unsplash.com/photo-1518391846015-55a9cc003b25"] },
    { "id": 3, "title": "Santorini Sunset Dream", "location": "Greece", "duration": "7 Days, 6 Nights", "price": "$1200", "category": "Honeymoon", "images": ["https://images.unsplash.com/photo-1533105079780-92b9be482077"] },
    { "id": 4, "title": "Dubai Luxury Safari", "location": "UAE", "duration": "4 Days, 3 Nights", "price": "$990", "category": "Adventure", "images": ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c"] }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ক্যাটাগরি লিস্ট (ফিল্টারে দেখানোর জন্য)
  const categoriesList = ["Adventure", "City Tour", "Honeymoon"];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      setTours(tours.filter((tour) => tour.id !== id));
    }
  };

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tour.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tour.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--primary-teal)" }}>Tour Management</h3>
          <p className="text-muted small mb-0">Showing {filteredTours.length} of {tours.length} packages</p>
        </div>
        <div>
          <Link to="/admin/add-tour" className="btn shadow-sm px-4 py-2 rounded-pill fw-bold text-white" 
          style={{ backgroundColor: "var(--primary-teal)" }}>
          <FaPlus className="me-2" /> Add New Package
        </Link>
        </div>
      </div>

      {/* Filter Component - আলাদা ফাইল থেকে আসছে */}
      <FilterBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categoriesList}
      />

      {/* Table Card */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead style={{ backgroundColor: "var(--accent-alice-blue)" }}>
              <tr>
                <th className="ps-4 py-3 text-secondary small text-uppercase">Package Details</th>
                <th className="py-3 text-secondary small text-uppercase">Category</th>
                <th className="py-3 text-secondary small text-uppercase">Duration</th>
                <th className="py-3 text-secondary small text-uppercase">Price</th>
                <th className="py-3 text-secondary small text-uppercase text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTours.length > 0 ? (
                filteredTours.map((tour) => (
                  <tr key={tour.id}>
                    <td className="ps-4">
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={tour.images[0]} 
                          alt={tour.title} 
                          className="rounded-3 shadow-sm" 
                          style={{ width: "60px", height: "45px", objectFit: "cover" }} 
                        />
                        <div>
                          <h6 className="mb-0 fw-bold text-dark">{tour.title}</h6>
                          <small className="text-muted d-flex align-items-center gap-1">
                            <FaMapMarkerAlt style={{color: 'var(--secondary-coral)'}} /> {tour.location}
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge rounded-pill bg-light border px-3 py-2 fw-medium" style={{color: 'var(--primary-teal)'}}>
                        {tour.category}
                      </span>
                    </td>
                    <td className="small text-muted">{tour.duration}</td>
                    <td className="fw-bold" style={{ color: "var(--primary-teal)" }}>{tour.price}</td>
                    <td className="text-end pe-4">
                      <div className="d-flex justify-content-end gap-2">
                        <button onClick={() => navigate(`/admin/edit-tour/${tour.id}`)} className="btn btn-sm btn-light text-teal shadow-sm border rounded-3">
                          <FaEdit style={{ color: "var(--primary-teal)" }} />
                        </button>
                        <button onClick={() => handleDelete(tour.id)} className="btn btn-sm btn-light text-coral shadow-sm border rounded-3">
                          <FaTrash style={{ color: "var(--secondary-coral)" }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-muted">
                    No packages found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTours;