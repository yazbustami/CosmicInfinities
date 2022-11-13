import React from 'react';
// import zodiac from './Assets/Pictures/zodiacsigns.png';
import zodiac1 from './Assets/Pictures/zodiac1.png';
import '../';

const Landing = () => {
  return (
    <div className="row align-items-center">
      <div className="col center-image">
        <img
          style={{ width: 600, height: 600, alignSelf: 'start' }}
          src={zodiac1}
          alt="zodiac"
        />
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
