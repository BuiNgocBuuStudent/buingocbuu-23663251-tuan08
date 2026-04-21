import React from 'react';

const LoginModal = ({ onClose, onSignUpClick }) => {
  return (
    <div className="auth-modal login-modal">
      <div className="modal-image">
        <h2>"Embrace the art of cooking, where flavors come alive!"</h2>
      </div>
      
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>
        
        <h3>Login</h3>
        <p>Enter your email to log in.</p>
        
        <div className="input-group">
          <input type="email" placeholder="Enter your email" className="input-field" />
        </div>
        
        <button className="btn-primary">Continue</button>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <p className="disclaimer">
          By continuing, you agree to the updated <b>Terms of Sale</b>, <b>Terms of Service</b>, and <b>Privacy Policy</b>.
        </p>
        
        <div className="social-btns">
          <button className="btn-social">
             <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" />
             Continue with Google
          </button>
          <button className="btn-social">
            <svg viewBox="0 0 24 24" fill="#1877F2" width="20" height="20">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
          <button className="btn-social">
            <svg viewBox="0 0 24 24" fill="#000000" width="20" height="20">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.8 1.56-.05 2.88.74 3.67 1.9-3.13 1.92-2.58 6.07.49 7.4-1.12 1.48-1.57 2.11-2.82 3.67zM12.03 7.25c-.15-2.54 1.87-4.7 4.29-5.07.43 2.72-2.14 4.88-4.29 5.07z"/>
            </svg>
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
