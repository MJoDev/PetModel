import React from 'react';
import './Footer.css'; // Importamos el archivo de estilo

const Footer = () => {
  return (
    <footer className="footer">
        <div>
            
        </div>
        <div className="footer-row">
            <div>About</div>
            <div>Locations</div>
            <div>Franchise With Us</div>
            <div>Partners</div>
            <div>About Us</div>
            <div>Make Fetch Happen!</div>
        </div>
        
        <div className="footer-row">
            <div>Resources</div>
            <div>Reviews</div>
            <div>Pet Resource Center</div>
            <div>Media Fact Sheet</div>
            <div>Blog</div>
            <div>News</div>
        </div>
        
        <div className="footer-row">
            <div>Gift Cards</div>
            <div>Services</div>
            <div>Franchise Login</div>
            <div>Terms Of Use</div>
            <div>Privacy Policy</div>
        </div>
        
        <div className="footer-row">
            <div>News Letter</div>
            <div>Sign up to receive the Fetch! Family Newsletter</div>
            <div className="zip-code-form">
            <input
                className="inputZip"
                type="text"
                pattern="[0-9]{5}"
                placeholder="Email Address"
            />
            <button className="btnZip">
                <svg className="zipIco" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2" id="Layer_2">
                    <path
                    d="M19,26a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L26.59,16l-8.3-8.29a1,1,0,0,1,1.42-1.42l9,9a1,1,0,0,1,0,1.42l-9,9A1,1,0,0,1,19,26Z"
                    />
                    <path d="M28,17H4a1,1,0,0,1,0-2H28a1,1,0,0,1,0,2Z" />
                </g>
                </svg>
            </button>
            </div>
        </div>
    </footer>
  );
};

export default Footer;