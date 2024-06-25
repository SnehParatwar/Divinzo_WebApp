import React, { useState, useRef, useEffect } from 'react';
import './menubar.css';
import FlareIcon from '@mui/icons-material/Flare';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import WeekendIcon from '@mui/icons-material/Weekend';
import WaterIcon from '@mui/icons-material/Water';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PowerIcon from '@mui/icons-material/Power';
import SettingsIcon from '@mui/icons-material/Settings';
import AirIcon from '@mui/icons-material/Air';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const Menubar = () => {
  const [clickedCategory, setClickedCategory] = useState(null);
  const [expandedSubcategories, setExpandedSubcategories] = useState([]);
  const menuRef = useRef(null);

  const categories = [
    { name: 'Lightings', icon: <TipsAndUpdatesIcon />, subcategories: [
        'Led Bulbs', 'Led Panels - Surface And Conceal', 'Led Downlight', 'Led COB', 'Led Batten',
        'Led Rope Light', 'Led Strip Light', 'Led Flood Light', 'Led Street Light', 'Led Cylinder COB',
        'Led Smart Light', 'Led Spot Light', 'Led Sensor Bulb'
      ] 
    },
    { name: 'Fans', icon: <AcUnitIcon />, subcategories: [
        'Ceiling Fan', 'Wall Fan', 'Pedestal Fan', 'Table Fan', 'Cabin Fan', 'Exhaust Fan',
        'Fresh Air Fan', 'BLDC Ceiling Fan', 'Premium Fans', 'Decorative Fans', '12 V DC Fans',
        '12 V AC/DC Fan'
      ] 
    },
    { name: 'Torch and Lamps', icon: <FlareIcon />, subcategories: [
        'Rechargeable Torches', 'Battery Torches'
      ] 
    },
    { name: 'Home Decor', icon: <WeekendIcon />, subcategories: [
        'Led Mirror Light', 'Led Photoframe Light', 'Gate Lamp', 'Led Wall Light', 'Table Lamp', 'Tree Lighting'
      ] 
    },
    { name: 'Geyser', icon: <WaterIcon />, subcategories: [
        'Electric Water Heater', 'Gas Geyser'
      ] 
    },
    { name: 'Home Appliances', icon: <KitchenIcon />, subcategories: [
        'Mixer Grinder', 'Hand Mixer', 'Bitter', 'Electric Iron', 'Electric Heavy Weight Dry Iron', 'Steam Iron',
        'Sandwich Toaster', 'Bread Toaster', 'Electric Kettle', 'Blower', 'Electric Induction', 'Coil Induction',
        'Room Heater', 'Jyoti Gas Shegdi'
      ] 
    },
    { name: 'Stabilizers', icon: <PowerIcon />, subcategories: [
        'TV Stabilizer', 'Refrigerator Stabilizer Upto 300L', 'Inverter Refri Stabilizer Upto 450L', 
        'Refrigerio Deep Freezer and Bottle Cooler', 'Inverter Ref Upto 900L', 
        'Washing Machine / TreadMill / Micro Oven / Dishwasher Stabilizer', 'Air Conditioner Stabilizer', 
        'Electric Bike/Car Stabilizer', 'Mainline Stabilizer for General Purpose'
      ] 
    },
    { name: 'Industrial Fittings', icon: <SettingsIcon />, subcategories: [
        'Insulator', 'Copper Lugs', 'Aluminium Lugs', 'Circuit Breaker / Fuses', 'Armored Cables'
      ] 
    },
    { name: 'Vacuum Cleaners', icon: <AirIcon />, subcategories: [
        'Eureka Forbes'
      ] 
    },
    { name: 'Atta Chakki', icon: <EmojiFoodBeverageIcon />, subcategories: [
        'Jyoti Atta Chakki'
      ] 
    },
    { name: 'Chimney', icon: <SmokeFreeIcon />, subcategories: [
        'Jyoti Oxygen Chimney'
      ] 
    },
    { name: 'Personal Care', icon: <FavoriteIcon />, subcategories: [
        'Trimmer', 'Hair Dryer'
      ] 
    },
    { name: 'Wires and Cables', icon: <ElectricalServicesIcon />, subcategories: [
        'VGuard Wire', 'KEI Wire', 'KunthuCAB Wire', 'Service Wire', 'Dish RG6 Wire', 'Cat 6 Wire', 'CCTV Wire',
        'Round Multicore Wire', 'Speaker Wire', 'Telephone Wire', 'Multi Stand Wire'
      ] 
    },
    { name: 'Inverter and Battery', icon: <BatteryFullIcon />, subcategories: [
        'Microtek Inverter', 'Microtek Battery', 'Okaya Inverter', 'Okaya Battery', 'Ujala Powerhouse UPS'
      ] 
    },
    { name: 'Switches and Accessories', icon: <ToggleOnIcon />, subcategories: [] }
  ];

  const handleClick = (category) => {
    if (clickedCategory === category) {
      setClickedCategory(null);
      setExpandedSubcategories([]);
    } else {
      setClickedCategory(category);
      if (category.subcategories && category.subcategories.length > 0) {
        setExpandedSubcategories(category.subcategories);
      } else {
        setExpandedSubcategories([]);
      }
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setClickedCategory(null);
      setExpandedSubcategories([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="menubar-wrapper">
      <div className="menubar" ref={menuRef}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`menu-item ${clickedCategory === category ? 'active' : ''}`}
            onClick={() => handleClick(category)}
          >
            {category.icon}
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      {clickedCategory && expandedSubcategories.length > 0 && (
        <div className="dropdown-container">
          <div className="dropdown-menu">
            <div className="subcategory-list">
              {expandedSubcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="subcategory-item">
                  {subcategory}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menubar;
