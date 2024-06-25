import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CollectionIcon from '@mui/icons-material/CollectionsTwoTone';
import DashboardIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AssignmentIcon from '@mui/icons-material/AssignmentLateTwoTone';
import CustomerIcon from '@mui/icons-material/GroupTwoTone';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/KeyboardArrowRight';
import './admin_panel.css'; 
import logo from '../../../assets/logo/Divinzo_logo1.png';

const AdminPanel = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
      setProfileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (profileMenuOpen) {
      document.addEventListener('click', handleClickOutside, true);
    } else {
      document.removeEventListener('click', handleClickOutside, true);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [profileMenuOpen]);

  return (
    <div className="admin-panel">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/" className="sidebar-link">
              <DashboardIcon className="sidebar-icon" />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item">
            <div onClick={() => handleDropdownClick(1)} className="sidebar-link">
              <CollectionIcon className="sidebar-icon" />
              Collections
              {openDropdown === 1 ? <ExpandLessIcon className="dropdown-icon" /> : <ExpandMoreIcon className="dropdown-icon" />}
            </div>
            <Collapse in={openDropdown === 1} timeout="auto" unmountOnExit>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link to="/addcollections" className="sidebar-link">Add Collections</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/viewcollections" className="sidebar-link">View Collections</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/addsubcollections" className="sidebar-link">Add Sub Collections</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/viewsubcollections" className="sidebar-link">View Sub Collections</Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="sidebar-item">
            <div onClick={() => handleDropdownClick(2)} className="sidebar-link">
              <ShoppingCartIcon className="sidebar-icon" />
              Manage Products
              {openDropdown === 2 ? <ExpandLessIcon className="dropdown-icon" /> : <ExpandMoreIcon className="dropdown-icon" />}
            </div>
            <Collapse in={openDropdown === 2} timeout="auto" unmountOnExit>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link to="/addproducts" className="sidebar-link">Add Product</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/viewproducts" className="sidebar-link">View Products</Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="sidebar-item">
            <div onClick={() => handleDropdownClick(3)} className="sidebar-link">
              <AssignmentIcon className="sidebar-icon" />
              Orders
              {openDropdown === 3 ? <ExpandLessIcon className="dropdown-icon" /> : <ExpandMoreIcon className="dropdown-icon" />}
            </div>
            <Collapse in={openDropdown === 3} timeout="auto" unmountOnExit>
              <ul className="dropdown">
                <li className="dropdown-item">All Orders</li>
                <li className="dropdown-item">Pending Orders</li>
                <li className="dropdown-item">Completed Orders</li>
              </ul>
            </Collapse>
          </li>
          <li className="sidebar-item">
            <div onClick={() => handleDropdownClick(4)} className="sidebar-link">
              <CustomerIcon className="sidebar-icon" />
              Customers
              {openDropdown === 4 ? <ExpandLessIcon className="dropdown-icon" /> : <ExpandMoreIcon className="dropdown-icon" />}
            </div>
            <Collapse in={openDropdown === 4} timeout="auto" unmountOnExit>
              <ul className="dropdown">
                <li className="dropdown-item">View Customers</li>
              </ul>
            </Collapse>
          </li>
          <li className="sidebar-item">
            <div onClick={() => handleDropdownClick(5)} className="sidebar-link">
              <SettingsIcon className="sidebar-icon" />
              Settings
            </div>
          </li>
        </ul>
      </div>

      {/* Header */}
      <div className="admin-header">
        <div className="search-section">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="icon-section">
          <div className="profile-section" onClick={toggleProfileMenu} ref={profileMenuRef}>
            <ProfileIcon className="header-icon" />
            <span className="user-name">John Doe</span>
            <ArrowDropDownIcon className="dropdown-icon" />
            {profileMenuOpen && (
              <div className="profile-menu">
                <div className="profile-menu-item">Edit Profile</div>
                <div className="profile-menu-item">Logout</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
