// src/pages/customer/homepage/homepage.jsx
import React from 'react';
import './homepage.css';
import CustHeader from '../../../component/customer/header/cust_header';
import Menubar from '../../../component/customer/menubar/menubar';
import ImageSlider from '../../../component/customer/imageslider/imageslider.jsx';
import Footer from '../../../component/customer/footer/cust_footer.jsx'


function HomePage() {
  return (
<>
  <CustHeader/>
  <div className="image-slider-container">
    <ImageSlider />
  </div>
  <Footer />
</>
  );
}

export default HomePage;
