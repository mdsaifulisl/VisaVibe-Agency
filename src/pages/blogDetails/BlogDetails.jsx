import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// FaTimes ইম্পোর্ট করা হয়েছে যা আগে মিসিং ছিল
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaShareAlt, FaClock, FaTimes } from 'react-icons/fa';
import '../../assets/style/details.css';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = {
    id: id,
    title: "Top 10 Tips for a Smooth Visa Application Process",
    author: "Md. Saiful Islam",
    date: "March 05, 2026",
    category: "Visa Guide",
    images: [
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=81",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=82",
    ],
    content: `
      <p>Applying for a visa can often feel like a daunting task, but with the right preparation, it can be a seamless experience. Whether you're planning a vacation to <strong>Thailand</strong> or a business trip to <strong>Turkey</strong>, following these steps will increase your success rate.</p>
      <h3>1. Check Passport Validity</h3>
      <p>Your passport must be valid for at least <strong>six months</strong> beyond your intended stay. This is a universal requirement for almost every country.</p>
      <blockquote class="custom-quote">"Preparation is the key to success when it comes to international travel."</blockquote>
      <h3>2. Prepare Accurate Documentation</h3>
      <p>Ensure all your bank statements, NOCs, and photographs meet the embassy's specific requirements. Minor errors often lead to visa rejections.</p>
      <ul>
        <li>Use high-quality photographs.</li>
        <li>Provide clear bank solvency certificates.</li>
        <li>Double-check dates on your NOC or Trade License.</li>
      </ul>
    `
  };

  // Slider Logic
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
    }, 3000); // ২ সেকেন্ড খুব দ্রুত মনে হলে ৩ সেকেন্ড দিতে পারেন
    return () => clearInterval(timer);
  }, [post.images.length]);

  return (
    <div className="blog-details-page pb-5">
      {/* Blog Header / Hero */}
      <section className="blog-detail-hero py-5" style={{ backgroundColor: 'var(--accent-alice-blue)' }}>
        <div className="container">
          <button onClick={() => navigate(-1)} className="btn btn-link text-teal fw-bold mb-4 p-0 text-decoration-none">
            <FaArrowLeft className="me-2" /> Back to Blog
          </button>
          
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/blog" className="text-decoration-none text-muted">Blog</Link></li>
              <li className="breadcrumb-item active" style={{ color: 'var(--primary-teal)' }} aria-current="page">{post.category}</li>
            </ol>
          </nav>

          <h1 className="display-4 fw-bold text-dark mb-4">{post.title}</h1>
          
          <div className="d-flex flex-wrap gap-4 text-muted small border-top pt-4">
            <span className="d-flex align-items-center gap-2">
              <FaUser style={{ color: 'var(--secondary-coral)' }} /> By {post.author}
            </span>
            <span className="d-flex align-items-center gap-2">
              <FaCalendarAlt style={{ color: 'var(--secondary-coral)' }} /> {post.date}
            </span>
            <span className="d-flex align-items-center gap-2">
              <FaClock style={{ color: 'var(--secondary-coral)' }} /> 5 Min Read
            </span>
            <span className="d-flex align-items-center gap-2">
              <FaTag style={{ color: 'var(--secondary-coral)' }} /> {post.category}
            </span>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <div className="row g-5">
          {/* Main Content Area */}
          <div className="col-lg-8">
            
            {/* Auto Slider for Blog Images */}
            <div className="blog-hero-container position-relative mb-5 rounded-4 overflow-hidden shadow-sm" style={{ height: '400px' }}>
              {post.images.map((img, index) => (
                <div
                  key={index}
                  className={`blog-hero-slide position-absolute w-100 h-100 transition-all duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
                  style={{ 
                    backgroundImage: `url(${img})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    transition: 'opacity 1s ease-in-out'
                  }}
                />
              ))}
              {/* Slider Dots */}
              <div className="slider-dots d-flex gap-2 position-absolute bottom-0 start-50 translate-middle-x mb-3" style={{ zIndex: 5 }}>
                {post.images.map((_, i) => (
                  <span 
                    key={i} 
                    className={`dot cursor-pointer ${i === current ? 'active' : ''}`} 
                    onClick={() => setCurrent(i)}
                    style={{
                      width: '12px', height: '12px', borderRadius: '50%', backgroundColor: i === current ? 'var(--secondary-coral)' : 'white', cursor: 'pointer'
                    }}
                  ></span>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="blog-content-area mb-0">
              <div 
                className="ql-editor p-0 additional-details"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </div>

            {/* Gallery Section */}
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              <h4 className="fw-bold mb-4" style={{ color: 'var(--primary-teal)' }}>Post Gallery</h4>
              <div className="row g-2">
                {post.images.map((img, i) => (
                  <div className="col-md-4 col-6" key={i}>
                    <div 
                      className="rounded-3 overflow-hidden cursor-pointer" 
                      style={{ height: '150px' }}
                      onClick={() => setSelectedImg(img)} // এখানে অ্যারো ফাংশন ব্যবহার করা হয়েছে
                    >
                      <img src={img} className="img-fluid w-100 h-100 object-fit-cover hover-zoom transition-all" alt="gallery" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-5" />
            
            <div className="d-flex align-items-center justify-content-between bg-light p-4 rounded-4">
               <h5 className="fw-bold mb-0" style={{ color: 'var(--primary-teal)' }}>Did you like this post?</h5>
               <div className="d-flex gap-3">
                  <button className="btn btn-outline-teal rounded-pill px-4">
                    <FaShareAlt className="me-2" /> Share
                  </button>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="blog-sidebar sticky-top" style={{ top: '100px' }}>
              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-teal)' }}>Search</h5>
                <div className="input-group">
                  <input type="text" className="form-control border-light" placeholder="Search news..." />
                  <button className="btn btn-teal text-white">Go</button>
                </div>
              </div>

              <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-teal)' }}>Categories</h5>
                <ul className="list-unstyled mb-0">
                  {['Visa Tips', 'Travel Guide', 'Agency News', 'Destinations'].map((cat, i) => (
                    <li key={i} className="mb-2 border-bottom border-light pb-2">
                      <Link to="#" className="text-decoration-none text-muted d-flex justify-content-between align-items-center hover-teal">
                        {cat} <span className="badge rounded-pill" style={{ backgroundColor: 'var(--accent-alice-blue)', color: 'var(--primary-teal)' }}>5</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card border-0 shadow-sm rounded-4 p-4 text-white text-center position-relative overflow-hidden" style={{ backgroundColor: 'var(--primary-teal)' }}>
                <div className="position-relative" style={{ zIndex: 2 }}>
                  <h4 className="fw-bold mb-3 text-white">Stay in the Loop</h4>
                  <p className="small mb-4 opacity-75">Subscribe for the latest visa updates and agency offers.</p>
                  <input type="email" className="form-control border-0 mb-3 py-2" placeholder="Email Address" />
                  <button className="btn w-100 rounded-pill fw-bold py-2 shadow-sm text-white" style={{ backgroundColor: 'var(--secondary-coral)' }}>Join Now</button>
                </div>
                <div className="position-absolute bg-white opacity-10 rounded-circle" style={{ width: '200px', height: '200px', bottom: '-100px', right: '-100px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Image Modal (Lightbox) --- */}
      {selectedImg && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, padding: '20px' }}
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="position-absolute top-0 end-0 m-4 btn text-white fs-2 shadow-none border-0"
            onClick={() => setSelectedImg(null)}
          >
            <FaTimes />
          </button>
          <img 
            src={selectedImg} 
            className="img-fluid rounded-3 shadow-lg" 
            style={{ maxHeight: '90vh', maxWidth: '95vw', objectFit: 'contain' }}
            alt="Full view" 
          />
        </div>
      )}
    </div>
  );
};

export default BlogDetails;