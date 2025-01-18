import thali from './thali.jpg'
import "./chief_recommend.css";

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
        <button className="view-menu-button">VIEW MENUS</button>
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
