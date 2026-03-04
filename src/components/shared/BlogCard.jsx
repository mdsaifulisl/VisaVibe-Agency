import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BlogCard = ({BlogCardData}) => {
    return (
        <>
            {BlogCardData.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <article className="blog-card border-0 shadow-sm">
                <div className="blog-img-box">
                  <img src={post.image} alt={post.title} className="img-fluid" />
                  <div className="blog-date">
                    <FaCalendarAlt className="me-1" /> {post.date}
                  </div>
                </div>
                
                <div className="blog-content p-4">
                  <h4 className="blog-title h5 fw-bold text-teal mb-3">
                    {post.title}
                  </h4>
                  <p className="blog-excerpt text-secondary small mb-4">
                    {post.excerpt.length > 100 ? `${post.excerpt.slice(0, 100)}...` : post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="read-more-btn fw-bold d-flex align-items-center gap-2">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </>
    );
};

export default BlogCard;