// Hooks
import  { Routes, Route  } from 'react-router-dom';

// style
import './assets/style/shared.css';
import './assets/style/pages.css';



// Components
import Header from './components/layout/Header';  
import Footer from './components/layout/Footer';
import ScrollToTopSetter from './components/layout/ScrollToTopSetter';

// Pages
import ErrorPage from './pages/error/ErrorPage';
import Home from './pages/home/Home';
import About from './pages/about/About';
import TourPage from './pages/tourPage/TourPage';
import TourDetails from './pages/tourDetails/TourDetails';
import BlogDetails from './pages/blogDetails/BlogDetails';
import VisaService from './pages/visaService/VisaService';
import VisaDetails from './pages/visaDetails/VisaDetails';
import Destinations from './pages/destinations/Destinations';
import DestinationDetails from './pages/destinationDetails/DestinationDetails';
import BlogPage from './pages/blogPage/BlogPage';
import AirTickets from './pages/airTicketDeals/AirTickets';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';


function App() {
 

  return (
    <>
      <Header />

      <ScrollToTopSetter />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/tours" element={<TourPage />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/visa-service" element={<VisaService />} />
          <Route path="/visa-service/:id" element={<VisaDetails />} />
          <Route path="/air-tickets" element={<AirTickets />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App;
