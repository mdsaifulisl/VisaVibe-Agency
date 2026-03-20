import React, { useState, useEffect } from "react";
import { FaSave, FaArrowLeft, FaPlus, FaTrash, FaCloudUploadAlt, FaStar } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import TextEditor from "../../../components/shared/TextEditor";

const AddDestination = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [description, setDescription] = useState("");
  const [selectedImages] = useState([]);
  const [highlightInput, setHighlightInput] = useState("");
  
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    duration: "",
    rating: "5.0",
    highlights: []
  });

  // Edit Mode-এ ডাটা ফেচ করা
  useEffect(() => {
    if (isEditMode) {
      // এখানে API কল হবে, আপাতত ডামি ডাটা
      const existingData = {
        title: "Modern Tokyo Discovery",
        location: "Japan",
        price: "$850",
        duration: "5 Days",
        rating: 4.8,
        highlights: ["Luxury Stay", "Local Guide", "Entrance Fees Included"],
        description: "<h3>Experience Tokyo</h3>"
      };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(existingData);
      setDescription(existingData.description);
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Highlights হ্যান্ডেল করার ফাংশন
  const addHighlight = () => {
    if (highlightInput.trim()) {
      setFormData({
        ...formData,
        highlights: [...formData.highlights, highlightInput.trim()]
      });
      setHighlightInput("");
    }
  };

  const removeHighlight = (index) => {
    const updatedHighlights = formData.highlights.filter((_, i) => i !== index);
    setFormData({ ...formData, highlights: updatedHighlights });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, description, images: selectedImages };

    // API
    if(isEditMode) {
      console.log("Updating Data for ID:", id, finalData);
      alert("Destination Updated Successfully!");
    } else {
      console.log("Creating New Data:", finalData);
      alert("New Destination Created Successfully!");
    }

    navigate("/admin/destinations");
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-0" style={{ color: "var(--primary-teal)" }}>
            {isEditMode ? "Edit Destination" : "Create Destination"}
          </h3>
        </div>
        <Link to="/admin/destinations" className="btn btn-outline-secondary rounded-pill px-4">
          <FaArrowLeft className="me-2" /> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {/* Main Info */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4 border-bottom pb-2">Basic Details</h5>
              <div className="row g-3">
                <div className="col-12">
                  <label className="small fw-bold mb-1">Destination Title</label>
                  <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required placeholder="e.g. Modern Tokyo Discovery" />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Location (Country/City)</label>
                  <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} required placeholder="e.g. Japan" />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Duration</label>
                  <input type="text" name="duration" className="form-control" value={formData.duration} onChange={handleChange} placeholder="e.g. 5 Days" />
                </div>
                <div className="col-12">
                  <label className="small fw-bold mb-2">Detailed Description</label>
                  <TextEditor value={description} onChange={setDescription} />
                </div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Tour Highlights</h5>
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Add a highlight (e.g. Free WiFi)" 
                  value={highlightInput}
                  onChange={(e) => setHighlightInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
                />
                <button className="btn text-white" type="button" style={{backgroundColor: 'var(--primary-teal)'}} onClick={addHighlight}>
                  <FaPlus />
                </button>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {formData.highlights.map((item, index) => (
                  <span key={index} className="badge bg-light text-dark border p-2 d-flex align-items-center gap-2">
                    {item} <FaTrash size={10} className="text-danger cursor-pointer" onClick={() => removeHighlight(index)} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Pricing & Rating</h5>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Price</label>
                <input type="text" name="price" className="form-control" value={formData.price} onChange={handleChange} placeholder="e.g. $850" />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Rating</label>
                <div className="input-group">
                  <span className="input-group-text bg-white"><FaStar className="text-warning" /></span>
                  <input type="number" step="0.1" max="5" name="rating" className="form-control" value={formData.rating} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Media Gallery</h5>
              <div className="upload-zone text-center p-4 border border-dashed rounded-4 mb-3" style={{backgroundColor: 'var(--accent-alice-blue)', cursor: 'pointer'}}>
                <FaCloudUploadAlt size={30} className="text-teal mb-2" style={{color: 'var(--primary-teal)'}} />
                <p className="small mb-0 text-muted">Click to upload images</p>
                <input type="file" multiple hidden />
              </div>
              <p className="small text-muted text-center">Images from your JSON will appear here.</p>
            </div>

            <button type="submit" className="btn w-100 mt-4 py-3 rounded-4 shadow fw-bold text-white" style={{backgroundColor: 'var(--secondary-coral)'}}>
              <FaSave className="me-2" /> {isEditMode ? "Save Changes" : "Publish Destination"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddDestination;