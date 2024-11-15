import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo192.png" alt="Logo" width="50px" height="50px" />
      </div>
      <div className="navbar-links">
        <a href="/location">Location</a>
        <a href="/blog">Blog</a>
        <a href='/home'>Home</a>
        <a onClick={() => localStorage.clear()} href='/login'>Log out</a>
      </div>
    </nav>
  );
};

export default Navbar;