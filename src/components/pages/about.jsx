import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';

// CSS

import './about.styles.scss';

function About() {
  return (
    <Router>
      <div className="">
        <div className="about-background" />
        <section>
          <div className="about-container">
            <h1 className="about-title">ABOUT US</h1>
            <p className="about-text">
              We’re set on making our wines true to the place they grow. The
              winemaking is simple - good estate grown fruit, organic &
              biodynamic, handpicked, vineyard derived yeasts, no additives or
              fining, minimal sulphur at bottling and where possible, no
              filtration. Then we have character.
            </p>
            <p className="about-text">
              <span>The Home Vineyard </span> is located 6 kilometres north east
              of the Waipara Junction, in the Omihi sub-district of Waipara
              Valley, North Canterbury. The slope is a north facing sedimentary
              clay fan on a gentle hill side slope. The soils are mainly Awapuni
              clay loam with calcium carbonate deposits.
            </p>
            <p className="about-text">
              <span>Damsteep Vineyard </span> (formally Spye) is located in the
              north east of Waipara Valley at the foot of the Omihi Saddle, 10km
              north of our Home Vineyard. Riesling and Pinot Noir grow here with
              vine density of more than 5000 vine per hectare.
            </p>
            <p className="about-text">
              <span>Netherwood </span> was planted by Russell Black and Daniel
              Schuster in 1986 at a vine density of 5000 vines per hectare.
              Netherwood’s soils are classified as Waipara Greensand which is a
              green grey richly glauconitic sandstone.
            </p>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default About;
