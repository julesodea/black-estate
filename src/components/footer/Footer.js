import React from 'react';
import './Footer.styles.scss';
import { Link } from 'react-router-dom';

function Footer() {
  const title = {
    fontSize: '11px',
    color: 'rgb(75, 75, 75)'
  };
  return (
    <footer>
      <ul>
        <li>
          <Link style={title}>RESTAURANT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/restaurant">RESTAURANT</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link style={title}>WINE STORE</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/restaurant">RESTAURANT</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link style={title}>BLACK ESTATE © 2019</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/restaurant">RESTAURANT</Link>
        </li>
        <li>
          <Link to="/store">STORE</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
