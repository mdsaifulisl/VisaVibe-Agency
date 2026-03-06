import React from "react";
import { FaShareAlt } from "react-icons/fa";

const ShareButton = ({ post }) => {
  // Optional Chaining ব্যবহার করা হয়েছে যাতে ডাটা না থাকলে এরর না দেয়
  const titledata = post?.title || "Travel Guide"; 

  const handleShare = async () => {
    const shareData = {
      title: titledata,
      text: `Check out this guide: ${titledata}`,
      url: window.location.href,
    };

    try {
      // চেক করা হচ্ছে ব্রাউজার এবং এনভায়রনমেন্ট (HTTPS) সাপোর্ট করে কি না
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // ডেস্কটপ বা আনসাপোর্টেড ব্রাউজারের জন্য ব্যাকআপ
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard! You can share it now.");
      }
    } catch (err) {
      // ইউজার শেয়ার ক্যানসেল করলে যেন এরর না দেখায় তার জন্য চেক
      if (err.name !== "AbortError") {
        console.error("Error sharing:", err);
      }
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-between bg-alice-blue p-4 rounded-4 border-start border-teal border-4 shadow-sm my-4">
      <h5 className="fw-bold mb-0 text-teal d-none d-sm-block">
        Found this helpful? Share it!
      </h5>
      <button 
        className="btn btn-teal rounded-pill px-4 shadow-sm fw-bold transition-all" 
        onClick={handleShare}
      >
        <FaShareAlt className="me-2" /> Share Guide
      </button>
    </div>
  );
};

export default ShareButton;