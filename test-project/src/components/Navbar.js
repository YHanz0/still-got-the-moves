import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/images/bully-maguire-logo.png';
import ModalElement1 from '../modals/Navbar/ModalElement1/ModalElement1';
import Banner from './Banner';

const Navbar = () => {
  const [modal1Visible, setModal1Visible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [bannerVisible, setBannerVisible] = useState(true);

  const openModal1 = () => setModal1Visible(true);
  const closeModal1 = () => setModal1Visible(false);

  const changeSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
    setBannerVisible(true);
  };

  const goToHomePage = () => {
    if (bannerVisible) {
      setBannerVisible(false);
      setCurrentSlide(1); // Reinicia o estado para o valor inicial ao clicar na logo
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-container" onClick={goToHomePage}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-elements">
          <span className="navbar-element" onClick={() => changeSlide(1)}>
            See Ya, Chump!
          </span>
          <span className="navbar-element" onClick={() => changeSlide(2)}>
            Gonna Cry?
          </span>
          <span className="navbar-element" onClick={() => changeSlide(3)}>
            Is That All You Got?
          </span>
          <button onClick={openModal1}>Need Help?</button>
        </div>
      </div>

      {/* Banner */}
      {bannerVisible && <Banner currentSlide={currentSlide} />}

      {/* Modal */}
      {modal1Visible && <ModalElement1 closeModal={closeModal1} />}
    </div>
  );
};

export default Navbar;