import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Form from '../form/form';
// CSS

import './restaurant.styles.scss';

function Restaurant() {
  return (
    <Router>
      <div className="">
        <div className="restaurant-background" />
        <section>
          <div className="restaurant-container">
            <h1>RESTAURANT</h1>
            <p className="restaurant-text">
              Our Home Vineyard, one of our three organic, hillside vineyards.
              We’re set on expressing the true character of each of our Home,
              Netherwood and Damsteep vineyards. That means healthy organic
              grapes, vineyard derived yeast, no additives or fining, minimal
              sulphur at bottling and where possible, no filtration. As for the
              food we serve with our wine, we know where it grows, mostly in
              North Canterbury, and we know the growers and their patches and
              some useful foraging spots. Our growers keep us in tune with
              what’s in season and provide us with the freshest produce, being
              so close. We know that no sprays have been used to grow the
              vegetables and fruit, and the animals were free range and well
              looked after.
            </p>
            <p className="restaurant-text">
              We're Winery Restaurant of the Year and now have two hats with
              Cuisine Good Food Awards. <br />
             
            </p>
            <a
                href="http://www.blackestate.co.nz/media/uploads/2018_08/Online_Menu_03_Aug.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Menu Here
              </a>
          </div>
          <Form />
        </section>
      </div>
    </Router>
  );
}

export default Restaurant;
