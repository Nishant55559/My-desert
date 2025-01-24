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
    { name: "Aloo Paratha", description: "Indian flatbread stuffed with spiced mashed potatoes, served with butter and yogurt.", price: "₹120", image:alooph },
    { name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato filling, served with chutney and sambar.", price: "₹150", image: dosa },
    { name: "Idli & Vada Combo", description: "Steamed rice cakes and crispy lentil fritters, served with sambar and coconut chutney.", price: "₹100", image: idli },
    { name: "Poha", description: "Flattened rice cooked with onions, turmeric, and garnished with peanuts and coriander.", price: "₹80", image: poha },
    { name: "Puri Sabji", description: "Semolina cooked with veggies and tempered with mustard seeds and curry leaves.", price: "₹90", image:puri },
    { name: "Chole Bhature", description: "Spiced chickpea curry served with deep-fried bread.", price: "₹180", image: chole },
    { name: "Puri Aloo dum", description: "Spiced chickpea curry served with deep-fried bread.", price: "₹180", image: aloodum },
    { name: "Meethi ke Parathe", description: "Spiced chickpea curry served with deep-fried bread.", price: "₹180", image: methi },
  ],
  Starter: [
    { name: "Paneer Tikka", description: "Marinated cottage cheese cubes grilled to perfection with spices.", price: "₹250", image:panti },
    { name: "Onion Bhaji combo", description: "Crispy deep-fried fritters made with mixed vegetables and gram flour.", price: "₹150", image: onion },
    { name: "Chicken Tikka", description: "Tender chicken pieces marinated in yogurt and spices, cooked in a tandoor.", price: "₹300", image: ctikka },
    { name: "Samosa combo", description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.", price: "₹120", image: samosa },
    { name: "Hara Bhara Kebab", description: "Healthy and delicious patties made with spinach, peas, and spices.", price: "₹180", image: kebab },
    { name: "Missle Pav", description: "Spicy and crispy fried fish coated in a tangy batter.", price: "₹350", image:missel },
    { name: "Chicken Pakora", description: "Spicy and crispy fried fish coated in a tangy batter.", price: "₹350", image: cpakora },
    { name: "Pav Bhaji", description: "Spicy and crispy fried fish coated in a tangy batter.", price: "₹350", image: pavb },
  ],
  Main_Course: [
    { name: "Butter Chicken with nana", description: "Creamy tomato-based curry with tender chicken pieces, served with naan or rice.", price: "₹350", image: butterc },
    { name: "Paneer Tikka Masala", description: "Grilled paneer cubes cooked in rich, spiced gravy, served with roti or rice.", price: "₹300", image: pkm },
    { name: "Hyderabadi Biryani", description: "Flavorful rice cooked with aromatic spices and tender chicken or vegetables.", price: "₹250", image: biryani },
    { name: "Dal Makhani", description: "Creamy black lentil curry slow-cooked with butter and spices, served with naan.", price: "₹200", image: dal },
    { name: "Gobi Masala", description: "Soft and fresh whole wheat Indian bread cooked in a tandoor.", price: "₹30", image:gobi },
    { name: "Mutton Rogan Josh", description: "Spicy and tangy curry with tender fish, served with steamed rice.", price: "₹400", image: mutton },
    { name: "Bhindi Masala", description: "Spicy and tangy curry with tender fish, served with steamed rice.", price: "₹400", image: bhindi },
    { name: "Fish Curry", description: "Spicy and tangy curry with tender fish, served with steamed rice.", price: "₹400", image: fish },
  ],
  Drinks: [
    { name: "Masala Chai", description: "Traditional Indian tea brewed with spices and milk.", price: "₹40", image: chai },
    { name: "Mango Lassi", description: "Refreshing yogurt-based drink blended with mango pulp.", price: "₹120", image: mango },
    { name: "Filter Coffee", description: "South Indian-style strong and aromatic coffee.", price: "₹50", image: coffee },
    { name: "Fresh Lime Soda", description: "Sparkling soda with fresh lime and a hint of salt.", price: "₹80", image: soda },
    { name: "Jaljeera", description: "Spiced cumin drink with tangy and refreshing flavors.", price: "₹60", image: jaljeera },
    { name: "Badam Milk", description: "Chilled almond milk with saffron and cardamom.", price: "₹150", image:badam },
    { name: "kit kat shake", description: "Fresh and natural coconut water served chilled.", price: "₹50", image: shake },
    { name: "Rose Sharbat", description: "Sweet rose-flavored drink, served cold.", price: "₹100", image: gulab },
  ],
  Thali: [
    { name: "Vegetarian Thali", description: "A wholesome platter with dal, sabzi, roti, rice, raita, and dessert.", price: "₹300", image: veg },
    { name: "Non-Vegetarian Thali", description: "A hearty meal with chicken curry, dal, roti, rice, and dessert.", price: "₹400", image: non },
    { name: "South Indian Thali", description: "A flavorful platter with sambar, rasam, rice, papad, and chutneys.", price: "₹350", image: souththali },
    { name: "Bengali Thali", description: "A royal platter with dal baati, churma, gatte ki sabzi, and more.", price: "₹450", image: bengali},
    { name: "56 Bhog Thali", description: "A royal platter with dal baati, churma, gatte ki sabzi, and more.", price: "₹450", image: indian56 },
  ],
  Other: [
    { name: "Pani Puri", description: "Crispy puris filled with spiced water and tangy tamarind chutney.", price: "₹50", image: purip },
    { name: "Dahi Bhalla", description: "Soft lentil dumplings topped with yogurt, chutneys, and spices.", price: "₹80", image: dahi },
    { name: "Naan", description: "Spiced vegetable mash served with buttery pav buns.", price: "₹120", image:garlic  },
    { name: "Chaat Platter", description: "A mix of popular street foods like samosa chaat and aloo tikki chaat.", price: "₹150", image: chaat },
    { name: "Gulab Jamun", description: "Comforting red kidney bean curry served with steamed rice.", price: "₹200", image: jamun },
    { name: "Jeera Chawal", description: "Gram flour and yogurt-based curry served with steamed rice.", price: "₹180", image: jeera },
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