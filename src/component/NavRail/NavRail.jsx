import Ipl from './Ipl.svg.png'
import { FaHome, FaPaperPlane, FaTags, FaGift, FaMedal, FaTrophy, FaEnvelope } from "react-icons/fa";
import "./NavRail.css";

const NavRail = () => {
  return (
    <div className="navrail">
      <div className="navrail-logo">
        <img src={Ipl} alt="Logo" />
      </div>
      <div className="navrail-icons">
        <div className="navrail-icon active">
          <FaHome />
        </div>
        <div className="navrail-icon">
          <FaPaperPlane />
        </div>
        <div className="navrail-icon">
          <FaTags />
        </div>
        <div className="navrail-icon">
          <FaGift />
        </div>
        <div className="navrail-icon">
          <FaMedal />
        </div>
        <div className="navrail-icon">
          <FaTrophy />
        </div>
        <div className="navrail-icon">
          <FaEnvelope />
        </div>
      </div>
      <div className="navrail-bottom">
        <button className="navrail-button">...</button>
      </div>
    </div>
  );
};

export default NavRail;
