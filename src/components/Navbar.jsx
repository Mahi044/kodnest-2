import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/saved', label: 'Saved' },
    { path: '/digest', label: 'Digest' },
    { path: '/settings', label: 'Settings' },
    { path: '/proof', label: 'Proof' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">KodNest Premium</div>
        <div className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
