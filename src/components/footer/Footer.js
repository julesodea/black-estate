import React from 'react';
import './Footer.styles.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <ul>
        <li className='title'>RESTAURANT</li>
        <li>
          <Link to='/contact'>OUR FOOD</Link>
        </li>
        <li>
          <Link to='/about'>AWARDS</Link>
        </li>
        <li>
          <Link to='/restaurant'>REVIEWS</Link>
        </li>
        <li>
          <Link to='/store'>EAT HERE</Link>
        </li>
      </ul>
      <ul>
        <li className='title'>WINE STORE</li>
        <li>
          <Link to='/contact'>SHIPPING</Link>
        </li>
        <li>
          <Link to='/about'>ORDERS</Link>
        </li>
        <li>
          <Link to='/restaurant'>CONDITIONS</Link>
        </li>
        <li>
          <Link to='/store'>DELIVERY & RETURNS</Link>
        </li>
      </ul>
      <ul>
        <li className='title'>BLACK ESTATE © 2019</li>
        <li>
          <Link to='/contact'>PRIVACY POLICY</Link>
        </li>
        <li>
          <Link to='/about'>TERMS & CONDITIONS</Link>
        </li>
        <li>
          <Link to='/restaurant'>LIQUOR LICENSE</Link>
        </li>
        <li>
          <Link to='/store'>VINEYARD</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
