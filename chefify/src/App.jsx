import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import SignUp from './components/SignUp';
import FilterSidebar from './components/FilterSidebar';
import RecipeCard from './components/RecipeCard';
import Pagination from './components/Pagination';

import './App.css';
import './pages.css';

// Mock data
const RECIPES_DATA = [
  { id: 1, title: "Italian-style tomato salad", time: 14, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "Vegetable and shrimp spaghetti", time: 15, image: "https://images.unsplash.com/photo-1548943487-a2e4142f4c9c?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "Lotus delight salad", time: 20, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop" },
  { id: 4, title: "Snack cakes", time: 21, image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop" },
  { id: 5, title: "Salad with cabbage and shrimp", time: 32, image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=600&auto=format&fit=crop" },
  { id: 6, title: "Bean, shrimp, and potato salad", time: 32, image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=600&auto=format&fit=crop" },
  { id: 7, title: "Sunny-side up fried eggs", time: 32, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop" },
  { id: 8, title: "Lotus delight salad", time: 32, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop" },
];

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState('');

  const handleSearch = (term) => {
    setLastSearchTerm(term);
    if (!term.trim()) return;
    
    // Simulate search logic based on keyword
    if (term.toLowerCase().includes('salad')) {
      setCurrentView('search-results');
    } else {
      setCurrentView('search-empty');
    }
  };

  const handleLoginSubmit = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
    setCurrentView('home'); 
  };

  const handleSignUpSubmit = () => {
    setIsLoggedIn(true);
    setCurrentView('home');
  };

  return (
    <div className="app-container">
      <Header 
        isLoggedIn={isLoggedIn}
        onSearch={handleSearch}
        onLoginClick={() => setIsLoginOpen(true)} 
        onNavigate={(view) => setCurrentView(view)} 
      />

      {currentView === 'home' && (
        <main className="home-page">
          {isLoginOpen && (
            <div className="overlay">
              <LoginModal 
                onClose={() => setIsLoginOpen(false)} 
                onSignUpClick={() => {
                  setIsLoginOpen(false);
                  setCurrentView('signup');
                }}
                onLoginSubmit={handleLoginSubmit}
              />
            </div>
          )}
        </main>
      )}

      {currentView === 'signup' && (
        <main className="signup-page">
          <SignUp 
            onLoginClick={() => {
               setCurrentView('home');
               setIsLoginOpen(true);
            }} 
            onSignUpSubmit={handleSignUpSubmit}
          />
        </main>
      )}

      {currentView === 'search-empty' && (
        <main className="main-layout" style={{height: '953px'}}>
          <FilterSidebar />
          <div className="empty-state">
             <h2>Sorry, no results were found for "{lastSearchTerm}"</h2>
             <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-box-4982186-4152778.png" alt="No results" className="empty-illustration" width="200" />
             <p>We have all your Independence Day sweets covered.</p>
             <div className="suggestion-pills">
                <span className="pill pill-pink">Sweet Cake</span>
                <span className="pill pill-purple">Black Cake</span>
                <span className="pill pill-pink">Pozole Verde</span>
                <span className="pill pill-teal">Healthy food</span>
             </div>
          </div>
        </main>
      )}

      {currentView === 'search-results' && (
        <main className="main-layout" style={{minHeight: '1234px'}}>
          <FilterSidebar />
          <div className="content-area">
             <div className="content-header">
               <h2>Salad (32)</h2>
               <select className="sort-dropdown" defaultValue="A-Z">
                 <option>A-Z</option>
                 <option>Newest</option>
                 <option>Popular</option>
               </select>
             </div>
             <div className="recipe-grid">
               {RECIPES_DATA.map(item => (
                 <RecipeCard key={item.id} item={item} />
               ))}
             </div>
             <Pagination />
          </div>
        </main>
      )}

      {currentView === 'recipe-box' && (
        <main className="main-layout" style={{minHeight: '1179px', flexDirection: 'column'}}>
           <div className="breadcrumb">
             <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Home</a> &gt; <span className="current">Your Recipe Box</span>
           </div>
           
           <div className="profile-banner">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=300&auto=format&fit=crop" alt="Emma Gonzalez" className="profile-avatar" />
              <div className="profile-info">
                 <h1>Emma Gonzalez's Recipe Box</h1>
                 <p className="profile-desc">
                   Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                 </p>
                 <div className="profile-stats">
                   <div className="stat-text">6.5k Subscribers</div>
                   <button className="btn-share">Share <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg></button>
                 </div>
              </div>
           </div>

           <div className="tabs">
              <div className="tab active">Saved Recipes</div>
              <div className="tab">Folders</div>
              <div className="tab">Recipes by Genevieve</div>
           </div>

           <div className="content-area">
             <div className="recipe-grid">
               {RECIPES_DATA.map(item => (
                 <RecipeCard key={item.id} item={item} />
               ))}
             </div>
             <Pagination />
           </div>
        </main>
      )}

      {currentView === 'subscribe' && (
        <main className="subscribe-page" style={{background: 'white'}}>
           <div className="breadcrumb">
             <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Home</a> &gt; <span className="current">Subscribe</span>
           </div>

           <div className="subscribe-hero">
              <div className="hero-text">
                 <div className="premium-label">This recipe is exclusively available to subscribers</div>
                 <h1>Join now to access effortless, hassle-free recipes</h1>
                 <ul className="benefits-list">
                   <li>10,000+ recipes in our feature and test details</li>
                   <li>1 Plan for family, meal tickets and more</li>
                   <li>Personalized pro for to follow first</li>
                   <li>No more house heads to out better than they both recipe</li>
                 </ul>
                 
                 <div className="pricing">
                   <div className="price">0.25USD / Week</div>
                   <div className="price-sub">Billed as $12 every 4 weeks for the first year</div>
                 </div>

                 <button className="btn-primary" style={{maxWidth: '300px'}}>Subscribe Now</button>
                 <div className="cancel-note">Cancel at Time via My Info</div>
              </div>
              <div className="hero-image">
                 <img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" alt="Delicious spread" />
              </div>
           </div>

           <div className="all-access-section">
              <h2>An All Access subscription includes</h2>
              <div className="services-grid">
                 <div className="service-card">
                   <h3>Cooking</h3>
                   <p>Enjoy recipes, advice and inspiration for any occasion.</p>
                 </div>
                 <div className="service-card">
                   <h3>Wirecutter</h3>
                   <p>Explore independent reviews for thousands of products.</p>
                 </div>
                 <div className="service-card">
                   <h3>Games</h3>
                   <p>Unwind with Spelling Bee, Wordle, The Crossword.</p>
                 </div>
                 <div className="service-card">
                   <h3>The Athletic</h3>
                   <p>Discover in-depth, personalized sports journalism.</p>
                 </div>
              </div>
           </div>

           <div className="subscribe-bottom">
              <div className="logo">
                 <svg viewBox="0 0 24 24" fill="none" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.43 4 16.05 4 12C4 7.95 7.06 4.57 11 4.07V19.93ZM13 4.07C16.94 4.57 20 7.95 20 12C20 16.05 16.94 19.43 13 19.93V4.07Z" fill="currentColor"/>
                 </svg>
                 Chefify
              </div>
              <h2>Subscribe to Chefify Cooking only</h2>
              <p>Enjoy thousands of delicious recipes for every taste, plus advice and inspiration daily.</p>
              
              <label className="plan-option active">
                 <input type="radio" name="plan" defaultChecked />
                 <div>$2/month (Billed every 4 weeks)</div>
              </label>
              
              <label className="plan-option inactive">
                 <input type="radio" name="plan" />
                 <div>$20/year (Billed annually)</div>
              </label>

               <button className="btn-primary" style={{marginTop: '16px'}}>Subscribe Now</button>
               <div className="cancel-note" style={{color: 'var(--primary)'}}>Cancel at Time via My Info</div>
           </div>
        </main>
      )}

      {currentView !== 'home' && currentView !== 'signup' && <Footer />}
    </div>
  );
}

export default App;
