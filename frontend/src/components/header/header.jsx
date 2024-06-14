import React from "react";
import "./header.css";
import DivinzoLogo from "../../assets/logo/Divinzo_logo.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faSearch} className="icon search-icon" />
      <img src={DivinzoLogo} alt="Divinzo Logo" className="logo" />
      <div className="right-icons">
        <FontAwesomeIcon icon={faUser} className="icon profile-icon" />
        <FontAwesomeIcon icon={faShoppingCart} className="icon cart-icon" />
        <button className="sign-in-button">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
