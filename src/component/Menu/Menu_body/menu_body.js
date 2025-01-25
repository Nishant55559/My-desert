import React, { useState} from "react";
import "./menu_body.css";
import alooph from './alooph.jpg';
import dosa from './dosa.jpg';
import idli from './idli.jpg';
import poha from './poha.jpg';
import chole from './chole.jpg';
import puri from './puri.jpg';
import methi from './methi.jpg';
import aloodum from './aloodum.jpg';
import cpakora from './cpakora.jpg'
import ctikka from './ctikka.jpg'
import kebab from './kebab.jpg'
import onion from './onion.jpg'
import pavb from './pavb.jpg'
import samosa from './samosa.jpg'
import souththali from './souththali.jpg';
import missel from './missel.jpg'
import butterc from './butterc.jpg'
import pkm from './pkm.jpg'
import panti from './panti.jpg'
import fish from './fish.jpeg'
import dal from './dal.jpg'
import biryani from './biryani.jpg'
import bhindi from './bhindi.jpeg'
import mutton from './mutton.jpeg'
import gobi from './gobi.jpeg'
import Modal from "react-modal";
import chai from './chai.jpg'
import coffee from './coffee.jpg'
import gulab from './gulab.jpeg'
import jaljeera from './Jaljeera.jpeg'
import mango from './mango.jpeg'
import shake from './shake.jpeg'
import soda from './soda.jpeg'
import badam from './Badam.jpeg'
import veg from './veg.jpg'
import purip from './panip.jpg'
import indian56 from './Indian56.jpeg'
import jamun from './Jamun.jpeg'
import jeera from './Jeera.jpeg'
import dahi from './Dahi.jpeg'
import garlic from './Garlic.jpeg'
import chaat from './Chaat.jpeg'
import non from './non.jpg'
import bengali from './bengal.jpeg'

Modal.setAppElement("#root"); // Set the app root for accessibility

