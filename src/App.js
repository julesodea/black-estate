import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
// PAGES
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Home from './components/pages/home';

// CSS
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
