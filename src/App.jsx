// Hooks
import  { Routes, Route  } from 'react-router-dom';

// style
import './assets/style/shared.css';


// Components
import Header from './components/layout/Header';  
import Footer from './components/layout/Footer';
import ScrollToTopSetter from './components/layout/ScrollToTopSetter';

// Pages
import ErrorPage from './pages/error/ErrorPage';
import Home from './pages/home/Home';
import About from './pages/about/About';
import TourDetails from './pages/tourDetails/TourDetails';
import BlogDetails from './pages/blogDetails/BlogDetails';
import VisaService from './pages/visaService/VisaService';
import VisaDetails from './pages/visaDetails/VisaDetails';


function App() {
 

  return (
    <>
      <Header />

      <ScrollToTopSetter />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/visa-service" element={<VisaService />} />
          <Route path="/visa-service/:id" element={<VisaDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App;
