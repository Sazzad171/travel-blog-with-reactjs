import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase
import { db } from "./firebase/firebase";
import { collection, onSnapshot } from 'firebase/firestore';

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
  const [places, setPlaces] = useState([]);
  const [videos, setVideos] = useState([]);

  // get data from firebase
  useEffect(() => {
    // get places data from firebase
    const unsub = onSnapshot(
      collection(db, "places"),
      (snapshot) => {
        let placeList = [];
        snapshot.docs.forEach((doc) => {
          placeList.push({ id: doc.id, ...doc.data() });
        });
        setPlaces(placeList);
      },
      (error) => {
        console.log(error);
      }
    );

    // get videos data from firebase
    const unsubVideo = onSnapshot(
      collection(db, "Videos"),
      (snapshot) => {
        let videoList = [];
        snapshot.docs.forEach((doc) => {
          videoList.push({ id: doc.id, ...doc.data() });
        });
        setVideos(videoList);
        console.log(videoList);
      }
    )

    return () => {
      unsub();
      unsubVideo();
    };
  }, []);

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
