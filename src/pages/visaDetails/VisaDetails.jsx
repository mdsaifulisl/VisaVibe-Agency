import React, { useState, useEffect } from "react";
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
import "../../assets/style/details.css";
import Gallery from "../../components/shared/Gallery";
import EnquiryForm from "../../components/shared/EnquiryForm";

const VisaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const visa = {
    id: id,
    title: "Thailand Visa Application & Requirements for Bangladeshis",
    country: "Thailand",
    type: "Tourist Sticker Visa",
    fee: "5,500 BDT",
    duration: "5-7 Working Days",
    validity: "90 Days",
    entry: "Single Entry",
    // এখানে আপনার ইমেজগুলো লিস্ট আকারে আছে
    images: [
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Thailand is one of the most popular tourist destinations for Bangladeshis. We provide comprehensive support for Thailand sticker visas, ensuring all your documents are perfectly organized for a high success rate.",
    requirements: [
      "Original Passport with at least 7 months validity",
      "Two recent 3.5cm x 4.5cm photographs (White background)",
      "Last 6 months bank statement & solvency certificate",
      "Professional documents (NOC/Trade License/Student ID)",
      "Visiting card and copy of NID/Birth Certificate",
    ],
    anotherdetals: ` <h3>1. Additional Details </h3>
    <p> If you have any further questions or need any additional assistance, please don't hesitate to reach out to us.</p>
    <p> Our team is here to help you every step of the way, providing personalized guidance and support to ensure your visa application is successful.</p>
    <p> Thank you for considering our services and we look forward to serving you with a smooth and hassle-free visa application process.</p>
    <ul>
      <li>Our team is here to help you every step of the way, providing personalized guidance and support to ensure your visa application is successful.</li>
      <li>Thank you for considering our services and we look forward to serving you with a smooth and hassle-free visa application process.</li>
    </ul>
    `,
  };

  // ইমেজ অটো-স্লাইড করার জন্য useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === visa.images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // ৫ সেকেন্ড পর পর ইমেজ পরিবর্তন হবে
    return () => clearInterval(timer);
  }, [visa.images.length]);

  return (
    <div className="visa-details-page pb-5">
      {/* Banner Section with Dynamic Image Control */}
      <div
        className="visa-detail-header text-white d-flex align-items-center position-relative overflow-hidden"
        style={{
          height: "450px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out", // ইমেজ পরিবর্তনের ট্রানজিশন
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${visa.images[currentImageIndex]})`,
        }}
      >
        <div className="container position-relative z-index-2">
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

        {/* স্লাইডার ডটস কন্ট্রোল */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2">
          {visa.images.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`cursor-pointer rounded-circle ${
                currentImageIndex === idx
                  ? "bg-coral shadow"
                  : "bg-white opacity-50"
              }`}
              style={{ width: "12px", height: "12px", transition: "0.3s" }}
            ></div>
          ))}
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
                  <div
                    className="p-3 rounded-3 d-flex align-items-center gap-3"
                    style={{ backgroundColor: "var(--accent-alice-blue)" }}
                  >
                    <div
                      className="icon-box bg-white p-3 rounded-circle shadow-sm"
                      style={{ color: "var(--secondary-coral)" }}
                    >
                      <FaMoneyBillWave size={24} />
                    </div>
                    <div>
                      <small className="text-muted d-block">Visa Fee</small>
                      <strong
                        className="fs-5"
                        style={{ color: "var(--primary-teal)" }}
                      >
                        {visa.fee}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="p-3 rounded-3 d-flex align-items-center gap-3"
                    style={{ backgroundColor: "var(--accent-alice-blue)" }}
                  >
                    <div
                      className="icon-box bg-white p-3 rounded-circle shadow-sm"
                      style={{ color: "var(--secondary-coral)" }}
                    >
                      <FaClock size={24} />
                    </div>
                    <div>
                      <small className="text-muted d-block">
                        Processing Time
                      </small>
                      <strong
                        className="fs-5"
                        style={{ color: "var(--primary-teal)" }}
                      >
                        {visa.duration}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements Section */}
              <h4
                className="fw-bold mb-4"
                style={{ color: "var(--primary-teal)" }}
              >
                <FaFileAlt
                  className="me-2"
                  style={{ color: "var(--secondary-coral)" }}
                />{" "}
                Required Documents
              </h4>
              <ul className="list-unstyled mb-2">
                {visa.requirements.map((req, index) => (
                  <li
                    key={index}
                    className="mb-3 d-flex align-items-start gap-3"
                  >
                    <FaCheckCircle
                      className="mt-1 flex-shrink-0"
                      style={{ color: "var(--primary-teal)" }}
                    />
                    <span className="text-secondary">{req}</span>
                  </li>
                ))}
              </ul>

              {/* Additional Details */}
              {visa.anotherdetals && (
                <div className="another-details-box mt-4 pt-4 border-top">
                  <div className="ql-snow">
                    <div className="ql-editor p-0">
                      <div
                        className="text-secondary additional-details"
                        dangerouslySetInnerHTML={{ __html: visa.anotherdetals }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-0">
                <h3 className="fw-bold mb-3">Gallery Photos</h3>
                <Gallery images={visa.images} />
              </div>
            </div>
          </div>

          {/* Sidebar Form */}

          <div className="col-lg-4">
            <EnquiryForm
              title="Visa Inquiry"
              subtitle="Ask our visa experts for Thailand specific requirements."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
