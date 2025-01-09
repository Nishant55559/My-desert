
import { FaSearch, FaBell, FaShoppingCart, FaBars } from "react-icons/fa";
import "./nav.css";

function Navbar(){
  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <FaBars className="navbar-menu-icon" />
        <img src="https://via.placeholder.com/20x20?text=N" alt="Logo" className="navbar-logo" />
      </div>

      {/* Center Section */}
      <div className="navbar-center">
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="navbar-search-input" />
          <FaSearch className="navbar-search-icon" />
        </div>
        <div className="navbar-inter">
          <button className="navbar-inter-btn">
            <img src="https://via.placeholder.com/20x20" alt="Inter Icon" className="inter-icon" />
            INTER
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <FaBell className="navbar-icon" />
        <FaShoppingCart className="navbar-icon" />
        <div className="navbar-profile">
          <img
            src="https://via.placeholder.com/20x20"
            alt="Profile"
            className="navbar-profile-pic"
          />
          <span className="navbar-profile-name">SAID</span>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
