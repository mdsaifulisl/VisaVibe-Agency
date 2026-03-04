import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import VisaServiceCard from '../shared/VisaServiceCard'; // আপনার কার্ডের পাথ অনুযায়ী

const HomeVisa = () => {
    // ডামি ডাটা (আপনি চাইলে এটি প্রপস হিসেবেও আনতে পারেন)
    const featuredVisas = [
        {
            id: "thailand",
            title: "Thailand Tourist Visa Application for Bangladeshis",
            country: "Thailand",
            type: "Tourist Visa",
            fee: "5,500 BDT",
            duration: "5-7 Days",
            image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "turkey",
            title: "Turkey Sticker Visa Application Requirements",
            country: "Turkey",
            type: "Sticker Visa",
            fee: "18,000 BDT",
            duration: "10-15 Days",
            image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: "singapore",
            title: "Singapore E-Visa Assistance & Guidelines",
            country: "Singapore",
            type: "E-Visa",
            fee: "4,500 BDT",
            duration: "3-5 Days",
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className="home-visa-section py-5 bg-alice-blue">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-md-8">
                        <h6 className="text-coral fw-bold mb-2">Our Visa Services</h6>
                        <h2 className="display-6 fw-bold text-teal">Get Your Visa Easily With Us</h2>
                        <p className="text-muted">We provide expert consultancy for all types of visas worldwide.</p>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <Link to="/visa-service" className="btn btn-outline-teal rounded-pill px-4 fw-bold">
                            View All Visas <FaArrowRight className="ms-2" />
                        </Link>
                    </div>
                </div>

                <div className="row g-4">
                    {featuredVisas.map((visa) => (
                        <div className="col-lg-4 col-md-6" key={visa.id}>
                            <VisaServiceCard visa={visa} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeVisa;