import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// firebase
import { db } from "./firebase/firebase";
import { collection, onSnapshot } from 'firebase/firestore';

// import components
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {

  // states
  

  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home places={ places } videos={ videos } gallery={ gallery } />} /> */}
          test
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
