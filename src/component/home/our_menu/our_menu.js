
import "./our_menu.css";

function OurMenu(){

    const starters = [
        { name: "Paneer Tikka", description: "Paneer / Yogurt / Spices", price: "Rs 180.0" },
        { name: "Samosa", description: "Potatoes / Peas / Spices", price: "Rs 180.0" },
        { name: "Aloo Tikki", description: "Potatoes / Chickpeas / Spices", price: "Rs 180.0" },
        { name: "Prawn Koliwada", description: "Prawns / Spices / Oil", price: "Rs 180.0" },
    ];
    

    const mainCourse = [
        { name: "Butter Chicken", description: "Chicken / Butter / Cream", price: "Rs 180.0" },
        { name: "Lamb Rogan Josh", description: "Lamb / Yogurt / Spices", price: "Rs 180.0" },
        { name: "Chole Bhature", description: "Chickpeas / Bread / Spices", price: "Rs 180.0" },
        { name: "Biryani", description: "Rice / Chicken / Spices", price: "Rs 180.0" },
    ];
    

    const drinks = [
        { name: "Masala Chai", description: "Tea / Spices / Milk", price: "Rs 180.0" },
        { name: "Lassi", description: "Yogurt / Sugar / Cardamom", price: "Rs 180.0" },
        { name: "Sweet Lime Soda", description: "Lime / Soda / Salt", price: "Rs 180.0" },
        { name: "Jaljeera", description: "Cumin / Mint / Lemon", price: "Rs 180.0" },
    ];
    

    const sweets = [
        { name: "Gulab Jamun", description: "Milk / Sugar Syrup", price: "Rs 180.0" },
        { name: "Ras Malai", description: "Milk / Saffron / Cardamom", price: "Rs 180.0" },
        { name: "Jalebi", description: "Flour / Sugar Syrup", price: "Rs 180.0" },
        { name: "Kheer", description: "Rice / Milk / Saffron", price: "Rs 180.0" },
    ];
    

  return (
    <div className="menu-container">
      <h1 className="menu-heading" style={{fontSize:"4rem"}}>Our Menus</h1>
      <div className="menu-sections">
        <div className="menu-section">
          <h3 className="section-title">Starters</h3>
          {starters.map((item, index) => (
            <div className="menu-item" key={index}>
              <div>
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
              </div>
              <p className="item-price">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="menu-section">
          <h3 className="section-title">Main Course</h3>
          {mainCourse.map((item, index) => (
            <div className="menu-item" key={index}>
              <div>
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
              </div>
              <p className="item-price">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="menu-section">
          <h3 className="section-title">Drinks</h3>
          {drinks.map((item, index) => (
            <div className="menu-item" key={index}>
              <div>
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
              </div>
              <p className="item-price">{item.price}</p>
            </div>
          ))}
        </div>
        <div className="menu-section">
          <h3 className="section-title">Sweets</h3>
          {sweets.map((item, index) => (
            <div className="menu-item" key={index}>
              <div>
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
              </div>
              <p className="item-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
