// src/components/banner.jsx

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './banner.css';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const banners = [
    { type: 'youtube', src: 'https://www.youtube.com/embegyOmO4KGCRk?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1', alt: 'YouTube Video' },
    { type: 'image', src: 'https://via.placeholder.com/800x400?text=2', alt: 'Banner 2' },
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', alt: 'Banner Video 1' },
    { type: 'image', src: 'https://via.placeholder.com/800x400?text=3', alt: 'Banner 3' },
    { type: 'image', src: 'https://via.placeholder.com/800x400?text=4', alt: 'Banner 4' },
    { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4', alt: 'Banner Video 2' },
  ];

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="banner-item">
            {banner.type === 'image' ? (
              <img src={banner.src} alt={banner.alt} className="banner-image" />
            ) : banner.type === 'video' ? (
              <video src={banner.src} className="banner-video" autoPlay loop muted playsInline />
            ) : (
              <iframe
                src={banner.src}
                title={banner.alt}
                className="banner-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
