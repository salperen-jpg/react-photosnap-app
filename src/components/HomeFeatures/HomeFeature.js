import React from 'react';
import '../../styles/homefeature.scss';

const HomeFeature = ({ icon, featureTitle: title, featureText: exp }) => {
  return (
    <article className='home-feature'>
      <span className='home-icons'>{icon}</span>
      <span className='title'>{title}</span>
      <p>{exp}</p>
    </article>
  );
};

export default HomeFeature;
