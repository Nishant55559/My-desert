
import "./customer_review.css";

const CustomerReview = () => {
  return (
    <div className="review-container">
      <h2 className="review-title">Customer Reviews</h2>
      <div className="review-content">
        <p className="review-text">
          "The flavors at Kadhai Kingdom are simply outstanding! From the first bite to the last,
          every dish is an explosion of authentic taste. Highly recommended!"
        </p>
        <div className="review-author">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Reviewer"
            className="review-avatar"
          />
          <h4>Rahul Jain</h4>
          <p>Food Blogger</p>
        </div>
      </div>
      <div className="review-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default CustomerReview;
