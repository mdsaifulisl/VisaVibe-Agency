import React, { useState, useEffect } from "react";
import { FaSave, FaArrowLeft, FaCloudUploadAlt, FaPlane, FaGlobe, FaDollarSign, FaTicketAlt, FaTrash } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";

const AddAirTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  // eslint-disable-next-line no-unused-vars
  const [selectedImages, setSelectedImages] = useState([]);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    airline: "",
    price: "",
    type: "Round Trip",
    image: "", // Main thumbnail
  });

  useEffect(() => {
    if (isEditMode) {
      // ডামি ডাটা (এডিট মোডের জন্য)
      const ticketData = {
        from: "Dhaka (DAC)",
        to: "Bangkok (BKK)",
        airline: "Thai Airways",
        price: "28,500 BDT",
        type: "Round Trip",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(ticketData);
      setSelectedImages([ticketData.image]); // এডিট মোডে ইমেজ লোড
    }
  }, [id, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Ticket Data:", formData);
    navigate("/admin/tickets");
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0" style={{ color: "var(--primary-teal)" }}>
          {isEditMode ? "Edit Air Ticket" : "Add New Ticket"}
        </h3>
        <Link to="/admin/tickets" className="btn btn-outline-secondary rounded-pill px-4 shadow-sm">
          <FaArrowLeft className="me-2" /> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {/* Left Column: Route & Main Info */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4 border-bottom pb-2">Flight Route Info</h5>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Departure (From)</label>
                  <input 
                    type="text" 
                    className="form-control border-0 bg-light py-3" 
                    placeholder="e.g. Dhaka (DAC)"
                    value={formData.from}
                    onChange={(e) => setFormData({...formData, from: e.target.value})}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Arrival (To)</label>
                  <input 
                    type="text" 
                    className="form-control border-0 bg-light py-3" 
                    placeholder="e.g. Bangkok (BKK)"
                    value={formData.to}
                    onChange={(e) => setFormData({...formData, to: e.target.value})}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="small fw-bold mb-1">Airline Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0"><FaPlane size={14} /></span>
                    <input 
                      type="text" 
                      className="form-control border-0 bg-light py-3" 
                      placeholder="e.g. Emirates / Thai Airways"
                      value={formData.airline}
                      onChange={(e) => setFormData({...formData, airline: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Description / Short Note */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Short Description</h5>
              <textarea 
                className="form-control border-0 bg-light" 
                rows="5" 
                placeholder="Add flight details, baggage info or rules..."
              ></textarea>
            </div>
          </div>

          {/* Right Column: Pricing & Image */}
          <div className="col-lg-4">
            {/* Price & Type Info */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Pricing & Type</h5>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Ticket Price</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0"><FaDollarSign size={14} /></span>
                  <input 
                    type="text" 
                    className="form-control border-0 bg-light" 
                    placeholder="e.g. 35,000 BDT"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Trip Type</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0"><FaTicketAlt size={14} /></span>
                  <select 
                    className="form-select border-0 bg-light" 
                    value={formData.type} 
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="Round Trip">Round Trip</option>
                    <option value="One Way">One Way</option>
                    <option value="Multi-City">Multi-City</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Image Gallery / Thumbnail */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Featured Image</h5>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Image URL</label>
                <input 
                  type="text" 
                  className="form-control border-0 bg-light mb-3" 
                  placeholder="Paste image link here..."
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                />
              </div>

              <div className="upload-zone text-center p-3 border border-dashed rounded-4 mb-3" style={{backgroundColor: 'var(--accent-alice-blue)', cursor: 'pointer'}}>
                <FaCloudUploadAlt size={30} className="text-teal mb-2" style={{color: 'var(--primary-teal)'}} />
                <p className="small mb-0">Upload File</p>
                <input type="file" hidden />
              </div>

              {/* Preview Image */}
              {formData.image && (
                <div className="position-relative">
                  <img 
                    src={formData.image} 
                    className="img-fluid rounded-3 border w-100" 
                    style={{ height: "150px", objectFit: "cover" }} 
                    alt="Preview" 
                  />
                  <button 
                    type="button"
                    className="btn btn-danger btn-sm position-absolute top-0 end-0 p-0 shadow" 
                    style={{width:'22px', height:'22px'}}
                    onClick={() => setFormData({...formData, image: ""})}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn w-100 mt-4 py-3 rounded-4 shadow fw-bold text-white" style={{backgroundColor: 'var(--secondary-coral)'}}>
              <FaSave className="me-2" /> {isEditMode ? "Update Ticket" : "Save Air Ticket"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAirTicket;