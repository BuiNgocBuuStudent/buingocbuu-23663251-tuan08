import React, { useState } from 'react';

const SignUp = ({ onLoginClick, onSignUpSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSignUpSubmit) onSignUpSubmit();
  };

  return (
    <div className="signup-container">
      <h2>Sign up</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>First name</label>
            <input type="text" placeholder="Input first name" className="input-field" required />
          </div>
          <div className="input-group">
            <label>Last name</label>
            <input type="text" placeholder="Input last name" className="input-field" required />
          </div>
        </div>
        
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="example.email@gmail.com" className="input-field" required />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <div className="password-input-wrap">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter at least 8+ characters" 
              className="input-field" 
              required
              minLength={8}
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              ) : (
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <div className="checkbox-group">
          <input type="checkbox" id="terms" defaultChecked required />
          <label htmlFor="terms">
            <span>By signing up, I agree with the <a href="#terms">Terms of Use</a> & <a href="#privacy">Privacy Policy</a></span>
          </label>
        </div>
        
        <button type="submit" className="btn-primary">Sign up</button>
      </form>
      
      <div className="login-link">
        Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onLoginClick(); }}>Log in</a>
      </div>
      
      <div className="divider" style={{marginTop: '32px'}}>
        <span>OR</span>
      </div>
      
      <div className="social-circle-btns">
        <button className="btn-social-circle google" onClick={handleSubmit}>
          <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
             <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
          </svg>
        </button>
        <button className="btn-social-circle facebook" onClick={handleSubmit}>
           <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        </button>
        <button className="btn-social-circle apple" onClick={handleSubmit}>
           <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 1.56-.05 2.88.74 3.67 1.9-3.13 1.92-2.58 6.07.49 7.4-1.12 1.48-1.57 2.11-2.82 3.67zM12.03 7.25c-.15-2.54 1.87-4.7 4.29-5.07.43 2.72-2.14 4.88-4.29 5.07z"/>
            </svg>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
