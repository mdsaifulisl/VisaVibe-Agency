import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

// Quill এর থিম ইমপোর্ট করুন (এটি না করলে লিস্ট ডট বা বোল্ড টেক্সট স্টাইল পাবে না)
// import 'react-quill-new/dist/quill.snow.css'; 
import '../../assets/style/details.css';

const BlogDetails = () => {
  const { id } = useParams();

  const post = {
    id: id,
    title: "10 Things You Must Know Before Visiting Japan",
    author: "Adnan Sami",
    date: "May 15, 2026",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2>Welcome to Japan</h2>
      <p>Japan is a land of incredible contrasts. From the <strong>neon-lit streets</strong> of Tokyo to the tranquil temples of Kyoto.</p>
      <ul>
        <li>Carry Cash (Yen)</li>
        <li>Get a JR Pass</li>
        <li>Learn basic etiquette</li>
      </ul>
      <p>Enjoy your journey through the rising sun!</p>
      <p>Japan is a land of incredible contrasts. From the <strong>neon-lit streets</strong> of Tokyo to the tranquil temples of Kyoto. Japan is a land of incredible contrasts. From the <strong>neon-lit streets</strong> of Tokyo to the tranquil temples of Kyoto. Japan is a land of incredible contrasts. From the <strong>neon-lit streets</strong> of Tokyo to the tranquil temples of Kyoto. Japan is a land of incredible contrasts. From the <strong>neon-lit streets</strong> of Tokyo to the tranquil temples of Kyoto. Japan is a land of incredible contrasts. From the <strong>neon-lit streets</strong> of Tokyo to the tranquil temples of Kyoto.  Japan is a land of incredible contrasts. From the <strong>neon-lit streets</strong> of Tokyo to the tranquil temples of Kyoto.</p>
    `,
    tags: ["Japan", "Travel Guide"]
  };

  return (
    <div className="blog-details-page pb-5">
      <div className="blog-banner" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="container h-100 d-flex align-items-end pb-5">
          <div className="banner-content bg-white p-4 p-md-5 rounded-4 shadow-lg mb-n5">
            <span className="badge bg-coral mb-2 px-3 py-2">{post.category}</span>
            <h1 className="display-5 fw-bold text-teal">{post.title}</h1>
            <div className="d-flex flex-wrap gap-3 text-secondary small mt-3">
              <span><FaUser className="text-coral" /> {post.author}</span>
              <span><FaCalendarAlt className="text-coral" /> {post.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row g-5">
          <div className="col-lg-8">
            {/* Quill স্টাইল পাওয়ার জন্য ql-container এবং ql-snow ক্লাস দরকার */}
            <div className="blog-body ql-container ql-snow border-0">
              <div className="ql-editor px-0">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                  className="quill-rendered-content"
                />
              </div>
              
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 py-4 mt-5 border-top">
                <div className="tags d-flex gap-2">
                  <FaTag className="text-teal" />
                  {post.tags.map((tag, i) => (
                    <span key={i} className="small text-muted">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar-card p-4 bg-alice-blue rounded-4 shadow-sm sticky-top" style={{ top: '100px' }}>
                <h5 className="fw-bold text-teal mb-3">About Author</h5>
                <p className="small text-secondary">Expert travel blogger sharing experiences from around the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;