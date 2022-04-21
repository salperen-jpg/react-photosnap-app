import React from 'react';
import HomeAlbum from '../components/HomeAlbum/HomeAlbum';
import HomeFeatures from '../components/HomeFeatures/HomeFeatures';
import HomeSlider from '../components/HomeSliders/HomeSlider';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeAlbum />
      <HomeFeatures />
    </>
  );
};

export default Home;
