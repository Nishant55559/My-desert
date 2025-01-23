
import React, { useState } from "react";
import "./menu_body.css";
import alooph from './alooph.jpg';
import dosa from './dosa.jpg';
import idli from './idli.jpg';
import poha from './poha.jpg';
import chole from './chole.jpg';
import puri from './puri.jpg';
import methi from './methi.jpg';
import aloodum from './aloodum.jpg';
import souththali from './souththali.jpg';
import Modal from "react-modal";

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
    { name: "Paneer Tikka", description: "Marinated cottage cheese cubes grilled to perfection with spices.", price: "₹250", image: "paneer-tikka.jpg" },
    { name: "Vegetable Pakora combo", description: "Crispy deep-fried fritters made with mixed vegetables and gram flour.", price: "₹150", image: "vegetable-pakora.jpg" },
    { name: "Chicken Tikka", description: "Tender chicken pieces marinated in yogurt and spices, cooked in a tandoor.", price: "₹300", image: "chicken-tikka.jpg" },
    { name: "Samosa combo", description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.", price: "₹120", image: "samosa-platter.jpg" },
    { name: "Hara Bhara Kebab", description: "Healthy and delicious patties made with spinach, peas, and spices.", price: "₹180", image: "hara-bhara-kebab.jpg" },
    { name: "Missle Pav", description: "Spicy and crispy fried fish coated in a tangy batter.", price: "₹350", image: "fish-amritsari.jpg" },
    { name: "Chicken Pakora", description: "Spicy and crispy fried fish coated in a tangy batter.", price: "₹350", image: "fish-amritsari.jpg" },

    { name: "Pav Bhaji", description: "Spicy and crispy fried fish coated in a tangy batter.", price: "₹350", image: "fish-amritsari.jpg" },
  ],
  Main_Course: [
    { name: "Butter Chicken with nana", description: "Creamy tomato-based curry with tender chicken pieces, served with naan or rice.", price: "₹350", image: "butter-chicken.jpg" },
    { name: "Paneer Tikka Masala", description: "Grilled paneer cubes cooked in rich, spiced gravy, served with roti or rice.", price: "₹300", image: "paneer-tikka.jpg" },
    { name: "Hyderabadi Biryani", description: "Flavorful rice cooked with aromatic spices and tender chicken or vegetables.", price: "₹250", image: "biryani.jpg" },
    { name: "Dal Makhani", description: "Creamy black lentil curry slow-cooked with butter and spices, served with naan.", price: "₹200", image: "dal-makhani.jpg" },
    { name: "Gobi Masala", description: "Soft and fresh whole wheat Indian bread cooked in a tandoor.", price: "₹30", image: "tandoori-roti.jpg" },
    { name: "Mutton Rogan Josh", description: "Spicy and tangy curry with tender fish, served with steamed rice.", price: "₹400", image: "fish-curry.jpg" },
    { name: "Bhindi Masala", description: "Spicy and tangy curry with tender fish, served with steamed rice.", price: "₹400", image: "fish-curry.jpg" },

    { name: "Fish Curry", description: "Spicy and tangy curry with tender fish, served with steamed rice.", price: "₹400", image: "fish-curry.jpg" },
  ],
  Drinks: [
    { name: "Masala Chai", description: "Traditional Indian tea brewed with spices and milk.", price: "₹40", image: "masala-chai.jpg" },
    { name: "Mango Lassi", description: "Refreshing yogurt-based drink blended with mango pulp.", price: "₹120", image: "mango-lassi.jpg" },
    { name: "Filter Coffee", description: "South Indian-style strong and aromatic coffee.", price: "₹50", image: "filter-coffee.jpg" },
    { name: "Fresh Lime Soda", description: "Sparkling soda with fresh lime and a hint of salt.", price: "₹80", image: "fresh-lime-soda.jpg" },
    { name: "Jaljeera", description: "Spiced cumin drink with tangy and refreshing flavors.", price: "₹60", image: "jaljeera.jpg" },
    { name: "Badam Milk", description: "Chilled almond milk with saffron and cardamom.", price: "₹150", image: "badam-milk.jpg" },
    { name: "kit kat shake", description: "Fresh and natural coconut water served chilled.", price: "₹50", image: "coconut-water.jpg" },
    { name: "Rose Sharbat", description: "Sweet rose-flavored drink, served cold.", price: "₹100", image: "rose-sharbat.jpg" },
  ],
  Thali: [
    { name: "Vegetarian Thali", description: "A wholesome platter with dal, sabzi, roti, rice, raita, and dessert.", price: "₹300", image: "veg-thali.jpg" },
    { name: "Non-Vegetarian Thali", description: "A hearty meal with chicken curry, dal, roti, rice, and dessert.", price: "₹400", image: "nonveg-thali.jpg" },
    { name: "South Indian Thali", description: "A flavorful platter with sambar, rasam, rice, papad, and chutneys.", price: "₹350", image: souththali },
    { name: "Bengali Thali", description: "A royal platter with dal baati, churma, gatte ki sabzi, and more.", price: "₹450", image: "rajasthani-thali.jpg" },
    { name: "56 Bhog Thali", description: "A royal platter with dal baati, churma, gatte ki sabzi, and more.", price: "₹450", image: "rajasthani-thali.jpg" },
  ],
  Other: [
    { name: "Pani Puri", description: "Crispy puris filled with spiced water and tangy tamarind chutney.", price: "₹50", image: "pani-puri.jpg" },
    { name: "Dahi Bhalla", description: "Soft lentil dumplings topped with yogurt, chutneys, and spices.", price: "₹80", image: "dahi-bhalla.jpg" },
    { name: "Naan", description: "Spiced vegetable mash served with buttery pav buns.", price: "₹120", image: "pav-bhaji.jpg" },
    { name: "Chaat Platter", description: "A mix of popular street foods like samosa chaat and aloo tikki chaat.", price: "₹150", image: "chaat-platter.jpg" },
    { name: "Gulab Jamun", description: "Comforting red kidney bean curry served with steamed rice.", price: "₹200", image: "rajma-chawal.jpg" },
    { name: "Jeera Chawal", description: "Gram flour and yogurt-based curry served with steamed rice.", price: "₹180", image: "kadhi-chawal.jpg" },
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

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(0); // Reset to the first page on category change
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
              <p className="price">{dish.price} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="next-button" onClick={handleNext}>
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


