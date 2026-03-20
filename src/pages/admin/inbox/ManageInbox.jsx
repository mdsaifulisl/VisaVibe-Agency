import React, { useState } from "react";
import { 
  FaReply, 
  FaTrash, 
  FaEnvelope, 
  FaEnvelopeOpen, 
  FaUser 
} from "react-icons/fa";

const ManageInbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+880 1700 000 000",
      message: "I am interested in the Thailand Visa service. Can you provide more details?",
      date: "20 Mar, 2026",
      status: "unread",
    },
    {
      id: 2,
      name: "Rakibul Hasan",
      email: "rakib@test.com",
      phone: "+880 1800 111 222",
      message: "Looking for a family tour package to Switzerland in June.",
      date: "19 Mar, 2026",
      status: "read",
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@example",
      phone: "+880 1900 333 444",
      message: "I need help with my booking. Can you assist me?",
      date: "18 Mar, 2026",
      status: "unread",
    },
    {
      id: 4,
      name: "Samiul Islam",
      email: "samiul@example",
      phone: "+880 2000 555 666",
      message: "I am interested in the Bali tour package. Can you provide more details?",
      date: "17 Mar, 2026",
      status: "read",
    },
    {
      id: 5,
      name: "John Doe",
      email: "john@example.com",
      phone: "+880 1700 000 000",
      message: "I am interested in the Thailand Visa service. Can you provide more details?",
      date: "20 Mar, 2026",
      status: "unread",
    },
    {
      id: 6,
      name: "Rakibul Hasan",
      email: "rakib@test.com",
      phone: "+880 1800 111 222",
      message: "Looking for a family tour package to Switzerland in June.",
      date: "19 Mar, 2026",
      status: "read",
    },
    {
      id: 7,
      name: "Jane Smith",
      email: "jane@example",
      phone: "+880 1900 333 444",
      message: "I need help with my booking. Can you assist me?",
      date: "18 Mar, 2026",
      status: "unread",
    },
    {
      id: 8,
      name: "Samiul Islam",
      email: "samiul@example",
      phone: "+880 2000 555 666",
      message: "I am interested in the Bali tour package. Can you provide more details?",
      date: "17 Mar, 2026",
      status: "read",
    },
    {
      id: 9,
      name: "John Doe",
      email: "john@example.com",
      phone: "+880 1700 000 000",
      message: "I am interested in the Thailand Visa service. Can you provide more details?",
      date: "20 Mar, 2026",
      status: "unread",
    },
    {
      id: 10,
      name: "Rakibul Hasan",
      email: "rakib@test.com",
      phone: "+880 1800 111 222",
      message: "Looking for a family tour package to Switzerland in June.",
      date: "19 Mar, 2026",
      status: "read",
    },
  ]);

  const [selectedMsg, setSelectedMsg] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      setMessages(messages.filter(msg => msg.id !== id));
      if (selectedMsg?.id === id) setSelectedMsg(null);
    }
  };

  const markAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: "read" } : msg
    ));
  };

  const filteredMessages = messages.filter(msg => 
    filterStatus === "All" ? true : msg.status === filterStatus.toLowerCase()
  );

  return (
    <div className="animate__animated animate__fadeIn">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1" style={{ color: "var(--primary-teal)" }}>Inquiry Inbox</h3>
          <p className="text-muted small mb-0">Manage customer queries</p>
        </div>
        <select 
          className="form-select form-select-sm rounded-pill px-3 shadow-sm border-0 w-auto"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Unread">Unread</option>
          <option value="Read">Read</option>
        </select>
      </div>

      <div className="row g-4 position-relative">
        
        {/* Detail View Area - Mobile এ উপরে থাকবে (Sticky) */}
        {selectedMsg && (
          <div className="col-lg-7 order-1 order-lg-2">
            <div 
              className="card border-0 shadow-lg rounded-4 p-4 sticky-top mb-3" 
              style={{ 
                top: "10px", 
                zIndex: 1050,
                maxHeight: "85vh",
                overflowY: "auto"
              }}
            >
              <button 
                className="btn-close position-absolute top-0 end-0 m-3 shadow-none bg-light rounded-circle p-2" 
                onClick={() => setSelectedMsg(null)}
              ></button>

              <div className="d-flex align-items-center gap-3 mb-3 mt-2">
                <div className="bg-light rounded-circle p-3 d-none d-sm-block" style={{ color: 'var(--primary-teal)' }}>
                  <FaUser size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">{selectedMsg.name}</h6>
                  <small className="text-muted">{selectedMsg.date}</small>
                </div>
              </div>

              <div className="row g-2 mb-3">
                <div className="col-12 col-sm-6">
                  <div className="p-2 px-3 rounded-3 bg-light border-start border-4 border-teal" style={{ borderColor: 'var(--primary-teal) !important' }}>
                    <small className="d-block text-muted fw-bold" style={{ fontSize: '9px' }}>EMAIL</small>
                    <span className="small d-block text-truncate">{selectedMsg.email}</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="p-2 px-3 rounded-3 bg-light border-start border-4 border-teal" style={{ borderColor: 'var(--primary-teal) !important' }}>
                    <small className="d-block text-muted fw-bold" style={{ fontSize: '9px' }}>PHONE</small>
                    <span className="small d-block">{selectedMsg.phone}</span>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="p-3 rounded-4 border bg-white small" style={{ minHeight: '80px', lineHeight: '1.6' }}>
                  {selectedMsg.message}
                </div>
              </div>

              <div className="d-flex gap-2">
                <div>
                    <a 
                  href={`mailto:${selectedMsg.email}`} 
                  className="btn text-white px-3 py-2 rounded-pill shadow-sm flex-grow-1 fw-bold small" 
                  style={{backgroundColor: 'var(--primary-teal)'}}
                >
                  <FaReply className="me-1" /> Reply
                </a>
                </div>
                <button 
                  onClick={() => handleDelete(selectedMsg.id)} 
                  className="btn btn-outline-danger px-3 py-2 rounded-pill shadow-sm fw-bold small"
                >
                  <FaTrash className="me-1" /> Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Inbox List Area */}
        <div className={`col-lg-5 ${selectedMsg ? 'order-2 order-lg-1' : 'order-1'}`}>
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="list-group list-group-flush">
              {filteredMessages.map((msg) => (
                <div 
                  key={msg.id}
                  onClick={() => { setSelectedMsg(msg); markAsRead(msg.id); }}
                  className={`list-group-item list-group-item-action p-3 border-0 border-bottom cursor-pointer transition-all ${selectedMsg?.id === msg.id ? 'bg-light' : ''}`}
                  style={{ 
                    borderLeft: msg.status === 'unread' ? '4px solid var(--primary-teal)' : '4px solid #dee2e6',
                    backgroundColor: msg.status === 'unread' ? '#fff' : '#f8f9fa' 
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <div className="d-flex align-items-center gap-2">
                      {msg.status === 'unread' ? (
                        <FaEnvelope className="text-teal" style={{ color: 'var(--primary-teal)' }} size={12} />
                      ) : (
                        <FaEnvelopeOpen className="text-muted opacity-50" size={12} />
                      )}
                      <span className={`mb-0 small ${msg.status === 'unread' ? 'fw-bold' : 'text-secondary'}`}>
                        {msg.name}
                      </span>
                    </div>
                    <small className="text-muted opacity-75" style={{ fontSize: '10px' }}>{msg.date}</small>
                  </div>
                  <p className="small text-truncate mb-0 ps-3 text-muted" style={{ fontSize: '12px' }}>
                    {msg.message && msg.message.length > 50 ? `${msg.message.substring(0, 50)}...` : msg.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageInbox;