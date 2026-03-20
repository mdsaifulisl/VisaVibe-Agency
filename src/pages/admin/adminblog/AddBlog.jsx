import React, { useState, useEffect } from "react";
import { FaSave, FaArrowLeft, FaCloudUploadAlt, FaTrash, FaUserEdit } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import TextEditor from "../../../components/shared/TextEditor";

const AddBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [content, setContent] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "Md. Saiful Islam",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
    category: "",
  });

  useEffect(() => {
    if (isEditMode) {
      // আপনার JSON ডাটা লোড করা
      const blogData = {
        title: "Saiful Islam Visa Guide for Bangladeshis: How to Apply for a Visa",
        author: "Md. Saiful Islam",
        date: "March 05, 2026",
        category: "Visa Guide",
        content: "<h3>Visa Application Mastery</h3><p>...</p>",
        images: ["https://images.unsplash.com/photo-1518391846015-55a9cc003b25", "https://images.unsplash.com/photo-1533105079780-92b9be482077"]
      };
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(blogData);
      setContent(blogData.content);
      setSelectedImages(blogData.images.map(img => ({ preview: img, isExisting: true })));
    }
  }, [id, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, content, images: selectedImages.map(img => img.preview || img) };
    console.log("Saving Blog Data:", finalData);
    navigate("/admin/blog");
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0" style={{ color: "var(--primary-teal)" }}>
          {isEditMode ? "Edit Article" : "Write New Article"}
        </h3>
        <Link to="/admin/blog" className="btn btn-outline-secondary rounded-pill px-4 shadow-sm">
          <FaArrowLeft className="me-2" /> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <div className="mb-4">
                <label className="small fw-bold mb-1">Blog Title</label>
                <input 
                  type="text" 
                  className="form-control form-control-lg fw-bold border-0 bg-light py-3" 
                  placeholder="e.g. How to get a Visa easily..."
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              <div className="mb-2">
                <label className="small fw-bold mb-2 text-secondary">Main Content</label>
                <TextEditor value={content} onChange={setContent} />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            {/* Meta Info */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Post Details</h5>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Author Name</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0"><FaUserEdit size={14} /></span>
                  <input type="text" className="form-control border-0 bg-light" value={formData.author} onChange={(e) => setFormData({...formData, author: e.target.value})} />
                </div>
              </div>
              <div className="mb-3">
                <label className="small fw-bold mb-1">Category</label>
                <select className="form-select border-0 bg-light" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} required>
                  <option value="">Select Category</option>
                  <option value="Visa Guide">Visa Guide</option>
                  <option value="Travel Tips">Travel Tips</option>
                  <option value="News">News</option>
                </select>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Images Gallery</h5>
              <div className="upload-zone text-center p-3 border border-dashed rounded-4 mb-3" style={{backgroundColor: 'var(--accent-alice-blue)', cursor: 'pointer'}}>
                <FaCloudUploadAlt size={30} className="text-teal mb-2" style={{color: 'var(--primary-teal)'}} />
                <p className="small mb-0">Upload Images</p>
                <input type="file" multiple hidden />
              </div>
              <div className="row g-2">
                {selectedImages.map((img, i) => (
                  <div key={i} className="col-4 position-relative">
                    <img src={img.preview || img} className="img-fluid rounded-3 border" style={{ height: "60px", width: "100%", objectFit: "cover" }} alt="" />
                    <button className="btn btn-danger btn-sm position-absolute top-0 end-0 p-0" style={{width:'18px', height:'18px', fontSize:'10px'}}>×</button>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn w-100 mt-4 py-3 rounded-4 shadow fw-bold text-white" style={{backgroundColor: 'var(--secondary-coral)'}}>
              <FaSave className="me-2" /> {isEditMode ? "Update Article" : "Publish Article"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;