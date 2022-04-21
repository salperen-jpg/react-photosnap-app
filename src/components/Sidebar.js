import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import '../styles/sidebar.scss';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show' : 'sidebar '}`}>
      <ul className='sidebar-links'>
        <Link to='/stories'>
          <li>Stories</li>
        </Link>
        <Link to='/features'>
          <li>Features</li>
        </Link>
        <Link to='/pricing'>
          <li>Pricing</li>
        </Link>
      </ul>
      <button className='btn sidebar-btn'>get an invite</button>
    </aside>
  );
};

export default Sidebar;
