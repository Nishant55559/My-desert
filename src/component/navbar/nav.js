
import './nav.css';
import { IoApps } from "react-icons/io5";

function Navbar(){
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <span className="goto">GO<span className="highlight">TO</span>EGYPT</span>
          </div>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#galleries">Galleries</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <IoApps className='nav_icon'  style={{ color: "#d4a04c" }} />
          
        </nav>
      )
};

export default Navbar;
