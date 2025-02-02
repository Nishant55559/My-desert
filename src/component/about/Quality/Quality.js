import React, { useState, useEffect } from "react";
import "./Quality.css";
import s1 from './s1.jpeg';
import d1 from './d1.jpg';
import au1 from './au1.jpeg';

const images = [
  { src: d1, alt: "Fancy Drinks" },
  { src: s1, alt: "Premium Ingredients" },
  { src: au1, alt: "Authentic Flavors" }
];

const Quality = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Image changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="quality-section">
      <div className="quality-content">
        <h2 className="quality-title">Quality Products</h2>
        <p className="quality-text">
          At <strong>Kidhai Kingdom</strong>, we take pride in serving only the finest ingredients, ensuring every dish is a masterpiece.
        </p>
        <p className="quality-text">
          From rich Indian spices to premium quality beverages, we bring you an experience that is both authentic and unforgettable.
        </p>
      </div>

      <div className="quality-carousel">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className="quality-image show" 
        />
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
