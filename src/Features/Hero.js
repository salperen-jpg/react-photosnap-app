import React from 'react';
import '../styles/Features/hero.scss';

const Hero = () => {
  return (
    <aside className='slider-container'>
      <div className='img-container'></div>
      <div className='slider-info-container'>
        <div className='slider-info-banner'>
          <div className='slider-info'>
            <h2>FEATURES</h2>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Hero;
