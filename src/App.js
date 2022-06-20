import { Routes, Route } from "react-router-dom";

// import components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/home/Home';
import Places from './pages/places/Places';
import PlaceDetails from './pages/place-details/Place-details';
import Videos from './pages/videos/Videos';
import VideoDetails from './pages/video-details/VideoDetails';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/place-details" element={<PlaceDetails />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/video-details" element={<VideoDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
