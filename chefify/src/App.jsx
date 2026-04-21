import { useState } from 'react';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'signup'
  const [isLoginOpen, setIsLoginOpen] = useState(true); // Open by default based on image 1

  return (
    <div className="app-container">
      <Header 
        onLoginClick={() => setIsLoginOpen(true)} 
        onNavigate={(view) => setCurrentView(view)} 
      />

      {currentView === 'home' && (
        <main className="home-page">
          {/* Background is handled in CSS */}
          {isLoginOpen && (
            <div className="overlay">
              <LoginModal 
                onClose={() => setIsLoginOpen(false)} 
                onSignUpClick={() => {
                  setIsLoginOpen(false);
                  setCurrentView('signup');
                }}
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
          />
        </main>
      )}
    </div>
  );
}

export default App;
