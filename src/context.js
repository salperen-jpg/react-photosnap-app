import React, { useContext, useState } from 'react';
import { sliderData } from './data';
import FeaturesData from './FeaturesData';
import { pricing } from './pricingData';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [slider, setSlider] = useState(sliderData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [features, setFeatures] = useState(FeaturesData);
  const [price, setPrice] = useState(pricing);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        slider,
        features,
        setIsSidebarOpen,
        price,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
