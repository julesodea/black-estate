import React from 'react';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// CSS
import '../../App.css';
import './page.styles.scss';

function About() {
  return (
    <Router>
      <div className="App">
        <section>
          <h1>ABOUT!</h1>
        </section>
      </div>
    </Router>
  );
}

export default About;
