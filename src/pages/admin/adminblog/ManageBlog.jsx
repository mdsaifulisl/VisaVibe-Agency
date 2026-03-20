import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaCalendarAlt, FaUser, FaNewspaper } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import FilterBar from "../../../components/shared/FilterBar";

const ManageBlog = () => {
  const navigate = useNavigate();
  
  const [blogs] = useState([
    {
      "id": 1,
      "title": "Saiful Islam Visa Guide for Bangladeshis: How to Apply for a Visa",
      "author": "Md. Saiful Islam",
      "date": "March 05, 2026",
      "category": "Visa Guide",
      "images": [
        "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["Visa Guide", "Travel Tips", "Destination Review", "News"];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--primary-teal)" }}>Blog Articles</h3>
          <p className="text-muted small mb-0">Manage and publish your travel guides and news</p>
        </div>
        <Link to="/admin/add-blog" className="btn shadow-sm px-4 py-2 rounded-pill fw-bold text-white" 
          style={{ backgroundColor: "var(--primary-teal)" }}>
          <FaPlus className="me-2" /> Create Post
        </Link>
      </div>

      <FilterBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        placeholder="Search by article title..."
      />

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead style={{ backgroundColor: "var(--accent-alice-blue)" }}>
              <tr>
                <th className="ps-4 py-3 text-secondary small text-uppercase">Article</th>
                <th className="py-3 text-secondary small text-uppercase">Category</th>
                <th className="py-3 text-secondary small text-uppercase">Author & Date</th>
                <th className="py-3 text-secondary small text-uppercase text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog.id}>
                  <td className="ps-4">
                    <div className="d-flex align-items-center gap-3">
                      <img src={blog.images[0]} alt="" className="rounded-3 shadow-sm" style={{ width: "65px", height: "45px", objectFit: "cover" }} />
                      <div style={{maxWidth: '350px'}}>
                        <h6 className="mb-0 fw-bold text-dark text-truncate">{blog.title}</h6>
                        <small className="text-muted">ID: #{blog.id}</small>
                      </div>
                    </div>
                  </td>
                  <td><span className="badge bg-light text-teal border px-3 py-2">{blog.category}</span></td>
                  <td>
                    <div className="small fw-bold text-dark"><FaUser className="me-1 opacity-50" /> {blog.author}</div>
                    <div className="small text-muted"><FaCalendarAlt className="me-1 opacity-50" /> {blog.date}</div>
                  </td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-2">
                      <button onClick={() => navigate(`/admin/edit-blog/${blog.id}`)} className="btn btn-sm btn-light border rounded-3 shadow-sm">
                        <FaEdit style={{ color: "var(--primary-teal)" }} />
                      </button>
                      <button className="btn btn-sm btn-light border rounded-3 shadow-sm">
                        <FaTrash style={{ color: "var(--secondary-coral)" }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlog;