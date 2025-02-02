import resfoot from './resfoot.jpg'
import './ReserveFoot.css';
import { Link } from 'react-router-dom';


function ReserveFoot() {
  

  return (
    <div className="reserve-foot">
      <div className="reserve-content">
        <p className="reserve-subheading">We saved you a seat</p>
        <h1 className="reserve-heading">Make an online <br /> Reservation</h1>
        <p className="reserve-description">
        When the flavors get bold, 
        we bring the fire to your feast. Serving up sizzling dishes no one can beat.
        </p>
         <Link to="/reserve_table"> <button className="reserve-button" >Reservation</button></Link>
       
      </div>
    </div>
  );
}

export default ReserveFoot;
