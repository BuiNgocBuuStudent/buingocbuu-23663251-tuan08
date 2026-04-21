import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col about-us">
          <h4>About Us</h4>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button className="btn-send">Send</button>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Learn More</h4>
          <ul>
            <li><a href="#">Our Cooks</a></li>
            <li><a href="#">See Our Features</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          
          <h4 style={{marginTop: '24px'}}>Shop</h4>
          <ul>
            <li><a href="#">Gift Subscription</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Recipes</h4>
          <ul>
            <li><a href="#">What to Cook This Week</a></li>
            <li><a href="#">Pasta</a></li>
            <li><a href="#">Dinner</a></li>
            <li><a href="#">Healthy</a></li>
            <li><a href="#">Vegetarian</a></li>
            <li><a href="#">Vegan</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-logo">
           <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z" fill="currentColor"/>
          </svg>
          Chefify
        </div>
        <div className="copyright">
          2023 Chefify Company &nbsp; | &nbsp; <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
