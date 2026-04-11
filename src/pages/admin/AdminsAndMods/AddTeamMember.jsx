import React, { useState, useEffect } from "react";
import { FaSave, FaArrowLeft, FaCloudUploadAlt, FaUserTie, FaEnvelope, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";

const AddTeamMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);

  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Moderator",
    status: "Active",
    bio: "",
    image: ""
  });

  useEffect(() => {
    if (isEditMode) {
      // এডিট মোডে ডাটা লোড করার ডামি ডাটা
      const teamData = {
        name: "Md. Saiful Islam",
        email: "saiful01741899@gmail.com",
        phone: "+880 1741-899XXX",
        role: "Super Admin",
        status: "Active",
        bio: "Full Stack Web Developer managing the Travel Admin system.",
        image: "https://ui-avatars.com/api/?name=Saiful+Islam&size=200&background=0D9488&color=fff"
      };
      
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(teamData);
      setSelectedImage({ preview: teamData.image, isExisting: true });
    }
  }, [id, isEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...formData, image: selectedImage?.preview || formData.image };
    console.log("Saving Team Member Data:", finalData);
    // এখানে আপনার API কল হবে
    navigate("/admin/users");
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage({
        preview: URL.createObjectURL(file),
        file: file
      });
    }
  };

  return (
    <div className="animate__animated animate__fadeIn pb-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0" style={{ color: "var(--primary-teal)" }}>
          {isEditMode ? "Edit Team Member" : "Add New Member"}
        </h3>
        <Link to="/admin/users" className="btn btn-outline-secondary rounded-pill px-4 shadow-sm">
          <FaArrowLeft className="me-2" /> Back
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {/* Left Column: Personal Information */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4 border-bottom pb-2">Personal Details</h5>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0"><FaUserTie size={14} /></span>
                    <input 
                      type="text" 
                      className="form-control border-0 bg-light py-3" 
                      placeholder="e.g. Md. Saiful Islam"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0"><FaEnvelope size={14} /></span>
                    <input 
                      type="email" 
                      className="form-control border-0 bg-light py-3" 
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0"><FaPhoneAlt size={14} /></span>
                    <input 
                      type="text" 
                      className="form-control border-0 bg-light py-3" 
                      placeholder="+880 1XXX-XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label className="small fw-bold mb-1">Access Level (Role)</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light border-0"><FaShieldAlt size={14} /></span>
                    <select 
                      className="form-select border-0 bg-light py-3" 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                    >
                      <option value="Super Admin">Super Admin</option>
                      <option value="Moderator">Moderator</option>
                      <option value="Editor">Editor</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 mt-3">
                  <label className="small fw-bold mb-1">Short Biography</label>
                  <textarea 
                    className="form-control border-0 bg-light p-3" 
                    rows="4" 
                    placeholder="Write a short description about this member..."
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image & Actions */}
          <div className="col-lg-4">
            {/* Status Card */}
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-3 border-bottom pb-2">Status</h5>
              <select 
                className={`form-select border-0 fw-bold bg-light ${formData.status === 'Active' ? 'text-success' : 'text-danger'}`}
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
              >
                <option value="Active">● Active</option>
                <option value="Inactive">● Inactive</option>
              </select>
            </div>

            {/* Profile Picture Card */}
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center">
              <h5 className="fw-bold mb-3 border-bottom pb-2 text-start">Profile Picture</h5>
              
              <div className="mb-3">
                <div className="mx-auto mb-3 position-relative" style={{ width: "120px", height: "120px" }}>
                  <img 
                    src={selectedImage?.preview || "https://via.placeholder.com/150"} 
                    className="rounded-circle border border-3 border-light shadow-sm"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    alt="Profile Preview"
                  />
                </div>
                
                <label className="upload-zone border border-dashed rounded-4 p-3 d-block" style={{backgroundColor: 'var(--accent-alice-blue)', cursor: 'pointer'}}>
                  <FaCloudUploadAlt size={24} className="text-teal mb-2" style={{color: 'var(--primary-teal)'}} />
                  <p className="small mb-0 fw-bold text-muted">Click to Upload</p>
                  <input type="file" hidden onChange={handleImageChange} accept="image/*" />
                </label>
              </div>

              <p className="small text-muted mb-0">Recommended size: 400x400px</p>
            </div>

            {/* Save Button */}
            <button type="submit" className="btn w-100 mt-4 py-3 rounded-4 shadow fw-bold text-white" style={{backgroundColor: 'var(--secondary-coral)'}}>
              <FaSave className="me-2" /> {isEditMode ? "Update Member" : "Create Member"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeamMember;