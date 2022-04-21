import React from 'react';
import '../../styles/homeslider1.scss';

const HomeSliderComp = () => {
  return (
    <aside className='slider-container'>
      <div className='img-container'></div>
      <div className='slider-info-container'>
        <div className='slider-info-banner'>
          <div className='slider-info'>
            <h2>CREATE AND SHARE YOUR PHOTO STORIES.</h2>
            <p>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </p>
            <button className='slider-btn'>get an invite</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HomeSliderComp;
