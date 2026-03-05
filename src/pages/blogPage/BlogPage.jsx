import React from 'react';
import BlogCard from '../../components/shared/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Places to Visit in Thailand in 2026",
    date: "March 05, 2026",
    author: "Admin",
    images: ["https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80"],
    excerpt: "Discover the hidden gems of Thailand, from the bustling streets of Bangkok to the serene beaches of Phuket. Planning your next trip has never been easier."
  },
  {
    id: 2,
    title: "How to Apply for a Schengen Visa from Bangladesh",
    date: "Feb 28, 2026",
    author: "Saiful Islam",
    images: ["https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80"],
    excerpt: "Navigating visa requirements can be tough. We break down the step-by-step process for a successful Schengen visa application."
  },
  {
    id: 3,
    title: "The Ultimate Travel Packing Checklist",
    date: "Feb 15, 2026",
    author: "Expert Coder",
    images: ["https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80"],
    excerpt: "Don't leave home without these essentials! Our comprehensive guide ensures you have everything you need for your next adventure."
  }
];

const BlogPage = () => {
  return (
    <div className="blog-page pb-5">
      {/* Header */}
      <section className="about-hero d-flex align-items-center justify-content-center text-center text-white mb-5" 
        style={{backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.8), rgba(0, 128, 128, 0.8)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80')`, height: '300px'}}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Travel Blog</h1>
          <p className="lead">Expert advice, travel stories, and visa tips</p>
        </div>
      </section>


      <div className="container">
        {/* Blog Grid */}
        <div className="row g-4">
          <BlogCard BlogCardData={blogPosts} />
        </div>
      </div>

      
    </div>
  );
};

export default BlogPage;