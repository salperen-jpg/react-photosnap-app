import React from 'react';
import '../../styles/Pricing/singleplan.scss';

const SinglePlan = ({ category, exp, price, specialStyle }) => {
  return (
    <article
      className={`${specialStyle ? 'single-plan black-box' : 'single-plan'}`}
    >
      <div className='price-left-side'>
        <h2 className='category'>{category}</h2>
        <p>{exp}</p>
        <span className='price'>${price.toFixed(2)}</span>
        <span className='price-interval'>per month</span>
        <button className='btn price-btn'>pick plan</button>
      </div>
      <div className='rigth-side'>
        <div>
          <span className='price price-right-side'>${price.toFixed(2)}</span>
          <span className='price-interval'>per month</span>
        </div>
      </div>
    </article>
  );
};

export default SinglePlan;
