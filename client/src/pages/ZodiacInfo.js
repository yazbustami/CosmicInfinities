import React from 'react';
import aquarius from './Assets/cardHeaders/aquariusbd.png';
import aries from './Assets/cardHeaders/ariesbd.png';
import cancer from './Assets/cardHeaders/cancerbd.png';
import capricorn from './Assets/cardHeaders/capribd.png';
import gemini from './Assets/cardHeaders/geminibd.png';
import leo from './Assets/cardHeaders/leobd.png';
import libra from './Assets/cardHeaders/librabd.png';
import pisces from './Assets/cardHeaders/piscesbd.png';
import sagittarius from './Assets/cardHeaders/sagittbd.png';
import scorpio from './Assets/cardHeaders/scorpiobd.png'
import taurus from './Assets/cardHeaders/taurusbd.png';
import virgo from './Assets/cardHeaders/virgobd.png';
// import '../' the path 

const ZodiacInfo = () => {
  return (
    <div className="container" id='landing-container'>
      <div className="row" id='zodiac-info'>     
          <h4 id='landing-text'>Discover what is written in your stars! </h4>
          <div className="row row-cols-1 row-cols-md-4">
  <div className="col mb-4">
    <div className="card">
      <img src={aries} className="card-img-top" alt="aries" />
      <div className="card-body">
        <h5 className="card-title">Aries</h5>
        <p className="card-text">March 21 - April 19</p>
        <p className="card-text">The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={taurus} className="card-img-top" alt="Taurus"/>
      <div className="card-body">
        <h5 className="card-title">Taurus</h5>
        <p className="card-text">April 20 - May 20</p>
        <p className="card-text">What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={gemini} className="card-img-top" alt="Gemini"/>
      <div className="card-body">
        <h5 className="card-title">Gemini</h5>
        <p className="card-text">May 21 - June 20</p>
        <p className="card-text">Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={cancer} className="card-img-top" alt="Cancer"/>
      <div className="card-body">
        <h5 className="card-title">Cancer</h5>
        <p className="card-text">June 21 - July 22</p>
        <p className="card-text">Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!</p>
      </div>
    </div>
  </div>
</div>

<div className="row row-cols-1 row-cols-md-4">
  <div className="col mb-4">
    <div className="card">
      <img src={leo} className="card-img-top" alt="Leo"/>
      <div className="card-body">
        <h5 className="card-title">Leo</h5>
        <p className="card-text">July 23 - August 22</p>
        <p className="card-text">Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      
    <img src={virgo} className="card-img-top" alt="Virgo"/>
      <div className="card-body">
        <p className="card-text">August 23 - September 22</p>
        <p className="card-text">You know the expression, if you want something done, give it to a busy person? Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isnt afraid to improve skills through diligent and consistent practice.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={libra} className="card-img-top" alt="Libra"/>
      <div className="card-body">
        <h5 className="card-title">Libra</h5>
        <p className="card-text">September 23 - October 22</p>
        <p className="card-text">Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={scorpio} className="card-img-top" alt="Scorpio"/>
      <div className="card-body">
        <h5 className="card-title">Scorpio</h5>
        <p className="card-text">October 23 - November 21</p>
        <p className="card-text">Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={sagittarius} className="card-img-top" alt="Sagittarius"/>
      <div className="card-body">
        <h5 className="card-title">Sagittarius</h5>
        <p className="card-text">November 22 - December 21</p>
        <p className="card-text">Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={capricorn} className="card-img-top" alt="Capricorn"/>
      <div className="card-body">
        <h5 className="card-title">Capricorn</h5>
        <p className="card-text">December 22 - January 19</p>
        <p className="card-text">What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={aquarius} className="card-img-top" alt="Aquarius"/>
      <div className="card-body">
        <h5 className="card-title">Aquarius</h5>
        <p className="card-text">January 20 - February 18</p>
        <p className="card-text">Despite the aqua in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place.</p>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={pisces} className="card-img-top" alt="Pisces"/>
      <div className="card-body">
        <h5 className="card-title">Pisces</h5>
        <p className="card-text">February 19 - March 20</p>
        <p className="card-text">If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that is because it is the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality.</p>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
   
  );
};

export default ZodiacInfo;