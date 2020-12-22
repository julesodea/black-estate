import React from 'react';
import './Nav.styles.scss';
import { Link } from 'react-router-dom';

function Nav() {
  const title = {
    // border: '3px solid rgb(27, 27, 27)',
    padding: '0.5rem 0rem',
    borderRadius: `1px`,
    fontSize: '2rem',
    color: 'rgb(27, 27, 27)',
    fontWeight: '800'
  };
  return (
    <nav>
      <ul>
        <Link style={title} className="title" to="/" >
          BLACK ESTATE
        </Link>
        <li>
          <Link to="/about">ABOUT</Link>
          <Link to="/restaurant">RESTAURANT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/store">STORE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
