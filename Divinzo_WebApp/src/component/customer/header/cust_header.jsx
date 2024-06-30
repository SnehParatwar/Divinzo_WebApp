import React, { useState, useEffect, useRef } from 'react';
import {
  Search as SearchIcon,
  AccountCircle as ProfileIcon,
  ShoppingCart as ShoppingCartIcon,
  Favorite as HeartIcon,
  ExpandMore as ArrowDropDownIcon
} from '@mui/icons-material';
import './cust_header.css';
import logo from '../../../assets/logo/Divinzo_logo.png';
import Clothing from '../../../assets/logo/clothing.jpeg';
import Clothing1 from '../../../assets/logo/clothing1.jpg';
import Ethnic from '../../../assets/logo/ethnic1.jpg';
import Ethnic1 from '../../../assets/logo/ethnic3.jpg';
import Accessories from '../../../assets/logo/accessories.jpg';
import Accessories1 from '../../../assets/logo/accessories2.jpg';
import Fabric from '../../../assets/logo/fabric.jpeg';
import Fabric1 from '../../../assets/logo/fabric2.jpeg';

const CustHeader = () => {
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);
  const [activeCollection, setActiveCollection] = useState('');
  const megaMenuRef = useRef(null);

  const collections = {
    CLOTHING: {
      categories1: ['Beachwear', 'Blouses', 'Coats', 'Denim', 'Dresses', 'Jackets', 'Jeans', 'Jumpsuits', 'Skirts', 'Shorts', 'Shirts', 'Sweaters', 'Tops', 'Pants'],
      categories2: ['Autumn must-haves', 'Starting to cool', 'For rainy days'],
      categories3: ['For Timeless Style', 'For the Perfect Jeans fit', 'In Warm Weather', 'To a Special Event', 'On Vacation', 'For a Night Out', 'On the weekend'],
      image: Clothing,
      image1: Clothing1
    },
    'ETHNIC WEAR': {
      categories1: ['Sarees', 'Salwar Kameez', 'Lehengas', 'Kurtas', 'Shawls', 'Dupattas'],
      categories2: ['Traditional Favourites', 'Festive Collection', 'Daily Wear'],
      categories3: ['For Weddings', 'For Festivals', 'For Everyday Comfort', 'Special Occasions', 'Cultural Events'],
      image: Ethnic,
      image1: Ethnic1
    },
    ACCESSORIES: {
      categories1: ['Bags', 'Belts', 'Hats', 'Scarves', 'Jewellery', 'Watches'],
      categories2: ['Latest Trends', 'Must-Have Accessories', 'Popular Choices'],
      categories3: ['For Casual Outfits', 'For Formal Events', 'For Vacations', 'For Daily Use', 'For Parties'],
      image: Accessories,
      image1: Accessories1
    },
    FABRICS: {
      categories1: ['Cotton', 'Silk', 'Linen', 'Wool', 'Synthetics', 'Blends'],
      categories2: ['New Arrivals', 'Seasonal Favourites', 'Top Sellers'],
      categories3: ['For Summer', 'For Winter', 'For All Seasons', 'For Special Events', 'For Work'],
      image: Fabric,
      image1: Fabric1
    },
    'HOME & LIVING': {
      categories1: ['Cotton', 'Silk', 'Linen', 'Wool', 'Synthetics', 'Blends'],
      categories2: ['New Arrivals', 'Seasonal Favourites', 'Top Sellers'],
      categories3: ['For Summer', 'For Winter', 'For All Seasons', 'For Special Events', 'For Work'],
      image: Fabric,
      image1: Fabric1
    }
  };

  const showMegaMenu = (collection) => {
    setActiveCollection(collection);
    setMegaMenuVisible(true);
  };

  const hideMegaMenu = () => {
    setMegaMenuVisible(false);
  };

  const renderMegaMenu = () => {
    if (!activeCollection) return null;
    const { categories1, categories2, categories3, image, image1 } = collections[activeCollection];

    return (
      <div className={`mega-menu ${megaMenuVisible ? 'active' : ''}`} ref={megaMenuRef}
        onMouseEnter={() => setMegaMenuVisible(true)}
        onMouseLeave={hideMegaMenu}>
        <div className="mega-menu-content">
          <div className="categories1">
            <h3>Shop by category</h3>
            {categories1.map((category, index) => (
              <div key={index}>{category}</div>
            ))}
          </div>
          <div className="categories2">
            <h3>Trending now</h3>
            {categories2.map((category, index) => (
              <div key={index}>{category}</div>
            ))}
          </div>
          <div className="categories3">
            <h3>What to wear</h3>
            {categories3.map((category, index) => (
              <div key={index}>{category}</div>
            ))}
          </div>
          <div className="menu-image">
            <img src={image} alt={`${activeCollection} image`} width={250} />
            <img src={image1} alt={`${activeCollection} image1`} width={250} />
          </div>
        </div>
      </div>
    );
  };

  const handleClickOutside = (event) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
      setMegaMenuVisible(false);
      setActiveCollection('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="cust-header">
      <div className="cust-header-left">
        <div className="search-bar">
          <SearchIcon style={{ fontSize: 20, color: '#888' }} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
      </div>

      <div className="cust-header-center">
        <a href="/" className="logo">
          <img src={logo} alt="Prakash Electricals" />
        </a>
        <div className="collection-menu">
          <a href="/" className="collection-link">HOME</a>
          {/* <a href="/about" className="collection-link">ABOUT</a> */}
          <div className="collection-link-with-icon" onMouseEnter={() => showMegaMenu('CLOTHING')} onMouseLeave={hideMegaMenu}>
            <a href="/clothing" className="collection-link">CLOTHING</a>
            {/* <ArrowDropDownIcon style={{ fontSize: 19, marginLeft: 5, color: '#333' }} className="dropdown-icon" /> */}
          </div>
          <div className="collection-link-with-icon" onMouseEnter={() => showMegaMenu('ETHNIC WEAR')} onMouseLeave={hideMegaMenu}>
            <a href="/ethnic-wear" className="collection-link">ETHNIC WEAR</a>
            {/* <ArrowDropDownIcon style={{ fontSize: 19, marginLeft: 5, color: '#333' }} className="dropdown-icon" /> */}
          </div>
          <div className="collection-link-with-icon" onMouseEnter={() => showMegaMenu('ACCESSORIES')} onMouseLeave={hideMegaMenu}>
            <a href="/accessories" className="collection-link">ACCESSORIES</a>
            {/* <ArrowDropDownIcon style={{ fontSize: 19, marginLeft: 5, color: '#333' }} className="dropdown-icon" /> */}
          </div>
          <div className="collection-link-with-icon" onMouseEnter={() => showMegaMenu('FABRICS')} onMouseLeave={hideMegaMenu}>
            <a href="/fabrics" className="collection-link">FABRICS</a>
            {/* <ArrowDropDownIcon style={{ fontSize: 19, marginLeft: 5, color: '#333' }} className="dropdown-icon" /> */}
          </div>
          <div className="collection-link-with-icon" onMouseEnter={() => showMegaMenu('HOME & LIVING')} onMouseLeave={hideMegaMenu}>
            <a href="/home-living" className="collection-link">HOME & LIVING</a>
            {/* <ArrowDropDownIcon style={{ fontSize: 19, marginLeft: 5, color: '#333' }} className="dropdown-icon" /> */}
          </div>
          <a href="/contact" className="collection-link">CONTACT US</a>
        </div>
      </div>
      
      <div className="cust-header-right">
        <a href="/profile" className="header-link"><ProfileIcon style={{ fontSize: 24 }} className="header-icon" /></a>
        <a href="/like" className="header-link"><HeartIcon style={{ fontSize: 24 }} className="header-icon" /></a>
        <a href="/cart" className="header-link"><ShoppingCartIcon style={{ fontSize: 24 }} className="header-icon" /></a>
      </div>

      {renderMegaMenu()}
    </header>
  );
};

export default CustHeader;
