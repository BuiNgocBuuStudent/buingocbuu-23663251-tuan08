import React from 'react';

const Header = ({ onLoginClick, onNavigate }) => {
  return (
    <header className="header">
      <div className="header-logo" onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z" fill="currentColor"/>
        </svg>
        Chefify
      </div>
      
      <div className="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#9095A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="#9095A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input type="text" placeholder="What would you like to cook?" />
      </div>

      <nav className="nav-links">
        <a href="#what-to-cook">What to cook</a>
        <a href="#recipes">Recipes</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#occasions">Occasions</a>
        <a href="#about-us">About Us</a>
      </nav>

      <div className="header-actions">
        <button className="btn-login" onClick={onLoginClick}>Login</button>
        <button className="btn-subscribe" onClick={() => onNavigate('signup')}>Subscribe</button>
      </div>
    </header>
  );
};

export default Header;
