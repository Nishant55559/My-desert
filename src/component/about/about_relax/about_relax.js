import './about_relax.css'
import about1 from './about1.jpg'

function AboutRelax (){
  return (
    <div className="about-relax-container">
      <div className="about-relax-text">
        <p className="about-relax-subheading">OUR STORY</p>
        <h1 className="about-relax-heading">Experience the Essence of India at Kadhai Kingdom</h1>
        <p className="about-relax-paragraph">
        At Kadhai Kingdom, we bring the rich flavors of India to your plate, crafted with 
        passion and tradition. From aromatic spices to sizzling tandoori delights, 
        every dish tells a story of heritage and love for authentic Indian cuisine.
        </p>
        <p className="about-relax-paragraph">
        Indulge in our signature curries, hand-ground masalas, and freshly baked naan,
        all prepared with the finest ingredients and age-old recipes. Whether it's a
        cozy dinner, a family gathering, or a festive celebration, Kadhai Kingdom 
        promises an unforgettable culinary journey.
        </p>
        <p className="about-relax-paragraph">
        Step into an ambiance that blends modern elegance with Indian warmth, 
        where every meal is more than just food—it's an experience.
        </p>
      </div>
      <div className="about-relax-image">
        <img src= {about1 }alt="Martini Glass" />
      </div>
    </div>
  );
};

export default AboutRelax;
