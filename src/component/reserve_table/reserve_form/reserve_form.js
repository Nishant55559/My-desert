import './reserve_form.css';

function ReserveForm() {
  return (
    <div className="custom-reserve-form-container">
      <h1 className="custom-reserve-form-title">Reservation</h1>
      <p className="custom-reserve-form-description">Book Your Table at Our Restaurant Easily!</p>
      <form className="custom-reserve-form">
        <div className="custom-reserve-form-group">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="custom-reserve-form-group">
          <input type="tel" placeholder="Phone" required />
          <select required>
            <option value="">Number of Persons</option>
            <option value="1">1 person</option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            <option value="4">4 persons</option>
            <option value="5">5 persons</option>
          </select>
        </div>
        <div className="custom-reserve-form-group">
          <input type="date" required />
          <input type="time" required />
        </div>
        <button type="submit" className="custom-reserve-form-button">Reserve Now</button>
      </form>
    </div>
  );
};

export default ReserveForm;
