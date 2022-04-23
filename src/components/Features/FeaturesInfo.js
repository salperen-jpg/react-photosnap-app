import React from 'react';
import { useGlobalContext } from '../../context';
import HomeFeature from '../../components/HomeFeatures/HomeFeature';

const FeaturesInfo = () => {
  const { features } = useGlobalContext();
  return (
    <section className='features-icon'>
      <div className='features-center'>
        {features.map((icon) => {
          return <HomeFeature key={icon.id} {...icon} />;
        })}
      </div>
    </section>
  );
};

export default FeaturesInfo;
