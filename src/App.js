import { Routes, Route } from "react-router-dom";

// import components
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/home/Home';
import Places from './pages/places/Places';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
