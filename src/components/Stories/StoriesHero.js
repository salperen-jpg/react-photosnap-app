import React from 'react';
import '../../styles/Stories/storieshero.scss';

const StoriesHero = () => {
  return (
    <section className='stories-hero stories-main-container'>
      <div className='stories-inner-img-container'></div>
      <div className='stories-hero-info'>
        <span className='story-name'>LAST MONTH'S FEATURED STORY</span>
        <h2 className='main-name'>HAZY FULL MOON OF APPALACHIA</h2>
        <span className='creator'>
          March 2nd 2020 <strong>by John Appleseed</strong>
        </span>
        <p>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button type='button' className='btn stories-hero-btn'>
          read the story
        </button>
      </div>
    </section>
  );
};

export default StoriesHero;
