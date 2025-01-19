import g1 from './g1.jpg'
import g2 from './g2.jpg'
import g3 from './g3.jpg'
import g4 from './g4.jpg'
import g5 from './g5.jpg'

import './Gallery.css';

function Gallery(){
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">
      Your Table Awaits
      </h2>
      <h1 className="gallery-header">
        @kadhai_kingdom
      </h1>
      <div className="gallery-grid">
        <img src={g1} alt="Burger and fries" className="gallery-item" />
        <img src={g2} alt="Dining table" className="gallery-item" />
        <img src={g3} alt="Fresh vegetables" className="gallery-item" />
        <img src={g4} alt="People cheering" className="gallery-item" />
        <img src={g5} alt="Dish" className="gallery-item" />
       
      </div>
    </div>
  );
};

export default Gallery;
