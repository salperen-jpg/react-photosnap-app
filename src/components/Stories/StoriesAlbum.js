import React from 'react';
import { useGlobalContext } from '../../context';
import SinglePhoto from '../HomeAlbum/SinglePhoto';
import '../../styles/Stories/storiesalbum.scss';

const StoriesAlbum = () => {
  const { slider } = useGlobalContext();
  console.log(slider);
  return (
    <section className='stories-slider'>
      {slider.map((photo) => {
        return <SinglePhoto key={photo.id} {...photo} showDate={true} />;
      })}
    </section>
  );
};

export default StoriesAlbum;
