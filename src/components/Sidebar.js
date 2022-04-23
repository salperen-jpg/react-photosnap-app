import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import '../styles/sidebar.scss';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show' : 'sidebar '}`}>
      <ul className='sidebar-links'>
        <Link to='/stories' onClick={toggleSidebar}>
          <li>Stories</li>
        </Link>
        <Link to='/features' onClick={toggleSidebar}>
          <li>Features</li>
        </Link>
        <Link to='/pricing' onClick={toggleSidebar}>
          <li>Pricing</li>
        </Link>
      </ul>
      <button className='btn sidebar-btn'>get an invite</button>
    </aside>
  );
};

export default Sidebar;
