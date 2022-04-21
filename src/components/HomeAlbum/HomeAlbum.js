import React from 'react';
import { useGlobalContext } from '../../context';
import SinglePhoto from './SinglePhoto';
import '../../styles/homealbum.scss';
const HomeAlbum = () => {
  const { slider } = useGlobalContext();
  console.log(slider);
  return (
    <aside className='home-album'>
      {slider.slice(0, 4).map((photo) => {
        return <SinglePhoto key={photo.id} {...photo} showDate={false} />;
      })}
    </aside>
  );
};

export default HomeAlbum;
