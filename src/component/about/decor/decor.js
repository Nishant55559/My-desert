import decor1 from './decor1.jpg'
import decor2 from './decor2.jpg'
import "./decor.css";

function Decor(){
  return (
    <section className="decor-section">
      <div className="decor-container">
        <div className="decor-images">
          <img src={decor1} alt="decor1" className="decor-image" />
          <img src={decor2} alt="decor2" className="decor-image" />
        </div>
        <div className="decor-content">
          <h4 className="decor-subtitle">Our Decor at Kidhai Kingdom</h4>
          <h2 className="decor-title">Rustic Elegance with a Traditional Touch</h2>
          <p className="decor-text">
          Step into Kidhai Kingdom, where the warmth of Indian heritage meets rustic elegance. 
          Our decor is a seamless blend of tradition and sophistication, creating an inviting 
          ambiance that transports you to the heart of India.
          <br/>
          From handcrafted wooden accents to soft, ambient lighting, 
          every detail reflects the rich cultural artistry of India. 
          Experience an atmosphere that is both cozy and regal, perfect for an unforgettable 
          dining experience.
          </p>
          <p className="decor-text">
          What Makes Our Space Unique?
          </p>
          <ul className="decor-list">
            <li> Authentic Indian-inspired interiors with handcrafted décor.</li>
            <li> A warm and welcoming ambiance infused with soft, golden hues.</li>
            <li>  A perfect blend of tradition and modern comfort.</li>
          </ul>
          <p className="decor-text">
          At Kidhai Kingdom, we don’t just serve food—we create an experience steeped in Indian heritage. 
          Come, dine with us, and indulge in the flavors of India in a setting designed to make you 
          feel at home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Decor;
