import React , { useState } from 'react';


const faqData = [
  {
    id: "collapseOne",
    question: "How do I book a tour package?",
    answer: "Booking is simple! You can browse our tour packages, select your preferred one, and click 'Book Now'. Alternatively, you can contact our support team via phone or email for manual booking."
  },
  {
    id: "collapseTwo",
    question: "What documents are required for visa assistance?",
    answer: "Generally, a valid passport, recent photographs, bank statements, and a NOC letter from your employer are required. However, requirements vary by country. Our experts will guide you through the specific list."
  },
  {
    id: "collapseThree",
    question: "Do you offer customized travel plans?",
    answer: "Yes, we do! If our existing packages don't fit your needs, we can create a tailor-made itinerary specifically for you or your group."
  },
  {
    id: "collapseFour",
    question: "Is travel insurance included in the packages?",
    answer: "Most of our international packages include basic travel insurance. For domestic tours, it can be added as an optional service upon request."
  }
];

const FAQ = () => {
 
  const [openId, setOpenId] = useState("collapseOne");

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id); 
  };

  return (
    <section className="faq-section py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h6 className="text-coral fw-bold text-uppercase">Questions?</h6>
              <h2 className="text-teal fw-bold">Frequently Asked Questions</h2>
              <div className="header-line mx-auto"></div>
            </div>

            <div className="accordion custom-accordion">
              {faqData.map((item, index) => (
                <div className="accordion-item mb-3 border-0 shadow-sm" key={index}>
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button ${openId !== item.id ? 'collapsed' : ''} fw-bold text-teal`} 
                      type="button"
                      onClick={() => toggleAccordion(item.id)} 
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div 
                    className={`accordion-collapse collapse ${openId === item.id ? 'show' : ''}`} 
                  >
                    <div className="accordion-body text-secondary">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;