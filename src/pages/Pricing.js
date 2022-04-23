import React from 'react';
import PricingHero from '../components/Pricing/PricingHero';
import LastHero from '../components/Features/LastHero';
import Plans from '../components/Pricing/Plans';
const Pricing = () => {
  return (
    <>
      <PricingHero />
      <Plans />
      <LastHero />
    </>
  );
};

export default Pricing;
