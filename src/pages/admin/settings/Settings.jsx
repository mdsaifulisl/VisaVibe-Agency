import React, { useState } from "react";
import { 
  FaUser, FaLock, FaGlobe, FaUsersCog, 
  FaCamera, FaSave, FaUserPlus, FaTrash, 
  FaShieldAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt 
} from "react-icons/fa";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // ডামি টিম ডেটা
  // eslint-disable-next-line no-unused-vars
  const [team, setTeam] = useState([
    { id: 1, name: "Md. Saiful Islam", email: "saiful@admin.com", role: "Super Admin", status: "Active" },
    { id: 2, name: "Rakibul Hasan", email: "rakib@mod.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Tanvir Ahmed", email: "tanvir@test.com", role: "Editor", status: "Pending" },
  ]);

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Page Header */}
      <div className="mb-4">
        <h3 className="fw-bold mb-1" style={{ color: "var(--primary-teal)" }}>Account Settings</h3>
        <p className="text-muted small">Update your profile, manage team access and site configurations.</p>
      </div>

      <div className="row g-4">
        {/* Left Sidebar Navigation */}
        <div className="col-lg-3">
          <div className="card border-0 shadow-sm rounded-4 p-2 sticky-top" style={{ top: '20px' }}>
            <div className="nav flex-column nav-pills gap-2">
              <button 
                onClick={() => setActiveTab("profile")} 
                className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start transition-all ${activeTab === "profile" ? "active shadow-sm" : "text-muted hover-bg-light"}`}
                style={activeTab === "profile" ? { backgroundColor: "var(--primary-teal)" } : {}}
              >
                <FaUser /> <span>Profile Info</span>
              </button>

              <button 
                onClick={() => setActiveTab("team")} 
                className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start transition-all ${activeTab === "team" ? "active shadow-sm" : "text-muted hover-bg-light"}`}
                style={activeTab === "team" ? { backgroundColor: "var(--primary-teal)" } : {}}
              >
                <FaUsersCog /> <span>Admin & Moderators</span>
              </button>

              <button 
                onClick={() => setActiveTab("password")} 
                className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start transition-all ${activeTab === "password" ? "active shadow-sm" : "text-muted hover-bg-light"}`}
                style={activeTab === "password" ? { backgroundColor: "var(--primary-teal)" } : {}}
              >
                <FaLock /> <span>Security</span>
              </button>

              <button 
                onClick={() => setActiveTab("site")} 
                className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start transition-all ${activeTab === "site" ? "active shadow-sm" : "text-muted hover-bg-light"}`}
                style={activeTab === "site" ? { backgroundColor: "var(--primary-teal)" } : {}}
              >
                <FaGlobe /> <span>Site Config</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="col-lg-9">
          <div className="card border-0 shadow-sm rounded-4 p-4 min-vh-60">
            
            {/* 1. Profile Information Section */}
            {activeTab === "profile" && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="fw-bold mb-4">My Profile</h5>
                <div className="d-flex align-items-center gap-4 mb-4 pb-3 border-bottom">
                  {/* <div className="position-relative">
                    <img 
                      src="https://i.ibb.co/L8N2YvX/user-placeholder.png" 
                      alt="Admin" 
                      className="rounded-circle border p-1"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <label className="btn btn-sm btn-light position-absolute bottom-0 end-0 shadow-sm rounded-circle p-2 cursor-pointer">
                      <FaCamera size={12} />
                      <input type="file" hidden />
                    </label>
                  </div> */}
                  <div>
                    <h5 className="mb-1 fw-bold">Md. Saiful Islam</h5>
                    <p className="text-muted small mb-0">Role: Super Admin</p>
                  </div>
                </div>

                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Full Name</label>
                    <input type="text" className="form-control rounded-3 py-2 shadow-none" defaultValue="Md. Saiful Islam" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Email</label>
                    <input type="email" className="form-control rounded-3 py-2 shadow-none" defaultValue="admin@travel.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Phone</label>
                    <input type="text" className="form-control rounded-3 py-2 shadow-none" defaultValue="+880 1700 000 000" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Bio</label>
                    <input type="text" className="form-control rounded-3 py-2 shadow-none" defaultValue="Managing Travel & Visa services" />
                  </div>
                  <div className="col-12 mt-4">
                    <button type="button" className="btn text-white px-4 py-2 rounded-pill fw-bold" style={{backgroundColor: 'var(--primary-teal)'}}>
                      <FaSave className="me-2" /> Update Profile
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* 2. Team Management Section */}
            {activeTab === "team" && (
              <div className="animate__animated animate__fadeIn">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0">Team Access Management</h5>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead>
                      <tr className="text-muted small">
                        <th>USER</th>
                        <th>ROLE</th>
                        <th>STATUS</th>
                        <th className="text-end">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <div className="fw-bold small">{user.name}</div>
                            <div className="text-muted" style={{fontSize: '11px'}}>{user.email}</div>
                          </td>
                          <td>
                            <span className={`badge rounded-pill px-3 py-2 ${user.role === 'Super Admin' ? 'bg-danger-subtle text-danger' : 'bg-info-subtle text-info'}`} style={{fontSize: '10px'}}>
                              {user.role}
                            </span>
                          </td>
                          <td>
                            <span className="small text-success fw-bold">● {user.status}</span>
                          </td>
                          <td className="text-end">
                            <button className="btn btn-sm btn-outline-danger border-0"><FaTrash size={14} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-4 rounded-4 bg-light border-dashed">
                  <h6 className="fw-bold mb-3 small"><FaUserPlus className="me-2 text-teal" /> Invite New Member</h6>
                  <div className="row g-2">
                    <div className="col-md-5">
                      <input type="email" className="form-control form-control-sm rounded-3" placeholder="Enter email" />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select form-select-sm rounded-3">
                        <option value="super-admin">Super Admin</option>
                        <option value="moderator">Moderator</option>
                        <option value="editor">Editor</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-sm btn-dark w-100 rounded-3 py-2">Invite</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Security (Password) Section */}
            {activeTab === "password" && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="fw-bold mb-4">Security Settings</h5>
                <form className="row g-3" style={{ maxWidth: '450px' }}>
                  <div className="col-12">
                    <label className="form-label small fw-bold">Current Password</label>
                    <input type="password" placeholder="••••••••" className="form-control rounded-3 py-2 shadow-none" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-bold">New Password</label>
                    <input type="password" placeholder="New Password" className="form-control rounded-3 py-2 shadow-none" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-bold">Confirm New Password</label>
                    <input type="password" placeholder="Confirm Password" className="form-control rounded-3 py-2 shadow-none" />
                  </div>
                  <div className="col-12 mt-4">
                    <button type="button" className="btn text-white px-4 py-2 rounded-pill fw-bold" style={{backgroundColor: 'var(--primary-teal)'}}>
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* 4. Site Configuration Section */}
            {activeTab === "site" && (
              <div className="animate__animated animate__fadeIn">
                <h5 className="fw-bold mb-4">Site Global Settings</h5>
                <form className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-uppercase" style={{fontSize: '10px'}}>Website Name</label>
                    <input type="text" className="form-control rounded-3 py-2" defaultValue="Travel Agency Admin" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-uppercase" style={{fontSize: '10px'}}>Support Email</label>
                    <input type="email" className="form-control rounded-3 py-2" defaultValue="contact@travel.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-bold text-uppercase" style={{fontSize: '10px'}}>Office Address</label>
                    <textarea className="form-control rounded-3" rows="2" defaultValue="Dhaka, Bangladesh"></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-uppercase" style={{fontSize: '10px'}}>Maintenance Mode</label>
                    <div className="form-check form-switch mt-1">
                      <input className="form-check-input" type="checkbox" role="switch" id="maintenanceSwitch" />
                      <label className="form-check-label small text-muted" htmlFor="maintenanceSwitch">Disable Website temporarily</label>
                    </div>
                  </div>
                  <div className="col-12 mt-4 pt-3 border-top">
                    <button type="button" className="btn text-white px-4 py-2 rounded-pill fw-bold" style={{backgroundColor: 'var(--primary-teal)'}}>
                      <FaSave className="me-2" /> Save Site Settings
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;