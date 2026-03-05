import React from 'react';
import BlogCard from '../shared/BlogCard';


const blogData = [
  {
    id: 1,
    title: "10 Things You Must Know Before Visiting Japan",
    excerpt: "Japan is a blend of ancient traditions and modern life. From etiquette to transport, here is what you need to know...",
    images: [
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80"
    ],
    date: "May 15, 2024",
    link: "/blog/japan-tips"
  },
  {
    id: 2,
    title: "How to Find Cheap Flight Tickets in 2024",
    excerpt: "Planning a trip but worried about the budget? These secret hacks will help you find the best airfare deals...",
    images: [
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80"
    ],
    date: "June 02, 2024",
    link: "/blog/cheap-flights"
  },
  {
    id: 3,
    title: "The Ultimate Packing List for Solo Travelers",
    excerpt: "Solo traveling is an adventure of a lifetime. Make sure you don't miss these essential items in your backpack...",
    images: [
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=600&q=80",
    ],
    date: "June 10, 2024",
    link: "/blog/packing-list"
  }
];

const BlogPosts = () => {
  return (
    <section className="blog-section py-5 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="row mb-5 text-center">
          <div className="col-lg-12">
            <h6 className="text-coral fw-bold text-uppercase">Travel Guides</h6>
            <h2 className="display-6 fw-bold text-teal">Latest From Our Blog</h2>
            <div className="header-line mx-auto"></div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="row g-4">
          <BlogCard BlogCardData={blogData} />
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;