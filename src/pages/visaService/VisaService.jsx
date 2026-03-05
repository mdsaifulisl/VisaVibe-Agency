import React, { useState } from 'react';
import { FaClock, FaMoneyBillWave, FaArrowRight, FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import VisaServiceCard from '../../components/shared/VisaServiceCard';
import Filter from '../../components/shared/Filter';
// import '../../assets/style/details.css';

// আপনার ডাটা লিস্ট (এখানে একই দেশের একাধিক সার্ভিস থাকতে পারে)

const visaList = [
  {
    id: "thailand",
    title: "Sri Lanka Visa Application & Requirements for Bangladeshis",
    country: "Thailand",
    type: "Tourist Visa",
    fee: "5,500 BDT",
    duration: "5-7 Days",
    images:[
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80"
    ],
    continent: "Asia",
  },
  {
    id: "singapore",
    title: "Sri Lanka Visa Application & ",
    country: "Singapore",
    type: "E-Visa",
    fee: "4,500 BDT",
    duration: "3-5 Days",
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
    ],
    continent: "Asia",
  },
  {
    id: "dubai",
    title: "Sri Lanka Visa Application & Requirements for Bangladeshis",
    country: "Dubai (UAE)",
    type: "Tourist Visa",
    fee: "12,000 BDT",
    duration: "2-3 Days",
    images:
     [
       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
     ],
    continent: "Middle East",
  },
  {
    id: "malaysia",
    title: "Sri Lanka Visa Application & Requirements for Bangladeshis",
    country: "Malaysia",
    type: "Tourist E-Visa",
    fee: "6,000 BDT",
    duration: "4-6 Days",
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    ],
      
    continent: "Asia",
  },
  {
    id: "turkey",
    title: "Sri Lanka Visa Application & Requirements for Bangladeshis",
    country: "Turkey",
    type: "Sticker Visa",
    fee: "18,000 BDT",
    duration: "10-15 Days",
    categories: "Europe",
    images: [
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=600&q=80",
    ]      ,
    continent: "Europe",
  },
];

const VisaService = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  // ১. ইউনিক দেশের নামগুলো বের করা (ফিল্টার বাটনের জন্য)
  const uniqueCountries = ["All", ...new Set(visaList.map(item => item.country))];

  // ২. সার্চ এবং কান্ট্রি ক্লিক অনুযায়ী ফিল্টার লজিক
  const filteredVisas = visaList.filter(visa => {
    const matchesSearch = visa.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "All" || visa.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="visa-page pb-5">
      {/* Header Section */}
      <section className="about-hero d-flex align-items-center justify-content-center text-center text-white mb-5" 
        style={{backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.8), rgba(0, 128, 128, 0.8)), url('https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=80')`}}>
        <div className="container">
          <h1 className="display-4 fw-bold">Visa Assistance</h1>
          <p className="lead">Search and filter to find the right visa service for you</p>
        </div>
      </section>

      <div className="container">
        <div className="row g-4">
          
          {/* Left Side: Filter & Search Area */}
          <div className="col-lg-3">


            <Filter 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCountry}
              setSelectedCategory={setSelectedCountry}
              categories={uniqueCountries}
              fullList={visaList}
              categoryKey="country"
              title="Find Your visa"
            />

          </div>

          {/* Right Side: Visa Cards Result */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold text-teal mb-0">
                {selectedCountry === "All" ? "All Services" : `${selectedCountry} Visa Services`}
              </h4>
              <span className="text-secondary small">Found {filteredVisas.length} Services</span>
            </div>

            <div className="row g-4">
              {filteredVisas.length > 0 ? (
                filteredVisas.map((visa) => (
                  <div className="col-md-6 col-xl-4" key={visa.id}>
                    <VisaServiceCard visa={visa} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <h5 className="text-muted">No services found for "{searchTerm}"</h5>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisaService;