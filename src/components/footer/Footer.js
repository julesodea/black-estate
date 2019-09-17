import React from 'react';
import './Footer.styles.scss';
import { Link } from 'react-router-dom';

function Footer() {
  const title = {
    fontWeight: '600',
    fontSize: '12px',
    color: 'rgb(75, 75, 75)'
  };
  return (
    <footer>
      <ul>
        <li>
          <Link style={title}>RESTAURANT</Link>
        </li>
        <li>
          <Link to="/contact">OUR FOOD</Link>
        </li>
        <li>
          <Link to="/about">AWARDS</Link>
        </li>
        <li>
          <Link to="/restaurant">REVIEWS</Link>
        </li>
        <li>
          <Link to="/store">EAT HERE</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link style={title}>WINE STORE</Link>
        </li>
        <li>
          <Link to="/contact">SHIPPING</Link>
        </li>
        <li>
          <Link to="/about">ORDERS</Link>
        </li>
        <li>
          <Link to="/restaurant">CONDITIONS</Link>
        </li>
        <li>
          <Link to="/store">DELIVERY & RETURNS</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link style={title}>BLACK ESTATE © 2019</Link>
        </li>
        <li>
          <Link to="/contact">PRIVACY POLICY</Link>
        </li>
        <li>
          <Link to="/about">TERMS & CONDITIONS</Link>
        </li>
        <li>
          <Link to="/restaurant">LIQUOR LICENSE</Link>
        </li>
        <li>
          <Link to="/store">VINEYARD</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
