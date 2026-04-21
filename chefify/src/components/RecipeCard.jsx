import React from 'react';

const RecipeCard = ({ item }) => {
  return (
    <div className="recipe-card">
      <img src={item.image} alt={item.title} className="card-img" />
      <div className="card-body">
        <div className="card-title-row">
           <h3 className="card-title">{item.title}</h3>
           <button className="btn-save" aria-label="Save Recipe">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
               </svg>
           </button>
        </div>
        <div className="card-time">{item.time} minutes</div>
      </div>
    </div>
  );
};

export default RecipeCard;
