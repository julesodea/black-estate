import React from 'react';
import { Link } from 'react-router-dom';
// import Arrow from '../svg/arrow.js'

// CSS

import './home.styles.scss';

function Home() {
  return (
    <div>
      <section>
        <div className='background' />
        <div className='contain'>
          <div>
            <p className='medium-two'>
              3 organic hillside vineyards on clay limestone soils in North
              Canterbury.
            </p>
          </div>
          <div>
            <p className='medium-three'>
              We're set on making our wines rue to the place they grow. The
              winemaking is simple good estate grown fruit, organic &
              biodynamic, handpicked, bineyard derived yeasts, no additives or
              fining, minimal sulphur at bottling and where possible, no
              filtration . Then we have character.
            </p>
          </div>
          <div className='container flex column j-c-b'>
            <h4>LOCATED AT</h4>
            <p className='secondary'>
              <a
                className='map'
                href='https://goo.gl/maps/E9et23PeTGW1EQpX8'
                target='_blank'
                rel='noopener noreferrer'
              >
                614 Omihi Road
              </a>
              Waipara Valley <br />
              New Zealand Visit our winery or order from our online store
            </p>
            <div className='links'>
              <Link className='button' to='/restaurant'>
                RESTAURANT
              </Link>
              <Link className='button' to='/store'>
                SHOP WINE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
