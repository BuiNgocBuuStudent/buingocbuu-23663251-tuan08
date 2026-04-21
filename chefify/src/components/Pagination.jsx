import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination">
       <div className="page-item">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
       </div>
       <div className="page-item active">1</div>
       <div className="page-item">2</div>
       <div className="page-item">3</div>
       <div className="page-item">4</div>
       <div className="page-item dots">...</div>
       <div className="page-item">10</div>
       <div className="page-item">11</div>
       <div className="page-item">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
       </div>
    </div>
  );
};

export default Pagination;
