
import "./head.css";
import head from './head.jpg'

function Head(){
  return (
    <div className="head">
      <div className="content">
        <p className="subtitle">THE ANCIENT WORLD</p>
        <h1 className="title">Discover the last remaining of ancient Egypt</h1>
        <div className="scroll-down">
          <p>SCROLL DOWN</p>
          <span className="arrow">↓</span>
        </div>
      </div>
      <div className="pyramids">
        <div className="info-section">
          <p className="section-title">THE ANCIENT</p>
          <h2 className="main-title">Egyptian civilization</h2>
          <div className="info">
            <p>
              The ancient Egyptian civilization, famous for its pyramids,
              pharaohs, mummies, and tombs, flourished for thousands of years.
              But what was its lasting impact?
            </p>
            <p>
              Watch the video below to learn how ancient Egypt contributed to
              modern-day society with its many cultural developments,
              particularly in language & mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Head;
