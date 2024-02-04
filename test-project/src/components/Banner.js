import React from 'react';
import '../styles/Banner.css';
import seeYaChump from '../assets/images/see-ya-chump.gif';
import gonnaCry from '../assets/images/gonna-cry.gif';
import thatAllYouGot from '../assets/images/that-all-you-got.gif';

const Banner = ({ currentSlide }) => {
  let currentSlideImage = '';

  if (currentSlide === 1) {
    currentSlideImage = seeYaChump;
  } else if (currentSlide === 2) {
    currentSlideImage = gonnaCry;
  } else if (currentSlide === 3) {
    currentSlideImage = thatAllYouGot;
  }

  return (
    <div className="banner">
      <div className="slideshow-container">
        {currentSlideImage && (
          <img src={currentSlideImage} alt={`Slide ${currentSlide}`} />
        )}
      </div>
    </div>
  );
};

export default Banner;