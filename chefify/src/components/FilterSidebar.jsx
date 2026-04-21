import React from 'react';

const FilterSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="filter-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
        FILTERS
      </div>
      
      <div className="filter-section">
        <div className="filter-title">
          Type
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>
        <div className="checkbox-grid">
          <label className="filter-checkbox"><input type="checkbox" /> Pan-fried</label>
          <label className="filter-checkbox"><input type="checkbox" /> Stir-fried</label>
          <label className="filter-checkbox"><input type="checkbox" defaultChecked /> Grilled</label>
          <label className="filter-checkbox"><input type="checkbox" defaultChecked /> Roasted</label>
          <label className="filter-checkbox"><input type="checkbox" /> Sauteed</label>
          <label className="filter-checkbox"><input type="checkbox" /> Baked</label>
          <label className="filter-checkbox"><input type="checkbox" /> Steamed</label>
          <label className="filter-checkbox"><input type="checkbox" /> Stewed</label>
        </div>
      </div>
      
      <div className="filter-section">
        <div className="filter-title">
          Time
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>
        <div className="slider-container">
          <div className="slider-labels">
             <span>30 minutes</span>
             <span>50 minutes</span>
          </div>
          <div className="slider-track">
            <div className="slider-fill"></div>
            <div className="slider-thumb" style={{left: '30%'}}></div>
            <div className="slider-thumb" style={{left: '80%'}}></div>
          </div>
        </div>
      </div>
      
      <div className="filter-section" style={{borderBottom: 'none', paddingBottom: 0}}>
        <div className="filter-title">
          Rating
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>
        
        <div className="rating-row">
          <input type="checkbox" />
          <div className="stars">★ ★ ★ ★ ★</div>
        </div>
        <div className="rating-row">
          <input type="checkbox" />
          <div className="stars">★ ★ ★ ★ <span className="faded">★</span></div>
        </div>
        <div className="rating-row">
          <input type="checkbox" defaultChecked />
          <div className="stars">★ ★ ★ <span className="faded">★ ★</span></div>
        </div>
        <div className="rating-row">
          <input type="checkbox" defaultChecked />
          <div className="stars">★ ★ <span className="faded">★ ★ ★</span></div>
        </div>
         <div className="rating-row">
          <input type="checkbox" defaultChecked />
          <div className="stars">★ <span className="faded">★ ★ ★ ★</span></div>
        </div>
      </div>
      
      <button className="btn-apply">Apply</button>
    </aside>
  );
};

export default FilterSidebar;
