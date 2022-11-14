import React from 'react';
import analyze from './Assets/landing/analyze.png'
import balance from './Assets/landing/balance.png'
import believe from './Assets/landing/believe.png'
import create from './Assets/landing/create.png'
import feel from './Assets/landing/feel.png'
import perceive from './Assets/landing/perceive.png'
import think from './Assets/landing/think.png'
// import stars1 from './Assets/landing/stars1.png'
// import stars2 from './Assets/landing/stars2.png'
// import stars3 from './Assets/landing/stars3.png'
import zodiacs from './Assets/landing/zodiacAll.png'

import '../';

const Landing = () => {
  return (
      
    <div className="row align-items-center">
      {/* <div className="row flex-row">
        <div className="col-4">
          <img src={stars1} width="300px" height="200px" alt="stars" />
        </div>
        <div className="col-4">
        <img src={stars2} width="300px" height="200px"alt="stars" />
        </div>
        <div className="col-4">
        <img src={stars3} width="300px" height="200px" alt="stars" />
        </div>
      </div>   */}
      <div className="col pb-5">
        {/* <div class="gallery">
          <img src={analyze} alt="..." />
          <img src={balance} alt="..." />
          <img src={believe} alt="..." />
          <img src={create} alt="..." />
          <img src={feel} alt="..." />
          <img src={perceive} alt="..." />
          <img src={think} alt="..." />
        </div> */}
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
      {/* <div className='row flex-row'>
      <div className="col-4">
          <img src={stars1} width="300px" height="200px" alt="stars" />
        </div>
        <div className="col-4">
        <img src={stars2} width="300px" height="200px"alt="stars" />
        </div>
        <div className="col-4">
        <img src={stars3} width="300px" height="200px" alt="stars" />
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
