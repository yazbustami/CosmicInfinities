import React from 'react';
import zodiac from './Assets/Pictures/zodiacsigns.png';
import '../'

const Landing = () => {
  return (
    <div className="container" id='landing-container'>
      <div className="row" id='landing-row'>
        <div className="col center-image">
        <img style={{width: 550, height: 550, alignSelf: 'start' }}src={zodiac} alt="zodiac" />
        </div>
    
        <div className="col" id='landing-pitch'>
          
          <h1 id='landing-text'>Are you ready to discover what is written in your stars? </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
