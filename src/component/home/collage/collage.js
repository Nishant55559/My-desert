import "./collage.css";
import col1 from './col1.jpg'
import col2 from './col2.jpg'
import col3 from './col3.jpg'

function Collage(){
  return (
    <div className="collage-container">
      <h1>Find your best food</h1>
      <p>Unveiling flavors that linger, because every bite deserves the top taste!</p>
      <div className="collage-grid">
        <div className="collage-item">
          <img
            src={col1}
            alt="Veggies"
            className="collage-image"
          />
          <div className="collage-text">
            <h3>VEGGIES</h3>
            <h2>Masala Anda Delight
            </h2>
            <p>
            Fluffy eggs infused with aromatic Indian spices for a flavorful start to your day.
            A perfect blend of desi masalas and herbs in every bite!
            </p>
            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
        </div>
        <div className="collage-item">
          <img
            src={col2}
            alt="Food"
            className="collage-image"
          />
          <div className="collage-text">
            <h3>FOOD</h3>
            <h2>Desi Chicken Cheese Stack</h2>
            <p>
            Juicy chicken patty layered with melted cheese and tangy Indian sauces.
            A bold, spicy twist to your favorite burger, straight from Indian kitchens!
            </p>
            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
        </div>
        <div className="collage-item">
          <img
            src={col3}
            alt="Food"
            className="collage-image"
          />
          <div className="collage-text">
            <h3>FOOD</h3>
            <h2>Chicken Chimichurri dry fry</h2>
            <p>
            Crispy, golden chicken marinated in traditional tandoori spices.
            A fiery burst of flavors with every crunchy bite!
            </p>
            <a href="#" className="learn-more">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
