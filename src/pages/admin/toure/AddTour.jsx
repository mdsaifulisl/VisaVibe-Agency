import React, { useState, useEffect } from "react";
import { FaSave, FaArrowLeft, FaPlus, FaTrash, FaCloudUploadAlt } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import TextEditor from "../../../components/shared/TextEditor";
import 'react-quill-new/dist/quill.snow.css';

const AddTour = () => {
  const { id } = useParams(); // URL থেকে ID নেওয়ার জন্য
  const navigate = useNavigate();
  const isEditMode = Boolean(id); // ID থাকলে Edit Mode true হবে

  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    duration: "",
    groupSize: "",
    price: "",
    category: "",
    highlights: [""]
  });

  // ১. Edit Mode হলে ডাটা লোড করার ইফেক্ট
  useEffect(() => {
    if (isEditMode) {
      // এখানে আপনার ডাটা সোর্স থেকে আইডি অনুযায়ী ডাটা নিয়ে আসবেন
      // আপাতত আপনার দেওয়া ডাটা স্ট্রাকচার অনুযায়ী একটি উদাহরণ দেওয়া হলো:
      const existingData = {
        title: "Mesmerizing Switzerland Adventure",
        location: "Alps, Switzerland",
        duration: "7 Days, 6 Nights",
        groupSize: "15 People",
        price: "$1250",
        category: "Adventure",
        highlights: ["Cable car ride to Mt. Titlis", "Lucerne City Walking Tour"],
        description: "<h3>Old Description</h3>" 
      };

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(existingData);
      setDescription(existingData.description);
      // নোট: পুরনো ইমেজগুলো প্রিভিউতে দেখানোর জন্য setSelectedImages এ সেট করতে পারেন
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setSelectedImages([...selectedImages, ...filePreviews]);
  };

  const removeImage = (index) => {
    const filtered = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(filtered);
  };

  const handleHighlightChange = (index, value) => {
    const list = [...formData.highlights];
    list[index] = value;
    setFormData({ ...formData, highlights: list });
  };

  const addHighlight = () => {
    setFormData({ ...formData, highlights: [...formData.highlights, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, description, images: selectedImages };
    
    if (isEditMode) {
      console.log("Updating Data for ID:", id, finalData);
      alert("Package Updated Successfully!");
    } else {
      console.log("Creating New Data:", finalData);
      alert("New Package Created Successfully!");
    }
    navigate("/admin/tours"); // কাজ শেষ হলে লিস্ট পেজে নিয়ে যাবে
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-0" style={{ color: "var(--primary-teal)" }}>
            {isEditMode ? "Edit" : "Create New"} <span className="d-none d-lg-inline-block">Package</span>
          </h3>
          {isEditMode && <small className="text-muted">Editing ID: {id}</small>}
        </div>
        <Link to="/admin/tours" className="btn btn-outline-secondary rounded-pill px-4 d-flex align-items-center">
          <FaArrowLeft className="me-2" /> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4 border-bottom pb-2">General Information</h5>
              <div className="row g-3">
                <div className="col-12">
                  <label className="small fw-bold mb-1">Tour Title</label>
                  <input type="text" name="title" className="form-control rounded-3" value={formData.title} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Location</label>
                  <input type="text" name="location" className="form-control rounded-3" value={formData.location} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Category</label>
                  <select name="category" className="form-select rounded-3" value={formData.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="City Tour">City Tour</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="small fw-bold mb-2 text-secondary">Detailed Description</label>
                  <TextEditor 
                    value={description} 
                    onChange={setDescription} 
                    placeholder="Enter tour details and itinerary..."
                  />
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Highlights</h5>
              {formData.highlights.map((h, i) => (
                <div key={i} className="d-flex gap-2 mb-2">
                  <input type="text" className="form-control" value={h} onChange={(e) => handleHighlightChange(i, e.target.value)} />
                  <button type="button" className="btn btn-light text-danger" onClick={() => {
                    const list = [...formData.highlights];
                    list.splice(i, 1);
                    setFormData({...formData, highlights: list});
                  }}><FaTrash /></button>
                </div>
              ))}
              <button type="button" className="btn btn-sm btn-teal mt-2" style={{backgroundColor: 'var(--primary-teal)', color: 'white'}} onClick={addHighlight}>
                <FaPlus size={12} /> Add More
              </button>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Pricing Details</h5>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Price ($)</label>
                <input type="text" name="price" className="form-control" value={formData.price} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Duration</label>
                <input type="text" name="duration" className="form-control" value={formData.duration} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Group Size</label>
                <input type="text" name="groupSize" className="form-control" value={formData.groupSize} onChange={handleChange} />
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Upload Gallery {isEditMode && "(New)"}</h5>
              <div className="upload-zone text-center p-4 border border-dashed rounded-4 mb-3" 
                   style={{ borderStyle: 'dashed', cursor: 'pointer', backgroundColor: 'var(--accent-alice-blue)' }}>
                <input type="file" multiple accept="image/*" onChange={handleImageChange} id="fileInput" hidden />
                <label htmlFor="fileInput" className="cursor-pointer w-100">
                  <FaCloudUploadAlt size={40} className="text-teal mb-2" style={{color: 'var(--primary-teal)'}} />
                  <p className="small mb-0">Click to upload JPG, PNG</p>
                </label>
              </div>
              
              <div className="row g-2">
                {selectedImages.map((file, i) => (
                  <div key={i} className="col-4 position-relative">
                    <img src={file.preview} className="img-fluid rounded-3 border" alt="preview" style={{ height: "60px", width: "100%", objectFit: "cover" }} />
                    <button type="button" onClick={() => removeImage(i)} className="btn btn-danger btn-sm position-absolute top-0 end-0 p-0 shadow-sm" style={{ width: "18px", height: "18px", fontSize: "12px", lineHeight: "1" }}>×</button>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn w-100 mt-4 py-3 rounded-4 shadow fw-bold text-white shadow-lg" style={{backgroundColor: 'var(--secondary-coral)'}}>
              <FaSave className="me-2" /> {isEditMode ? "Save Changes" : "Publish Package"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTour;