import { Routes, Route } from "react-router-dom";
import { useState } from "react";

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

  // states
  const [places] = useState([
    {
      id: 1,
      name: "One day tour 1",
      description: "Description of this",
      location: "Dhaka",
      img: "assets/img/destination.jpg"
    },
    {
      id: 2,
      name: "One day tour 2",
      description: "Description of this",
      location: "Dhaka",
      img: "assets/img/destination.jpg"
    },
    {
      id: 3,
      name: "One day tour 3",
      description: "Description of this",
      location: "Dhaka",
      img: "assets/img/destination.jpg"
    },
    {
      id: 4,
      name: "One day tour 4",
      description: "Description of this",
      location: "Dhaka",
      img: "assets/img/destination.jpg"
    },
    {
      id: 5,
      name: "One day tour 5",
      description: "Description of this",
      location: "Dhaka",
      img: "assets/img/destination.jpg"
    },
    {
      id: 6,
      name: "One day tour 6",
      description: "Description of this",
      location: "Dhaka",
      img: "assets/img/destination.jpg"
    },
    {
      id: 7,
      name: "One day tour 7",
      description: "Description of this",
      location: "Dhaka",
      img: "assets/img/destination.jpg"
    },
  ]);
  const [videos] = useState([
    {
      id: 1,
      name: "Tanguar Haor",
      location: "Sunamganj",
      img: ''
    }
  ])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home places={ places } videos={ videos } />} />
          <Route path="/places" element={<Places places={ places } />} />
          <Route path="/place-details/:id" element={<PlaceDetails />} />
          <Route path="/videos" element={<Videos videos={ videos } />} />
          <Route path="/video-details/:id" element={<VideoDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
