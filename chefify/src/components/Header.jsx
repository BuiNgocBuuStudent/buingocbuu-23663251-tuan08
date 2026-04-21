import React, { useState } from 'react';

const Header = ({ onLoginClick, onNavigate, isLoggedIn, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

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
        <input 
          type="text" 
          placeholder="What would you like to cook?" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearchSubmit}
        />
      </div>

      <nav className="nav-links">
        <a href="#what-to-cook">What to cook</a>
        <a href="#recipes" onClick={(e) => { e.preventDefault(); onNavigate('subscribe'); }}>Recipes</a>
        <a href="#ingredients">Ingredients</a>
        <a href="#occasions">Occasions</a>
        <a href="#about-us">About Us</a>
      </nav>

      <div className="header-actions">
        {!isLoggedIn ? (
          <>
            <button className="btn-login" onClick={onLoginClick}>Login</button>
            <button className="btn-subscribe" onClick={() => onNavigate('signup')}>Subscribe</button>
          </>
        ) : (
          <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
             <button className="btn-login" style={{background: '#FFE8EF', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px'}} onClick={() => onNavigate('recipe-box')}>
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                 </svg>
                 Your Recipe Box
             </button>
             <img 
               src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=100&auto=format&fit=crop" 
               alt="User Avatar" 
               style={{width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', cursor: 'pointer'}} 
               onClick={() => onNavigate('recipe-box')}
             />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
