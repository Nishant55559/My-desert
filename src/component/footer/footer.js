import { FaFacebookF, FaTwitter, FaInstagram, FaTripadvisor } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="about">
          <h3>About kadhai_kingdom</h3>
          <p>
          At our restaurant, every meal tells a story. Inspired by rich traditions and infused with
           bold flavors, our dishes are crafted with passion and care. We believe in delivering an
            unforgettable dining experience that combines authenticity with innovation, leaving your 
            taste buds delighted and your soul satisfied
          </p>
          <button className="read-more">READ MORE</button>
        </div>
        <div className="services">
          <h3>Lunch Service</h3>
          <p>Booking from 12:00pm — 1:30pm</p>
          <h3>Dinner Service</h3>
          <p>Everyday: Booking from 6:00pm — 9:00pm</p>
        </div>
        <div className="follow-along">
          <h3>Follow Along</h3>
          <div className="social-icons">
            <FaTripadvisor className="icon" />
            <FaTwitter className="icon" />
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
          </div>
          <h3>Newsletter</h3>
          <div className="newsletter">
            
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with ❤️ by Nishant55559
        </p>
      </div>
    </footer>
  );
};

export default Footer;
