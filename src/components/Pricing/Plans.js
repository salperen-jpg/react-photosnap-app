import React from 'react';
import { useGlobalContext } from '../../context';
import SinglePlan from './SinglePlan';
import '../../styles/Pricing/plans.scss';
const Plans = () => {
  const { price } = useGlobalContext();
  return (
    <section className='plans'>
      <div className='btn-container'>
        <span>Monthly</span>
        {/* <span>Monthly</span> */}
        <span>Yearly</span>
      </div>
      <div className='plans-center'>
        <div className='plans-inner-container'>
          {price.map((single) => {
            return <SinglePlan key={single.id} {...single} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Plans;
