import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase
import { db } from "./firebase/firebase";
import { collection, onSnapshot } from 'firebase/firestore';

// import context
import { AuthProvider } from "./context/AuthContext";

// private and public route imoprt
import PrivateRoute from "./components/route/PrivateRoute";

// import components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Places from "./components/Places";
import Videos from "./components/Videos";
import Gallery from "./components/Gallery";

function App() {

    // states
    const [places, setPlaces] = useState([]);
    const [videos, setVideos] = useState([]);
    const [gallery, setGallery] = useState([]);

  // get data from firebase
  useEffect(() => {
    // get palces data from firebase
    const unsub = onSnapshot(
      collection(db, "places"),
      (snapshot) => {
        let placeList = [];
        snapshot.docs.forEach((doc) => {
          placeList.push({ id: doc.id, ...doc.data() });
        });
        setPlaces(placeList);
      },
      (err) => {
        console.log(err);
      }
    )

    return () => {
      unsub();
    }
  }, []);
  
  return (
    <>
      <AuthProvider>
        <Header />
        <main className="pt-60 pb-60">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            {/* private route */}
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="places" element={<Places places={ places } />} />
              <Route path="videos" element={<Videos />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
