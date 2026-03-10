import React, { useState } from "react";
import { FaSave, FaArrowLeft, FaPlus, FaTrash, FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import TextEditor from "../../../components/shared/TextEditor";
import 'react-quill-new/dist/quill.snow.css'; // কুইল স্টাইল

const AddTour = () => {
  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]); // ফাইল স্টোর করার জন্য
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    duration: "",
    groupSize: "",
    price: "",
    category: "",
    highlights: [""]
  });

  // টেক্সট ইনপুট হ্যান্ডলার
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ইমেজ ফাইল হ্যান্ডলার
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    // প্রিভিউ দেখার জন্য ফাইলগুলোকে প্রসেস করা
    const filePreviews = files.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    }));
    setSelectedImages([...selectedImages, ...filePreviews]);
  };

  const removeImage = (index) => {
    const filtered = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(filtered);
  };

  // ডাইনামিক হাইলাইটস হ্যান্ডলার
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
    console.log("Submitting Data:", finalData);
    alert("Check Console! Images are in File object format.");
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold w-100 mb-0" style={{ color: "var(--primary-teal)" }}>Create New <span className="d-none d-lg-inline-block">Package</span></h3>
        <Link to="/admin/tours" className="btn btn-outline-secondary rounded-pill px-4 d-flex align-items-center">
          <FaArrowLeft className="me-2" /> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            {/* General Info */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4 border-bottom pb-2">General Information</h5>
              <div className="row g-3">
                <div className="col-12">
                  <label className="small fw-bold mb-1">Tour Title</label>
                  <input type="text" name="title" className="form-control rounded-3" onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Location</label>
                  <input type="text" name="location" className="form-control rounded-3" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Category</label>
                  <select name="category" className="form-select rounded-3" onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Honeymoon">Honeymoon</option>
                  </select>
                </div>
                <div className="col-12">
        <label className="small fw-bold mb-2 text-secondary">Detailed Description</label>
        {/* এখানে আমাদের রিইউজেবল এডিটরটি ব্যবহার করা হলো */}
        <TextEditor 
          value={description} 
          onChange={setDescription} 
          placeholder="Enter tour details and itinerary..."
        />
      </div>
              </div>
            </div>

            {/* Highlights */}
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
            {/* Pricing Details */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Pricing Details</h5>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Price ($)</label>
                <input type="text" name="price" className="form-control" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Duration</label>
                <input type="text" name="duration" className="form-control" onChange={handleChange} />
              </div>
            </div>

            {/* Image Upload Area */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Upload Gallery</h5>
              <div className="upload-zone text-center p-4 border border-dashed rounded-4 mb-3" 
                   style={{ borderStyle: 'dashed', cursor: 'pointer', backgroundColor: 'var(--accent-alice-blue)' }}>
                <input type="file" multiple accept="image/*" onChange={handleImageChange} id="fileInput" hidden />
                <label htmlFor="fileInput" className="cursor-pointer">
                  <FaCloudUploadAlt size={40} className="text-teal mb-2" style={{color: 'var(--primary-teal)'}} />
                  <p className="small mb-0">Click to upload JPG, PNG</p>
                </label>
              </div>
              
              {/* Image Previews */}
              <div className="row g-2">
                {selectedImages.map((file, i) => (
                  <div key={i} className="col-4 position-relative">
                    <img src={file.preview} className="img-fluid rounded-3 border" alt="preview" style={{ height: "60px", width: "100%", objectFit: "cover" }} />
                    <button type="button" onClick={() => removeImage(i)} className="btn btn-danger btn-sm position-absolute top-0 end-0 p-0 shadow-sm" style={{ width: "18px", height: "18px", fontSize: "10px" }}>×</button>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn w-100 mt-4 py-3 rounded-4 shadow fw-bold text-white shadow-lg" style={{backgroundColor: 'var(--secondary-coral)'}}>
              <FaSave className="me-2" /> Publish Package
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTour;