import React from 'react';
import TourCard from '../shared/TourCard';


const tourData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25',
    title: "Modern Tokyo Discovery",
    location: "Japan",
    duration: "5 Days",
    price: "$850",
    rating: 4.8
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    title: "Santorini Sunset Dream",
    location: "Greece",
    duration: "7 Days",
    price: "$1200",
    rating: 5.0
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    title: "Dubai Luxury Safari",
    location: "UAE",
    duration: "4 Days",
    price: "$990",
    rating: 4.7
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25',
    title: "Modern Tokyo Discovery",
    location: "Japan",
    duration: "5 Days",
    price: "$850",
    rating: 4.8
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    title: "Santorini Sunset Dream",
    location: "Greece",
    duration: "7 Days",
    price: "$1200",
    rating: 5.0
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    title: "Dubai Luxury Safari",
    location: "UAE",
    duration: "4 Days",
    price: "$990",
    rating: 4.7
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
          <TourCard cardData={tourData}/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;