import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // এটি ইমপোর্ট করতে হবে
import { FaTimes, FaExpandAlt } from 'react-icons/fa';

const Gallery = ({ images = [] }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImg]);

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-5 text-muted bg-light rounded-4">
        <p>No images available in the gallery.</p>
      </div>
    );
  }

  return (
    <div className="modern-gallery-container">
      <div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4">
        {images.map((img, i) => (
          <div className="col" key={i}>
            <div 
              className="gallery-card position-relative overflow-hidden rounded-3 shadow-sm cursor-pointer h-100"
              onClick={() => setSelectedImg(img)}
              style={{ aspectRatio: '1/1' }}
            >
              <img 
                src={img} 
                className="w-100 h-100 object-fit-cover gallery-img" 
                alt={`gallery-item-${i}`} 
                loading="lazy" 
              />
              <div className="gallery-hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                 <FaExpandAlt className="text-white expand-icon" size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Lightbox Modal using React Portal --- */}
      {selectedImg && createPortal(
        <div 
          className="modern-lightbox-overlay"
          onClick={() => setSelectedImg(null)}
          style={{ zIndex: 99999 }} // এখানে খুব হাই ভ্যালু দিন
        >
          <button 
            className="lightbox-close-btn"
            onClick={(e) => {
              e.stopPropagation(); // যাতে ব্যাকগ্রাউন্ডে ক্লিক না পড়ে
              setSelectedImg(null);
            }}
          >
            <FaTimes />
          </button>
          
          <div className="lightbox-content-wrapper animate__animated animate__zoomIn" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImg} 
              className="img-fluid rounded shadow-lg lightbox-img" 
              alt="Preview" 
            />
          </div>
        </div>,
        document.body // এটি মোডালটিকে সরাসরি বডির চাইল্ড হিসেবে পাঠাবে
      )}
    </div>
  );
};

export default Gallery;