import thali from './thali.jpg'
import "./chief_recommend.css";
import { Link } from 'react-router-dom';

function ChiefRecommend(){

  return (

    <div className="chief-recommend-container">
      <div className="text-section">
        <p className="subheading">SAVOR THE FLAVORS OF INDIA</p>
        <h1 className="heading">Our Thali Recommendation</h1>
        <p className="description">
          Try our Chef's Recommendation—specially crafted with the freshest
          ingredients for an unforgettable flavor experience. Indulge in a dish
          guaranteed to delight!
        </p>
        <Link to="/menu"><button className="view-menu-button">VIEW MENUS</button></Link>
        
      </div>
      <div className="image-section">
        <img
          src={thali}
          alt="Chef's Recommendation"
          className="food-image"
        />
      </div>
    </div>
  );
};

export default ChiefRecommend;
