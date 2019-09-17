import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS
import '../../App.css';
import './contact.styles.scss';

function Contact() {
  return (
    <Router>
      <div className="">
        <section>
          <div className="contact-background" />
          <div className="contact-container">
            <h1>CONTACT US</h1>
            <div className="card-container">
              <div>
                <div className="contact-card">
                  <h2>ADDRESS</h2>
                  <p>
                    614 Omihi Road Waipara Valley, <br /> New Zealand
                  </p>
                  <p>+64 3 314 6085</p>
                </div>
                <div className="contact-card">
                  <h2>EMAIL US</h2>
                  <p>Accommodation Booking</p>
                  <p>bookings@blackestate.co.nz</p>
                </div>
              </div>
              <div>
                <div className="contact-card">
                  <h2>TASTING ROOM</h2>
                  <p>03 314 6085</p>
                  <p>bookings@blackestate.co.nz</p>
                </div>
                <div className="contact-card">
                  <h2>OFFICE</h2>
                  <p>03 314 6086</p>
                  <p>wine@blackestate.co.nz</p>
                </div>
              </div>
              <div>
                <div className="contact-card">
                  <h2>MARKETING & SALES</h2>
                  <p>Address</p>
                  <p>penelope@blackestate.co.nz</p>
                </div>
                <div className="contact-card">
                  <h2>WINEMAKER</h2>
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
