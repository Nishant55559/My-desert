
import "./home_head.css";
import homehead from './homehead.jpg'

function HomeHead(){
  return (
    <div className="home-head">
      <div className="content">
        <h4>"Maximum Taste, Minimum Cost"</h4>
        <h1>Love at First Bite</h1>
        <p>
        From grill to plate, fresh and great.
        Sizzling flavors you'll appreciate.
        Taste the love in every bite we create.  
        </p>
        <button className="btn"><span>OUR MENUS</span></button>

      </div>
    </div>
  );
};

export default HomeHead;
