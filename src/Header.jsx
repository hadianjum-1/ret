import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import About from './About';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(prevMenu => !prevMenu);  // Toggle the menu state
  };

  return (
    <header>
      <div className="logo">
        <img src="src/assets/logo-gold.png" alt="Logo" width={'150px'} />
      </div>
      
      {/* Display 'Show' text only when the menu is hidden */}
      
      <nav className={menu ? 'show' : ''}>  {/* Add a class to style the menu when shown */}
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Reservation</li>
         <Link to='/about'><li>About us</li> </Link>
      
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      
      <a href="#" className="Menu-icon" onClick={handleMenu}>
        <img src="src/assets/menu-icon.png" alt="Menu Icon" width={'40px'} />
      </a>
    </header>
  );
};

export default Header;
