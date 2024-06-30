// src/components/common/cust_footer.jsx
import React from 'react';
import './cust_footer.css'; 
import logo from '../../../assets/logo/Divinzo_logo1.png';

const CustFooter = () => {
  return (
    <footer className="footer">
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.9277036715766!2d77.13678739678954!3d19.7157019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd0531e9586d699%3A0xc199abea4095c2!2sPrakash%20Electricals%20and%20General%20Agencies!5e0!3m2!1sen!2sin!4v1718826120852!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711147487!2d73.78056571205514!3d18.52459859962392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719330095474!5m2!1sen!2sin" width="100%" height="600px" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={logo} alt="Logo" className="logo"/>
          {/* <p>SWITCH TO QUALITY</p> */}
          
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3><hr />
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/electronics">Electronics</a></li>
            <li><a href="/home-furniture">Home & Furniture</a></li>
            <li><a href="/books">Books</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3><hr />
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping-returns">Shipping & Returns</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section contact-section">
          <h3>Contact Us</h3><hr />
          <p><span>Email</span> : <a href="mailto:support@essentia.com">support@essentia.com</a></p>
          <p><span>Phone</span> : +123 456 7890</p>
          <p><span>Address</span> : xxx- xxxxx- xxxxx xxxxxxx</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© DIVINZO, PUNJAB</p>
      </div>
    </footer>
  );
}

export default CustFooter;
