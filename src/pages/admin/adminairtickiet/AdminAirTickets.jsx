/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { 
  FaPlaneDeparture, 
  FaPlaneArrival, 
  FaPlus, 
  FaTicketAlt, 
  FaTrash, 
  FaEdit, 
  FaSearch 
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminAirTickets = () => {
  // আপনার দেওয়া JSON ফরম্যাট অনুযায়ী পরিবর্তনী স্টেট
  const [tickets, setTickets] = useState([
    {
      id: 1,
      from: "Dhaka (DAC)",
      to: "Bangkok (BKK)",
      airline: "Thai Airways",
      price: "28,500 BDT",
      type: "Round Trip",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
    }
  ]);

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--primary-teal)" }}>Air Tickets</h3>
          <p className="text-muted small">Manage flight routes, airlines, and pricing</p>
        </div>
        <Link to="/admin/add-air-ticket" className="btn text-white px-4 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2" 
                style={{ backgroundColor: "var(--primary-teal)" }}>
          <FaPlus /> Add New Ticket
        </Link>
      </div>

      <div className="row g-4">
        {/* Search & Filter Bar */}
        <div className="col-12">
          <div className="card border-0 shadow-sm rounded-4 p-3">
            <div className="d-flex gap-2">
              <div className="input-group flex-grow-1 bg-light rounded-3 px-3 align-items-center">
                <FaSearch className="text-muted" />
                <input type="text" className="form-control bg-transparent border-0 shadow-none py-2" placeholder="Search by route or airline..." />
              </div>
              <select className="form-select w-auto border-0 bg-light rounded-3 shadow-none fw-bold small">
                <option>All Types</option>
                <option>One Way</option>
                <option>Round Trip</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tickets Table */}
        <div className="col-12">
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="px-4 py-3 border-0 small fw-bold text-muted">FLIGHT ROUTE</th>
                    <th className="py-3 border-0 small fw-bold text-muted">AIRLINE</th>
                    <th className="py-3 border-0 small fw-bold text-muted">TYPE</th>
                    <th className="py-3 border-0 small fw-bold text-muted">PRICE</th>
                    <th className="px-4 py-3 border-0 small fw-bold text-muted text-end">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td className="px-4 py-3 border-0">
                        <div className="d-flex align-items-center gap-3">
                          <img src={ticket.image} alt="Route" className="rounded-3 shadow-sm" style={{ width: "50px", height: "40px", objectFit: "cover" }} />
                          <div>
                            <div className="fw-bold d-flex align-items-center gap-1 small">
                              {ticket.from} <FaPlaneDeparture className="text-teal mx-1" size={12}/> {ticket.to}
                            </div>
                            <span className="text-muted" style={{ fontSize: "11px" }}>Flight ID: #{ticket.id}024</span>
                          </div>
                        </div>
                      </td>
                      <td className="border-0">
                        <span className="fw-semibold text-dark small">{ticket.airline}</span>
                      </td>
                      <td className="border-0">
                        <span className="badge rounded-pill px-3 py-2 bg-info-subtle text-info" style={{ fontSize: "10px" }}>
                          {ticket.type}
                        </span>
                      </td>
                      <td className="border-0">
                        <span className="fw-bold text-success">{ticket.price}</span>
                      </td>
                      <td className="px-4 py-3 border-0 text-end">
                        <Link to={`/admin/edit-air-ticket/${ticket.id}`} className="btn btn-sm btn-light border shadow-sm me-2 rounded-circle" title="Edit">
                          <FaEdit className="text-primary" />
                        </Link>
                        <Link to={"#"} className="btn btn-sm btn-light border shadow-sm rounded-circle" title="Delete">
                          <FaTrash className="text-danger" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {tickets.length === 0 && (
              <div className="text-center py-5">
                <FaTicketAlt size={40} className="text-light mb-2" />
                <p className="text-muted">No tickets found in the inventory.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAirTickets;