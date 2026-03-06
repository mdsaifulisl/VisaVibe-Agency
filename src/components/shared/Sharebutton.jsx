import React from "react";
import { FaShareAlt } from "react-icons/fa";

const Sharebutton = ({post}) => {
  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: "Check out this guide!",
      url: window.location.href,
    };

    console.log("Share Data:", shareData);

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("সফলভাবে শেয়ার করা হয়েছে!");
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert(
          "link copied to clipboard. You can share it with your friends.",
        );
      }
    } catch (err) {
      console.log("শেয়ার করতে সমস্যা হয়েছে:", err);
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-between bg-alice-blue p-4 rounded-4 border-start border-teal border-4">
      <h5 className="fw-bold mb-0 text-teal d-none d-sm-block">
        Found this helpful? Share it!
      </h5>
      <button className="btn btn-teal rounded-pill px-4 shadow-sm fw-bold" onClick={handleShare}>
        <FaShareAlt className="me-2" /> Share Guide
      </button>
    </div>
  );
};

export default Sharebutton;
