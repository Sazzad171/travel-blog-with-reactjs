import { Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";

// firebase
// import { db } from "./firebase/firebase";
// import { collection, onSnapshot } from 'firebase/firestore';

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
  

  return (
    <>
      <Header />
      <main className="pt-60 pb-60">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/places" element={<Places />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
