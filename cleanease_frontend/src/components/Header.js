// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px' }}>
      <h1 style={{ fontSize: '2em', margin: '0' }}>CleanEase</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/register">Register</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
