import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';


const destinationsData = [
  {
    id: 1,
    name: "Paris",
    tours: "15 Tours",
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80',
    link: "/destinations/paris"
  },
  {
    id: 2,
    name: "Switzerland",
    tours: "22 Tours",
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80',
    link: "/destinations/switzerland"
  },
  {
    id: 3,
    name: "London",
    tours: "18 Tours",
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    link: "/destinations/london"
  },
  {
    id: 4,
    name: "Maldives",
    tours: "10 Tours",
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80',
    link: "/destinations/maldives"
  }
];

const ExplorePlaces = () => {
  return (
    <section className="explore-places section-padding bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="row mb-5 text-center">
          <div className="col-lg-12">
            <h6 className="text-coral fw-bold text-uppercase">Where to Go</h6>
            <h2 className="display-5 fw-bold text-teal">Explore Popular Destinations</h2>
            <div className="header-line mx-auto"></div>
          </div>
        </div>

        {/* Destination Grid */}
        <div className="row g-4">
          {destinationsData.map((place) => (
            <div className="col-lg-3 col-md-6" key={place.id}>
              <Link to={place.link} className="place-card-wrapper">
                <div className="place-card">
                  <div className="place-image">
                    <img 
                      src={place.image} 
                      alt={place.name} 
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="place-overlay">
                    <div className="place-info text-center text-white">
                      <FaMapMarkerAlt className="text-coral fs-3 mb-2" />
                      <h3 className="h4 fw-bold">{place.name}</h3>
                      <p className="small m-0">{place.tours}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Optional View All Button */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <Link to="/destinations" className="btn btn-teal-outline px-4 py-2 fw-bold">
              View All Destinations
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExplorePlaces;