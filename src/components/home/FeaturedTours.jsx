import React from 'react';
import TourCard from '../shared/TourCard';


const tourList = [
  {
    id: 1,
    title: "Modern Tokyo Discovery",
    location: "Japan",
    duration: "5 Days",
    price: "$850",
    rating: 4.8,
    images: ['https://images.unsplash.com/photo-1518391846015-55a9cc003b25'],
    category: "City Tour",
  },
  {
    id: 2,
    title: "Santorini Sunset Dream",
    location: "Greece",
    duration: "7 Days",
    price: "$1200",
    rating: 5.0,
    images: ['https://images.unsplash.com/photo-1533105079780-92b9be482077'],
    category: "Honeymoon",
  },
  {
    id: 3,
    title: "Dubai Luxury Safari",
    location: "UAE",
    duration: "10 Days",
    price: "$2200",
    rating: 4.5,
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'],
    category: "Adventure",
  },
  {
    id: 4,
    title: "Santorini Sunset Dream",
    location: "Greece",
    duration: "7 Days",
    price: "$1200",
    rating: 5.0,
    images: ['https://images.unsplash.com/photo-1533105079780-92b9be482077'],
    category: "Honeymoon",
  },
  {
    id: 5,
    title: "Dubai Luxury Safari",
    location: "UAE",
    duration: "10 Days",
    price: "$2200",
    rating: 4.5,
    images: ['https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80'],
    category: "Adventure",
  },
  {
    id: 6,
    title: "Santorini Sunset Dream",
    location: "Greece",
    duration: "7 Days",
    price: "$1200",
    rating: 5.0,
    images: ['https://images.unsplash.com/photo-1533105079780-92b9be482077'],
    category: "Honeymoon",
  }

];

const FeaturedTours = () => {
  return (
    <section className="section-padding bg-alice-blue">
      <div className="container">
        <div className="row mb-5 text-center">
          <div className="col-lg-12">
            <h6 className="text-coral fw-bold text-uppercase">Featured Tours</h6>
            <h2 className="display-5 fw-bold text-teal section-title">Most Popular Packages</h2>
            {/* <div className="header-line mx-auto"></div> */}
          </div>
        </div>

        <div className="row g-4">
          <TourCard tourData={tourList}/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;