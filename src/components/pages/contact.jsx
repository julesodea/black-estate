import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// CSS

import './contact.styles.scss';

function Contact() {
  return (
    <Router>
      <div className=''>
        <section>
          <div className='contact-background' />
          <div className='contact-container'>
            <h1>CONTACT US</h1>
            <div className='card-container'>
              <div>
                <div className='contact-card'>
                  <h3>ADDRESS</h3>
                  <p>
                    614 Omihi Road Waipara Valley, <br /> New Zealand
                  </p>
                  <p>+64 3 314 6085</p>
                </div>
                <div className='contact-card'>
                  <h3>EMAIL US</h3>
                  <p>Accommodation Booking</p>
                  <p>bookings@blackestate.co.nz</p>
                </div>
              </div>
              <div>
                <div className='contact-card'>
                  <h3>TASTING ROOM</h3>
                  <p>03 314 6085</p>
                  <p>bookings@blackestate.co.nz</p>
                </div>
                <div className='contact-card'>
                  <h3>OFFICE</h3>
                  <p>03 314 6086</p>
                  <p>wine@blackestate.co.nz</p>
                </div>
              </div>
              <div>
                <div className='contact-card'>
                  <h3>MARKETING & SALES</h3>
                  <p>Address</p>
                  <p>penelope@blackestate.co.nz</p>
                </div>
                <div className='contact-card'>
                  <h3>WINEMAKER</h3>
                  <p>027 777 0631</p>
                  <p>nicolas@blackestate.co.nz</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default Contact;
