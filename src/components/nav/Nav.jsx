import React from 'react';
import './Nav.styles.scss';
import { Link } from 'react-router-dom';

function Nav() {
  const title = {
    border: '3px solid rgb(27, 27, 27)',
    padding: '0.5rem 0.8rem',
    borderRadius: `1px`,
    fontSize: '22px',
    color: 'rgb(27, 27, 27)',
    fontWeight: '600'
  };
  return (
    <nav>
      <ul>
        <Link style={title} to="/" className="title">
          BLACK ESTATE
        </Link>
        <li>
          <Link to="/contact">CONTACT</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/restaurant">RESTAURANT</Link>
          <Link to="/store">STORE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
