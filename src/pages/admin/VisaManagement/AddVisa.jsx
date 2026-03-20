import React, { useState, useEffect } from "react";
import {
  FaSave,
  FaArrowLeft,
  FaPlus,
  FaTrash,
  FaCloudUploadAlt,
  FaPassport,
} from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import TextEditor from "../../../components/shared/TextEditor";

const AddVisa = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [description, setDescription] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    country: "",
    type: "",
    fee: "",
    duration: "",
    validity: "",
    entry: "",
    continent: "",
  });

  // Edit Mode হলে ডাটা লোড করা
  useEffect(() => {
    if (isEditMode) {
      // এখানে আপনার API বা Data Source থেকে ডাটা আসবে
      // উদাহরণ হিসেবে একটি ডামি ডাটা সেট করা হলো:
      const existingVisa = {
        title: "Thailand Visa Application & Requirements for Bangladeshis",
        country: "Thailand",
        type: "Tourist Sticker Visa",
        fee: "5,500 BDT",
        duration: "5-7 Working Days",
        validity: "90 Days",
        entry: "Single Entry",
        continent: "Asia",
        description: "<h4>Detailed Requirements for Thailand...</h4>",
      };

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(existingVisa);
      setDescription(existingVisa.description);
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      }),
    );
    setSelectedImages([...selectedImages, ...filePreviews]);
  };

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, description, images: selectedImages };

    // API
    if (isEditMode) {
      console.log("Updating Data for ID:", id, finalData);
      alert("Visa Updated Successfully!");
    } else {
      console.log("Creating New Data:", finalData);
      alert("New Visa Created Successfully!");
    }

    navigate("/admin/visas");
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-0" style={{ color: "var(--primary-teal)" }}>
            {isEditMode ? "Edit Visa" : "Add New Visa"}
          </h3>
          <small className="text-muted">
            {formData.country || "Visa Service"}
          </small>
        </div>
        <Link
          to="/admin/visas"
          className="btn btn-outline-secondary rounded-pill px-4 d-flex align-items-center"
        >
          <FaArrowLeft className="me-2" /> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            {/* General Info */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4 border-bottom pb-2">
                Visa Information
              </h5>
              <div className="row g-3">
                <div className="col-12">
                  <label className="small fw-bold mb-1">Page Title (SEO)</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="form-control"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Continent</label>
                  <select
                    name="continent"
                    className="form-select"
                    value={formData.continent}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Continent</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Australia">Australia (Oceania)</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="small fw-bold mb-2 text-secondary">
                    Visa Requirements & Description
                  </label>
                  <TextEditor value={description} onChange={setDescription} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {/* Visa Specifications */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">
                Specifications
              </h5>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Visa Type</label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  placeholder="e.g. Tourist Sticker"
                  value={formData.type}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Visa Fee</label>
                <input
                  type="text"
                  name="fee"
                  className="form-control"
                  placeholder="e.g. 5,500 BDT"
                  value={formData.fee}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Validity</label>
                <input
                  type="text"
                  name="validity"
                  className="form-control"
                  placeholder="e.g. 90 Days"
                  value={formData.validity}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Entry Type</label>
                <input
                  type="text"
                  name="entry"
                  className="form-control"
                  placeholder="e.g. Single/Multiple"
                  value={formData.entry}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Processing Time</label>
                <input
                  type="text"
                  name="duration"
                  className="form-control"
                  placeholder="e.g. 5-7 Days"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Image Gallery */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Gallery</h5>
              <div
                className="upload-zone text-center p-3 border border-dashed rounded-4 mb-3"
                style={{
                  cursor: "pointer",
                  backgroundColor: "var(--accent-alice-blue)",
                }}
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  id="visaFile"
                  hidden
                />
                <label htmlFor="visaFile" className="cursor-pointer w-100 mb-0">
                  <FaCloudUploadAlt
                    size={30}
                    className="text-teal mb-2"
                    style={{ color: "var(--primary-teal)" }}
                  />
                  <p className="small mb-0">Upload Images</p>
                </label>
              </div>
              <div className="row g-2">
                {selectedImages.map((file, i) => (
                  <div key={i} className="col-4 position-relative">
                    <img
                      src={file.preview}
                      className="img-fluid rounded-3 border"
                      alt="preview"
                      style={{
                        height: "50px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="btn btn-danger btn-sm position-absolute top-0 end-0 p-0"
                      style={{
                        width: "16px",
                        height: "16px",
                        fontSize: "10px",
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn w-100 mt-4 py-3 rounded-4 shadow fw-bold text-white"
              style={{ backgroundColor: "var(--secondary-coral)" }}
            >
              <FaSave className="me-2" />{" "}
              {isEditMode ? "Update Service" : "Publish Service"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
