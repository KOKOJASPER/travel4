import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav className=" nav">
        <h1 className="jadoo">Jadoo</h1>
        <ul className="nav-bar">
          <li>Destination</li>
          <li>hotels</li>
          <li>flights</li>
          <li>bookings</li>
          <li>login</li>
          <li>sign-up</li>
          <li>
            <select>
              <option value="">EN</option>
              <option value="french">french</option>
              <option value="chinese">chinese</option>
              <option value="spanish">spanishy</option>
            </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
