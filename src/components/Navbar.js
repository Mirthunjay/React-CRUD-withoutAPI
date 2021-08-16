import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //Declaration Of State
  const [click, setClick] = useState(false);

  //Declaration of Function
  const handleClick = () => setClick(!click);

  return (
    <nav>
      {/* Logo & Title */}
      <Link to="/" className="nav-logo">
        People Connect <i className="fab fa-pied-piper-alt" />
      </Link>

      {/* Menu Icon*/}
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-bars" : "fas fa-times"} />
      </div>

      {/* Menu Items */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* Home */}
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        {/* users */}
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            Users
          </Link>
        </li>

        {/* Contact Us */}
        <li className="nav-item">
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
