import React from 'react';
import analyze from './Assets/landing/analyze.png'
import balance from './Assets/landing/balance.png'
import believe from './Assets/landing/believe.png'
import create from './Assets/landing/create.png'
import feel from './Assets/landing/feel.png'
import perceive from './Assets/landing/perceive.png'
import think from './Assets/landing/think.png'

import '../';

const Landing = () => {
  return (
    <div className="row align-items-center">
      <div className="col">
        <div class="gallery">
          <img src={analyze} alt="..." />
          <img src={balance} alt="..." />
          <img src={believe} alt="..." />
          <img src={create} alt="..." />
          <img src={feel} alt="..." />
          <img src={perceive} alt="..." />
          <img src={think} alt="..." />
        </div>
        {/* <img
          style={{ width: 700, height: 700, alignSelf: 'start' }}
          src={zodiac1}
          alt="zodiac"
        /> */}
      </div>

      <div className="col" id="landing-pitch">
        <h1 id="landing-text">
          Are you ready to discover what is written in your stars?{' '}
        </h1>
      </div>
    </div>
  );
};

export default Landing;
