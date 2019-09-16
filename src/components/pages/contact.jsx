import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS
import '../../App.css';
import './page.styles.scss';

function Contact() {
  return (
    <Router>
      <div className="App">
        <section>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">Horns</label>ls
          
        </section>
      </div>
    </Router>
  );
}

export default Contact;
