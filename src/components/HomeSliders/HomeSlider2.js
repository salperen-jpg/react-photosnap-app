import React from 'react';
import '../../styles/homeslider2.scss';

const HomeSlider2 = () => {
  return (
    <aside className='stories-container'>
      <div className='stories-img-container'></div>
      <div className='stories-info-container'>
        <div className='stories-inner-info-container'>
          <h2>BEAUTIFUL STORIES EVERY TIME</h2>
          <p>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <button className=' btn stories-btn'>VIEW THE STORIES</button>
        </div>
      </div>
    </aside>
  );
};

export default HomeSlider2;
