import React from "react";
import { NavLink } from "react-router-dom";
import { FaThLarge, FaPlane, FaFileAlt, FaUsers, FaSignOutAlt, FaTimes } from "react-icons/fa";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="d-flex flex-column p-3 text-white h-100 shadow-lg">
      <div className="d-flex align-items-center justify-content-between mb-4 ps-2">
        <span className="fs-4 fw-bold text-coral">Travel Admin</span>
        {/* মোবাইলের জন্য ক্লোজ বাটন */}
        <button className="btn text-white d-lg-none p-0" onClick={closeSidebar}>
          <FaTimes size={20} />
        </button>
      </div>
      <hr className="opacity-10" />
      
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        <li className="nav-item">
          <NavLink 
            to="/admin" 
            end 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal' : 'hover-bg-light'}`}
          >
            <FaThLarge /> <span className="small fw-bold">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/tours" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal' : 'hover-bg-light'}`}
          >
            <FaPlane /> <span className="small fw-bold">Manage Tours</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/visas" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal' : 'hover-bg-light'}`}
          >
            <FaFileAlt /> <span className="small fw-bold">Visa Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/admin/bookings" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal' : 'hover-bg-light'}`}
          >
            <FaUsers /> <span className="small fw-bold">Bookings</span>
          </NavLink>
        </li>
      </ul>
      
      <hr className="opacity-10" />
      <button className="btn btn-outline-danger d-flex align-items-center gap-2 border-0 mb-2">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;