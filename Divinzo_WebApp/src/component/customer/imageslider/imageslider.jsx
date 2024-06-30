// src/components/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../../assets/logo/slide1.jpg';
import slide2 from '../../../assets/logo/slide2.jpg';
import slide3 from '../../../assets/logo/slide3.jpg';
import slide4 from '../../../assets/logo/slide4.jpg';
import slide5 from '../../../assets/logo/slide5.jpg';
import './imageslider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false // Disable next and back icons
  };

  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <img src={slide} alt={`Slide ${index + 1}`} className="slider-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
