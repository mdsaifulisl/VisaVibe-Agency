import React from 'react';
import TourCard from '../shared/TourCard';
import TourJsonData from '../../data/tours.json'; // Replace with your actual JSON data



const FeaturedTours = () => {
  const tourList = TourJsonData.slice(0, 6);
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