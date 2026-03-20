import React, { useState } from "react";
import { FaUser, FaLock, FaGlobe, FaUsersCog, FaUserPlus, FaTrash, FaShieldAlt } from "react-icons/fa";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // ডামি ইউজার লিস্ট (অ্যাডমিন এবং মডারেটর)
  const [team, setTeam] = useState([
    { id: 1, name: "Md. Saiful Islam", email: "saiful@admin.com", role: "Super Admin" },
    { id: 2, name: "Rakibul Hasan", email: "rakib@mod.com", role: "Moderator" },
  ]);

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="mb-4">
        <h3 className="fw-bold mb-1" style={{ color: "var(--primary-teal)" }}>Account Settings</h3>
        <p className="text-muted small">Manage your profile, team members and configurations</p>
      </div>

      <div className="row g-4">
        {/* Left Sidebar - Tabs */}
        <div className="col-lg-3">
          <div className="card border-0 shadow-sm rounded-4 p-2">
            <div className="nav flex-column nav-pills gap-2">
              <button onClick={() => setActiveTab("profile")} className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start ${activeTab === "profile" ? "active shadow-sm" : "text-muted hover-bg-light"}`} style={activeTab === "profile" ? { backgroundColor: "var(--primary-teal)" } : {}}>
                <FaUser /> <span>Profile Info</span>
              </button>
              {/* নতুন ট্যাব: Team Management */}
              <button onClick={() => setActiveTab("team")} className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start ${activeTab === "team" ? "active shadow-sm" : "text-muted hover-bg-light"}`} style={activeTab === "team" ? { backgroundColor: "var(--primary-teal)" } : {}}>
                <FaUsersCog /> <span>Admin & Moderators</span>
              </button>
              <button onClick={() => setActiveTab("password")} className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start ${activeTab === "password" ? "active shadow-sm" : "text-muted hover-bg-light"}`} style={activeTab === "password" ? { backgroundColor: "var(--primary-teal)" } : {}}>
                <FaLock /> <span>Password</span>
              </button>
              <button onClick={() => setActiveTab("site")} className={`nav-link d-flex align-items-center gap-3 py-3 border-0 rounded-3 text-start ${activeTab === "site" ? "active shadow-sm" : "text-muted hover-bg-light"}`} style={activeTab === "site" ? { backgroundColor: "var(--primary-teal)" } : {}}>
                <FaGlobe /> <span>Site Configuration</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Content Area */}
        <div className="col-lg-9">
          <div className="card border-0 shadow-sm rounded-4 p-4 min-vh-50">
            
            {/* 1. Profile Settings (আগের মতোই থাকবে) */}
            {/* ... (Previous Profile Code) */}

            {/* 2. Team Management (New Section) */}
            {activeTab === "team" && (
              <div className="animate__animated animate__fadeIn">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0">Manage Team Members</h5>
                  <button className="btn btn-sm text-white px-3 rounded-pill" style={{backgroundColor: 'var(--primary-teal)'}}>
                    <FaUserPlus className="me-2" /> Add New
                  </button>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover align-middle border-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="border-0 small fw-bold text-muted">USER</th>
                        <th className="border-0 small fw-bold text-muted">ROLE</th>
                        <th className="border-0 small fw-bold text-muted text-end">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {team.map((user) => (
                        <tr key={user.id}>
                          <td className="border-0">
                            <div className="d-flex align-items-center gap-2">
                              <div className="bg-light rounded-circle p-2 text-teal">
                                <FaUser size={14} />
                              </div>
                              <div>
                                <div className="fw-bold small">{user.name}</div>
                                <div className="text-muted" style={{fontSize: '11px'}}>{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="border-0">
                            <span className={`badge rounded-pill px-3 py-2 ${user.role === 'Super Admin' ? 'bg-danger-subtle text-danger' : 'bg-info-subtle text-info'}`} style={{fontSize: '10px'}}>
                              <FaShieldAlt className="me-1" /> {user.role}
                            </span>
                          </td>
                          <td className="border-0 text-end">
                            <button className="btn btn-sm btn-outline-danger border-0" title="Remove Access">
                              <FaTrash size={12} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ইনভাইটেশন ফর্ম (সংক্ষিপ্ত) */}
                <div className="mt-4 p-3 rounded-4 bg-light border-dashed">
                  <h6 className="fw-bold small mb-3">Invite Moderator</h6>
                  <div className="row g-2">
                    <div className="col-md-5">
                      <input type="email" className="form-control form-control-sm rounded-3" placeholder="Enter email address" />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select form-select-sm rounded-3">
                        <option value="moderator">Moderator (Editor Only)</option>
                        <option value="admin">Admin (Full Access)</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <button className="btn btn-sm btn-dark w-100 rounded-3">Send Invite</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Password & Site Settings (আগের মতোই থাকবে) */}
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;