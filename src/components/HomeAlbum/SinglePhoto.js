import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/singlePhoto.scss';

const SinglePhoto = ({
  name,
  creator,
  date,
  img: { mobile, desktop },
  showDate,
}) => {
  console.log(showDate);
  return (
    <Link to='/stories'>
      <div className='single-photo'>
        <div className='sing-photo-img-container'>
          <img src={desktop} alt='' />
        </div>

        <div className='info'>
          {showDate && <span className='date'>{date}</span>}
          <h3>{name}</h3>
          <hr />
          <p>by {creator}</p>
        </div>
      </div>
    </Link>
  );
};

export default SinglePhoto;
