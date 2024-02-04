import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Banner from './components/Banner'; // Import the Banner component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner /> {/* Add the Banner component */}
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
