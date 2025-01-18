import chill from './chill.jpg'
import "./adult_chill.css";

const AdultChill = () => {
  return (
    <div className="adult-chill-container">
      <div className="adult-chill-content">
        <div className="adult-chill-image">
          <img
            src={chill}
            alt="Restaurant"
          />
        </div>
        <div className="adult-chill-text">
          <p className="tagline">YOUR SPECIAL OCCASION DESTINATION</p>
          <h1>
            The Yumyard offers a taste straight out of a dream, with tender, 
            flavorful bites that melt in your mouth like a cinematic moment.
          </h1>
          <div className="decorative-line"></div>
        </div>
      </div>
    </div>
  );
};

export default AdultChill;
