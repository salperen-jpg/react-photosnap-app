import React from 'react';
import { useGlobalContext } from '../../context';
import HomeFeature from './HomeFeature';
import '../../styles/homefeautures.scss';
import '../../styles/Features/features.scss';

const HomeFeatures = () => {
  const { features } = useGlobalContext();
  console.log(features);
  return (
    <section className='home-features'>
      <div className='home-features-center'>
        {features.slice(0, 3).map((icon) => {
          return <HomeFeature key={icon.id} {...icon} />;
        })}
      </div>
    </section>
  );
};

export default HomeFeatures;
