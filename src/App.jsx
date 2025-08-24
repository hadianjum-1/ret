import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Ab from './Ab'; // Import the Ab component

import Header from './Header'; // Import Header
import Banner from './Banner';
import Featur from './Featur';
import About from './About';
import Rese from './Rese';
import Testim from './Testim';
import Footer from './Footer'; // Import Footer

const App = () => {
  const location = useLocation(); // Hook to get the current path

  return (
    <>
      {/* Conditionally render Header and Footer based on the current path */}
      {location.pathname !== '/about' && <Header />} {/* Only show Header if not on /about */}
      
      <Routes>
        {/* Route for the About page */}
        <Route path="/about" element={<Ab />} />
      </Routes>

      {/* Conditionally render other components based on the current path */}
      {location.pathname !== '/about' && (
        <main>
          <Banner />
          <Featur title={'Featured Dishes'} />
          <About /> {/* Or any other components you want */}
          <Rese />
          <Testim />
        </main>
      )}

      {/* Always show Footer */}
      <Footer />
    </>
  );
}

export default App;
