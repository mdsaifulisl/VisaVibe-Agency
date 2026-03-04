import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaClock,
  FaMoneyBillWave,
  FaArrowLeft,
  FaCheckCircle,
  FaGlobe,
  FaFileAlt,
  FaHeadset,
} from "react-icons/fa";
// Quill CSS ইমপোর্ট করুন যাতে HTML কন্টেন্টগুলো সুন্দর দেখায়
// import 'react-quill-new/dist/quill.snow.css'; 
import "../../assets/style/details.css";

const VisaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const visa = {
    id: id,
    title: "Sri Lanka Visa Application & Requirements for Bangladeshis",
    country: "Thailand",
    type: "Tourist Sticker Visa",
    fee: "5,500 BDT",
    duration: "5-7 Working Days",
    validity: "90 Days",
    entry: "Single Entry",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80",
    description: "Thailand is one of the most popular tourist destinations for Bangladeshis. We provide comprehensive support for Thailand sticker visas, ensuring all your documents are perfectly organized for a high success rate.",
    requirements: [
      "Original Passport with at least 7 months validity",
      "Two recent 3.5cm x 4.5cm photographs (White background)",
      "Last 6 months bank statement & solvency certificate",
      "Professional documents (NOC/Trade License/Student ID)",
      "Visiting card and copy of NID/Birth Certificate",
    ],
    // আপনার দেওয়া additional details
    anotherdetals:
      "<p> If you have any further <u>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, ad.</u> questions or need any additional assistance, please don't hesitate to reach out to us. We are here to help you every step of the way.</p> <p> Thank you for considering our services. We look forward to serving you!</p> <ol><li>hello</li><li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a ut itaque nisi modi molestiae.</li></ol> <p> If you have any further questions or need any additional assistance, please don't hesitate to reach out to us. We are here to help you every step of the way.</p> <p> Thank you for considering our services. We look forward to serving you!</p> <ul><li>hello</li><li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a ut itaque nisi modi molestiae.</li></ul>", 
  };

  return (
    <div className="visa-details-page pb-5">
      
      {/* Banner Section */}
      <div
        className="visa-detail-header text-white d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${visa.image})`,
        }}
      >
        <div className="container">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-light rounded-pill mb-4 px-4 shadow-sm"
          >
            <FaArrowLeft className="me-2" /> Back to Services
          </button>
          <h1 className="display-4 fw-bold mb-2">
            {visa.country} Visa Assistance
          </h1>
          <p className="lead fw-medium">
            <FaGlobe className="text-coral me-2" /> {visa.type}
          </p>
        </div>
      </div>

      <div className="container mt-n5 position-relative z-index-10">
        <div className="row g-4">
          {/* Main Info */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-white">
              <h3 className="fw-bold text-teal mb-4">Visa Overview</h3>
              <p className="text-secondary fs-5 mb-5">{visa.description}</p>

              <div className="row g-4 mb-5">
                <div className="col-md-6">
                  <div className="p-3 bg-alice-blue rounded-3 d-flex align-items-center gap-3">
                    <div className="icon-box bg-white text-coral p-3 rounded-circle shadow-sm">
                      <FaMoneyBillWave size={24} />
                    </div>
                    <div>
                      <small className="text-muted d-block">Visa Fee</small>
                      <strong className="text-teal fs-5">{visa.fee}</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 bg-alice-blue rounded-3 d-flex align-items-center gap-3">
                    <div className="icon-box bg-white text-coral p-3 rounded-circle shadow-sm">
                      <FaClock size={24} />
                    </div>
                    <div>
                      <small className="text-muted d-block">Processing Time</small>
                      <strong className="text-teal fs-5">{visa.duration}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements Section */}
              <h4 className="fw-bold text-teal mb-4">
                <FaFileAlt className="me-2 text-coral" /> Required Documents
              </h4>
              <ul className="list-unstyled mb-2">
                {visa.requirements.map((req, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start gap-3">
                    <FaCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <span className="text-secondary">{req}</span>
                  </li>
                ))}
              </ul>

              {/* Additional Details (Quill Rendered) */}
              {visa.anotherdetals && (
                <div className="another-details-box mt-1 pt-4 border-top">
                   <div className="ql-snow">
                      <div className="ql-editor p-0">
                        <div 
                          className="text-secondary italic-font additional-details"
                          dangerouslySetInnerHTML={{ __html: visa.anotherdetals }} 
                        />
                      </div>
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg rounded-4 p-4 sticky-top" style={{ top: "100px" }}>
              <h4 className="fw-bold text-teal mb-3">Enquire Now</h4>
              <p className="small text-muted mb-4">
                Fill out the form below, and our visa expert will contact you shortly.
              </p>

              <form>
                <div className="mb-3">
                  <input type="text" className="form-control bg-light border-0 py-3" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control bg-light border-0 py-3" placeholder="Email Address" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control bg-light border-0 py-3" placeholder="Phone Number" />
                </div>
                <div className="mb-4">
                  <textarea className="form-control bg-light border-0 py-3" rows="3" placeholder="Message"></textarea>
                </div>
                <button type="button" className="btn btn-coral w-100 py-3 rounded-pill fw-bold shadow-sm">
                  Send Inquiry
                </button>
              </form>

              <hr className="my-4" />
              <div className="text-center">
                <p className="small text-muted mb-2">Or call for instant support</p>
                <h5 className="text-teal fw-bold">
                  <FaHeadset className="me-2" /> +880 1234 567 890
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;