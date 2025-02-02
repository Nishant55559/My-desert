import about3 from './about3.jpg'
import about4 from './about4.jpg'
import "./about_log.css";

function AboutLog (){
  return (
    <div className="about_log">
      <div className="about_log_item">
        <div className="about_log_image">
          <img src={about3} alt="Book a Table" className="zoom_effect" />
        </div>
        <div className="about_log_text">
          <h2>Book a Table</h2>
          <button className="about_log_button">RESERVE</button>
        </div>
      </div>

      <div className="about_log_item">
        <div className="about_log_image">
          <img src={about4} alt="Our Cocktails" className="zoom_effect" />
        </div>
        <div className="about_log_text">
          <h2>Our Cocktails</h2>
          <button className="about_log_button">OUR MENU</button>
        </div>
      </div>
    </div>
  );
};

export default AboutLog;
