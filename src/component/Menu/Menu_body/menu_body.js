import React, { useState } from "react";
import "./menu_body.css";

const menuData = {
  Breakfast: [
    { name: "Aloo Paratha", description: "Indian flatbread stuffed with spiced mashed potatoes, served with butter and yogurt.", price: "₹120", image: "aloo-paratha.jpg" },
    { name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato filling, served with chutney and sambar.", price: "₹150", image: "masala-dosa.jpg" },
    { name: "Idli & Vada Combo", description: "Steamed rice cakes and crispy lentil fritters, served with sambar and coconut chutney.", price: "₹100", image: "idli-vada.jpg" },
    { name: "Poha", description: "Flattened rice cooked with onions, turmeric, and garnished with peanuts and coriander.", price: "₹80", image: "poha.jpg" },
    { name: "Upma", description: "Semolina cooked with veggies and tempered with mustard seeds and curry leaves.", price: "₹90", image: "upma.jpg" },
    { name: "Chole Bhature", description: "Spiced chickpea curry served with deep-fried bread.", price: "₹180", image: "chole-bhature.jpg" },
  ],
  starter: [
    { 
      name: "Paneer Tikka", 
      description: "Marinated cottage cheese cubes grilled to perfection with spices.", 
      price: "₹250", 
      image: "paneer-tikka.jpg" 
    },
    { 
      name: "Vegetable Pakora", 
      description: "Crispy deep-fried fritters made with mixed vegetables and gram flour.", 
      price: "₹150", 
      image: "vegetable-pakora.jpg" 
    },
    { 
      name: "Chicken Tikka", 
      description: "Tender chicken pieces marinated in yogurt and spices, cooked in a tandoor.", 
      price: "₹300", 
      image: "chicken-tikka.jpg" 
    },
    { 
      name: "Samosa Platter", 
      description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.", 
      price: "₹120", 
      image: "samosa-platter.jpg" 
    },
    { 
      name: "Hara Bhara Kebab", 
      description: "Healthy and delicious patties made with spinach, peas, and spices.", 
      price: "₹180", 
      image: "hara-bhara-kebab.jpg" 
    },
    { 
      name: "Fish Amritsari", 
      description: "Spicy and crispy fried fish coated in a tangy batter.", 
      price: "₹350", 
      image: "fish-amritsari.jpg" 
    },
  ],
  
  Dinner: [
    { name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken pieces, served with naan or rice.", price: "₹350", image: "butter-chicken.jpg" },
    { name: "Paneer Tikka Masala", description: "Grilled paneer cubes cooked in rich, spiced gravy, served with roti or rice.", price: "₹300", image: "paneer-tikka.jpg" },
    { name: "Hyderabadi Biryani", description: "Flavorful rice cooked with aromatic spices and tender chicken or vegetables.", price: "₹250", image: "biryani.jpg" },
    { name: "Dal Makhani", description: "Creamy black lentil curry slow-cooked with butter and spices, served with naan.", price: "₹200", image: "dal-makhani.jpg" },
    { name: "Tandoori Roti", description: "Soft and fresh whole wheat Indian bread cooked in a tandoor.", price: "₹30", image: "tandoori-roti.jpg" },
    { name: "Fish Curry", description: "Spicy and tangy curry with tender fish, served with steamed rice.", price: "₹400", image: "fish-curry.jpg" },
  ],
};

const MenuBody = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

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

  return (
    <div className="menu-body">
      <h1 style={{fontSize:"5rem"}}>Menu</h1>
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
            <img src={dish.image} alt={dish.name} className="menu-image" />
            <div className="menu-details">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p className="price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="next-button" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default MenuBody;
