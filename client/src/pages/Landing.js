import React from 'react';
import zodiacs from './Assets/landing/zodiacAll.png'

import '../';

const Landing = () => {
  return (

    <div className="row align-items-center">
      <div className="col pb-5">
        <img
          style={{ width: 650, height: 500, alignSelf: 'start' }}
          src={zodiacs}
          alt="zodiac"
        />
      </div>

      <div className="col pb-3" id="landing-pitch">
        <h1 id="landing-text">
          Are you ready to discover what is written in your stars?{' '}
        </h1>
      </div>
    </div>
  );
};

export default Landing;
