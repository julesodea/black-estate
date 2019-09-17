import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// COMPONENTS
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
// PAGES
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Restaurant from './components/pages/restaurant';
import Store from './components/pages/store';

// CSS
import './App.css';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/store" component={Store} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
