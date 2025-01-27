import './Contact.css';
import { FaFacebook, FaInstagram, FaTripadvisor } from "react-icons/fa";

function Contact (){
    return (
        <div className="contact-container">
          {/* Contact Details */}
          <div className="contact-section">
            <h3>Contact</h3>
            <p>732/21 Second Street, Kolkata</p>
            <p>Kolkata, West Bengal</p>
          </div>
    
          {/* Follow Us */}
          <div className="contact-section">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li>
                <FaFacebook size={20} /> Facebook
              </li>
              <li>
                <FaInstagram size={20} /> Instagram
              </li>
              <li>
                <FaTripadvisor size={20} /> TripAdvisor
              </li>
            </ul>
          </div>
    
          {/* Opening Hours */}
          <div className="contact-section">
            <h3>Opening Hours</h3>
            <div>
              <p><strong>Lunch Time</strong></p>
              <p>Monday to Sunday</p>
              <p>10:30am - 3:00pm</p>
            </div>
            <div>
              <p><strong>Dinner Time</strong></p>
              <p>Monday to Sunday</p>
              <p>5:30pm - 11:00pm</p>
            </div>
          </div>
    
          {/* Contact Info */}
          <div className="contact-section">
            <h3>T: +65 (0) 76-890-214</h3>
            <h3>E:bookings@kadhai_kingdom.in</h3>
          </div>
        </div>
      );
};

export default Contact;
