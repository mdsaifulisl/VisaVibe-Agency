import React from "react";
import { FaSuitcase, FaPassport, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const Dashboard = () => {
  // ডামি ডাটা (পরবর্তীতে API থেকে আসবে)
  const stats = [
    { id: 1, label: "Total Tours", value: "24", icon: <FaSuitcase />, color: "bg-primary" },
    { id: 2, label: "Visa Queries", value: "145", icon: <FaPassport />, color: "bg-info" },
    { id: 3, label: "Active Bookings", value: "12", icon: <FaCheckCircle />, color: "bg-success" },
    { id: 4, label: "Pending Requests", value: "08", icon: <FaHourglassHalf />, color: "bg-warning" },
  ];

  return (
    <div className="animate__animated animate__fadeIn">
      <h3 className="fw-bold mb-4">Welcome Back, Admin!</h3>
      
      {/* স্ট্যাটাস কার্ড গ্রিড */}
      <div className="row g-4 mb-5">
        {stats.map((item) => (
          <div className="col-md-6 col-xl-3" key={item.id}>
            <div className="card border-0 shadow-sm rounded-4 p-3 h-100">
              <div className="d-flex align-items-center gap-3">
                <div className={`${item.color} text-white p-3 rounded-4 fs-4 d-flex align-items-center`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-muted mb-0 small fw-bold">{item.label}</p>
                  <h3 className="fw-bold mb-0">{item.value}</h3>
                </div>
              </div>
            </div>
          </div>
        )
        )}
      </div>

      {/* রিসেন্ট অ্যাক্টিভিটি টেবিল (নিচে উদাহরণস্বরূপ) */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-white py-3 border-0">
          <h5 className="fw-bold mb-0 text-teal">Recent Booking Requests</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th className="ps-4">Customer</th>
                <th>Service</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-4 fw-bold">Imran Hossain</td>
                <td>Thailand Visa Assistance</td>
                <td>10 March 2026</td>
                <td><span className="badge bg-soft-warning text-warning">Pending</span></td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold">Farzana Ahmed</td>
                <td>Switzerland Tour Package</td>
                <td>08 March 2026</td>
                <td><span className="badge bg-soft-success text-success">Confirmed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;