import React from "react";
import { NavLink } from "react-router-dom";
import { 
  FaThLarge, 
  FaPlane, 
  FaPassport, 
  FaMapMarkedAlt, 
  FaPenNib, 
  FaInbox, 
  FaCog, // Settings আইকন
  FaSignOutAlt, 
  FaTimes 
} from "react-icons/fa";

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="d-flex flex-column p-3 text-white h-100 shadow-lg">
      <div className="d-flex align-items-center justify-content-between mb-4 ps-2">
        <span className="fs-4 fw-bold" style={{ color: "var(--secondary-coral)" }}>Travel Admin</span>
        <button className="btn text-white d-lg-none p-0" onClick={closeSidebar}>
          <FaTimes size={20} />
        </button>
      </div>
      <hr className="opacity-10" />
      
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        {/* Dashboard */}
        <li className="nav-item">
          <NavLink 
            to="/admin" 
            end 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal shadow-sm' : 'hover-bg-light'}`}
            style={({ isActive }) => isActive ? { backgroundColor: "var(--primary-teal)" } : {}}
          >
            <FaThLarge /> <span className="small fw-bold">Dashboard</span>
          </NavLink>
        </li>

        {/* Manage Tours */}
        <li>
          <NavLink 
            to="/admin/tours" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal shadow-sm' : 'hover-bg-light'}`}
            style={({ isActive }) => isActive ? { backgroundColor: "var(--primary-teal)" } : {}}
          >
            <FaPlane /> <span className="small fw-bold">Manage Tours</span>
          </NavLink>
        </li>

        {/* Manage Visa */}
        <li>
          <NavLink 
            to="/admin/visas" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal shadow-sm' : 'hover-bg-light'}`}
            style={({ isActive }) => isActive ? { backgroundColor: "var(--primary-teal)" } : {}}
          >
            <FaPassport /> <span className="small fw-bold">Manage Visa</span>
          </NavLink>
        </li>

        {/* Manage Destinations */}
        <li>
          <NavLink 
            to="/admin/destinations" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal shadow-sm' : 'hover-bg-light'}`}
            style={({ isActive }) => isActive ? { backgroundColor: "var(--primary-teal)" } : {}}
          >
            <FaMapMarkedAlt /> <span className="small fw-bold">Manage Destinations</span>
          </NavLink>
        </li>

        {/* Manage Blog */}
        <li>
          <NavLink 
            to="/admin/blog" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal shadow-sm' : 'hover-bg-light'}`}
            style={({ isActive }) => isActive ? { backgroundColor: "var(--primary-teal)" } : {}}
          >
            <FaPenNib /> <span className="small fw-bold">Manage Blog</span>
          </NavLink>
        </li>

        {/* Manage Inbox */}
        <li>
          <NavLink 
            to="/admin/inbox" 
            onClick={closeSidebar}
            className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal shadow-sm' : 'hover-bg-light'}`}
            style={({ isActive }) => isActive ? { backgroundColor: "var(--primary-teal)" } : {}}
          >
            <FaInbox /> <span className="small fw-bold">Manage Inbox</span>
          </NavLink>
        </li>
      </ul>
      
      <hr className="opacity-10" />

      {/* Settings Section */}
      <div className="mb-2">
        <NavLink 
          to="/admin/settings" 
          onClick={closeSidebar}
          className={({ isActive }) => `nav-link text-white d-flex align-items-center gap-3 py-2 ${isActive ? 'bg-teal shadow-sm rounded-2' : 'hover-bg-light opacity-75'}`}
          style={({ isActive }) => isActive ? { backgroundColor: "var(--primary-teal)" } : {}}
        >
          <FaCog /> <span className="small fw-bold">Settings</span>
        </NavLink>
      </div>

      <button className="btn btn-outline-danger d-flex align-items-center gap-2 border-0 py-2">
        <FaSignOutAlt /> <span className="small fw-bold">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;