const menuData = {
  Breakfast: [
    { name: "Aloo Paratha", description:"spicy aloo stuff and cooked in tandoor served with mango pickel , butter and raita", price: "₹80", image:alooph },
    { name: "Masala Dosa", description: "Crispy dosa , served with sambar and coconut chutney.", price: "₹150", image: dosa },
    { name: "Idli & Vada Combo", description: "Idli with medu vada, served with sambar and coconut chutney.", price: "₹100", image: idli },
    { name: "Poha", description: "Flattened rice cooked with onions, turmeric, and garnished with peanuts and coriander.", price: "₹80", image: poha },
    { name: "Puri Sabji", description: "soft, fluffy, deep-fried puri served alongside a spiced sabji & mango pickel and lassi .", price: "₹90", image:puri },
    { name: "Chole Bhature", description: "Spiced chickpea curry served with deep-fried puri.", price: "₹180", image: chole },
    { name: "Puri Aloo dum", description: " soft, golden puris  with a flavorful, spicy aloo dum  & mango pickel and lassi .", price: "₹180", image: aloodum },
    { name: "Meethi ke Parathe", description: " sweet and flavorful Parathe  made  with jaggery, whole wheat flour, and a hint of cardamom and lassi. ", price: "₹180", image: methi },
  ],
  Starter: [
    { name: "Paneer Tikka", description: "Marinated paneer grilled to perfection with spices.", price: "₹250", image:panti },
    { name: "Onion Bhaji combo", description: "Crispy deep-fried fritters made with onion and gram flour and served with Adrak Chai & mint chutney.", price: "₹150", image: onion },
    { name: "Chicken Tikka", description: "Tender chicken pieces marinated in yogurt and spices, cooked in a tandoor.", price: "₹150", image: ctikka },
    { name: "Samosa combo", description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.", price: "₹20", image: samosa },
    { name: "Hara Bhara Kebab", description: "Healthy and delicious patties made with spinach, peas, and spices.", price: "₹80", image: kebab },
    { name: "Missle Pav", description: "served with buttery pavs , spicy curry & crunchy bhujiya.", price: "₹90", image:missel },
    { name: "Chicken Pakora", description: "Spicy and crispy fried chicken coated in a tangy batter served with mint chutney.", price: "₹350", image: cpakora },
    { name: "Pav Bhaji", description: "buttery pavs and mixed spicy curry with amul butter .", price: "₹100", image: pavb },
  ],
  Cuisine: [
    {
      name: "Butter Chicken with Naan",
      description: "Tender chicken pieces cooked in a creamy tomato-based gravy, served with soft naan bread.",
      price: "₹350",
      image: butterc,
    },
    {
      name: "Paneer Tikka Masala",
      description: "Char-grilled paneer cubes simmered in a rich and spiced masala, served with roti or steamed rice.",
      price: "₹300",
      image: pkm,
    },
    {
      name: "Hyderabadi Biryani",
      description: "Aromatic basmati rice layered with marinated chicken or vegetables, cooked with flavorful spices.",
      price: "₹250",
      image: biryani,
    },
    {
      name: "Dal Makhani",
      description: "Creamy black lentils slow-cooked with butter and aromatic spices, paired with warm naan or roti.",
      price: "₹200",
      image: dal,
    },
    {
      name: "Gobi Masala",
      description: "Fresh cauliflower florets cooked in a spiced tomato-onion gravy, served with roti or paratha.",
      price: "₹30",
      image: gobi,
    },
    {
      name: "Mutton Rogan Josh",
      description: "Tender mutton pieces cooked in a flavorful Kashmiri-style curry, served with steamed rice or naan.",
      price: "₹400",
      image: mutton,
    },
    {
      name: "Bhindi Masala",
      description: "Bhindi stir-fried with onions, tomatoes, and spices, served with roti or paratha.",
      price: "₹400",
      image: bhindi,
    },
    {
      name: "Fish Curry",
      description: "Fresh fish cooked in a tangy and spiced coconut-based curry, served with steamed rice.",
      price: "₹400",
      image: fish,
    },
  ],
  
  Drinks: [
    { 
      name: "Masala Chai", 
      description: "Traditional Indian tea brewed with aromatic spices and milk, perfect for any time of the day.", 
      price: "₹40", 
      image: chai 
    },
    { 
      name: "Mango Lassi", 
      description: "A chilled yogurt-based drink blended with ripe mango pulp, offering a sweet and refreshing taste.", 
      price: "₹120", 
      image: mango 
    },
    { 
      name: "Filter Coffee", 
      description: "Rich and aromatic South Indian-style coffee served with a frothy top.", 
      price: "₹50", 
      image: coffee 
    },
    { 
      name: "Fresh Lime Soda", 
      description: "Refreshing sparkling soda mixed with fresh lime juice and a hint of salt or sugar.", 
      price: "₹80", 
      image: soda 
    },
    { 
      name: "Jaljeera", 
      description: "Tangy spiced cumin drink with refreshing flavors, perfect for digestion.", 
      price: "₹60", 
      image: jaljeera 
    },
    { 
      name: "Badam Milk", 
      description: "Chilled almond-flavored milk infused with saffron and cardamom for a royal taste.", 
      price: "₹150", 
      image: badam 
    },
    { 
      name: "Kit Kat Shake", 
      description: "A creamy milkshake blended with Kit Kat chocolate for a sweet treat.", 
      price: "₹150", 
      image: shake 
    },
    { 
      name: "Rose Sharbat", 
      description: "A sweet and fragrant rose-flavored drink, served chilled to beat the heat.", 
      price: "₹100", 
      image: gulab 
    },
  ],
  
  Thali: [
    { 
      name: "Vegetarian Thali", 
      description: "A complete platter featuring dal, sabzi, roti, rice, raita, pickle, and a dessert.", 
      price: "₹300", 
      image: veg 
    },
    { 
      name: "Non-Vegetarian Thali", 
      description: "A hearty platter with chicken curry, dal, roti, rice, and a sweet dessert to end the meal.", 
      price: "₹400", 
      image: non 
    },
    { 
      name: "South Indian Thali", 
      description: "An authentic spread including sambar, rasam, rice, papad, chutneys, and payasam.", 
      price: "₹350", 
      image: souththali 
    },
    { 
      name: "Bengali Thali", 
      description: "A flavorful platter with luchi, aloo dum, shorshe maach, and sweet mishti doi.", 
      price: "₹450", 
      image: bengali 
    },
    { 
      name: "56 Bhog Thali", 
      description: "A grand feast offering a variety of dishes including dal, sabzi, desserts, and more.", 
      price: "₹450", 
      image: indian56 
    },
  ],
  
  Other: [
    { 
      name: "Pani Puri", 
      description: "Crispy puris filled with spicy flavored water, tangy tamarind chutney, and chickpeas.", 
      price: "₹50", 
      image: purip 
    },
    { 
      name: "Dahi Bhalla", 
      description: "Soft lentil dumplings soaked in creamy yogurt and topped with tangy chutneys and spices.", 
      price: "₹80", 
      image: dahi 
    },
    { 
      name: "Naan", 
      description: "Soft and fluffy Indian flatbread brushed with butter, perfect for curries.", 
      price: "₹30", 
      image: garlic 
    },
    { 
      name: "Chaat Platter", 
      description: "An assortment of street food delights like samosa chaat and aloo tikki, packed with flavors.", 
      price: "₹150", 
      image: chaat 
    },
    { 
      name: "Gulab Jamun", 
      description: "Soft and syrupy milk-based dumplings served warm or chilled as a delightful dessert.", 
      price: "₹200", 
      image: jamun 
    },
    { 
      name: "Jeera Chawal", 
      description: "Aromatic basmati rice tempered with cumin seeds, perfect as a side or main dish.", 
      price: "₹180", 
      image: jeera 
    },
  ],
  
};


const MenuBody = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const dishes = menuData[activeCategory];
  const totalPages = Math.ceil(dishes.length / itemsPerPage);


  

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(0); // Reset to the first page when category changes
  };

  const displayedDishes = dishes.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const openModal = (dish) => {
    setSelectedDish(dish);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDish(null);
  };

  return (
    <div className="menu-body">
      <h1 style={{ fontSize: "5rem" }}>Menu</h1>
      <div className="menu-tabs">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {displayedDishes.map((dish, index) => (
          <div className="menu-item" key={index}>
            <img
              src={dish.image}
              alt={dish.name}
              className="menu-image"
              onClick={() => openModal(dish)}
            />
            <div className="menu-details">
              <h3 style={{ color: "orange" }}>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className="price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="next-button" onClick={() => setCurrentPage((prevPage) => (prevPage + 1) % totalPages)}>
          Next →
        </button>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedDish && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Dish Image"
          className="modal"
          overlayClassName="overlay"
        >
          <div className="modal-content">
            <img src={selectedDish.image} alt={selectedDish.name} className="modal-image" />
            <h3>{selectedDish.name}</h3>
            <p>{selectedDish.description}</p>
            <p className="price">{selectedDish.price}</p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MenuBody;