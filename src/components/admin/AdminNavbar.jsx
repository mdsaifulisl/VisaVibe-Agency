import React from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-3 py-3 sticky-top">
      <div className="container-fluid">
        {/* মেনু বাটন যা মোবাইলে সাইডবার ওপেন করবে */}
        <button className="btn border-0 d-lg-none me-2" onClick={toggleSidebar}>
          <FaBars size={22} className="text-teal" />
        </button>
        
        <h5 className="mb-0 fw-bold text-teal d-none d-sm-block">Admin Dashboard</h5>
        
        <div className="ms-auto d-flex align-items-center gap-3">
          <div className="text-end d-none d-md-block">
            <p className="mb-0 small fw-bold text-dark">Mahmudul Hasan</p>
            <small className="text-muted" style={{ fontSize: '10px' }}>Super Admin</small>
          </div>
          <FaUserCircle size={32} className="text-teal cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;