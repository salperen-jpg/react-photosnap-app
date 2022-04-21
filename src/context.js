import React, { useContext, useState } from 'react';
import { sliderData } from './data';
import FeaturesData from './FeaturesData';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [slider, setSlider] = useState(sliderData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [features, setFeatures] = useState(FeaturesData);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, toggleSidebar, slider, features }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
