import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

// CSS

import './store.styles.scss';

function Store() {
  return (
    <Router>
      <div className="App">
        <section className="store-section">
          <h1>ONLINE STORE</h1>
          <h4>Store is current under construction</h4>
        </section>
      </div>
    </Router>
  );
}

export default Store;
