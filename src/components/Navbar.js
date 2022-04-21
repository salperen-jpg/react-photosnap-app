import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import logo from '../images/shared/desktop/logo.svg';
import '../styles/navbar.scss';

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img className='.logo' src={logo} alt='logo' />
          </Link>

          <button className='btn toogle-btn' onClick={toggleSidebar}>
            <span
              className={`${isSidebarOpen ? 'top top-active' : 'top'}`}
            ></span>
            <span
              className={`${isSidebarOpen ? 'bottom bottom-active' : 'bottom'}`}
            ></span>
          </button>
        </div>

        <ul className='nav-links'>
          <Link to='/stories'>
            <li>stories</li>
          </Link>
          <Link to='/features'>
            <li>features</li>
          </Link>
          <Link to='/pricing'>
            <li>pricing</li>
          </Link>
        </ul>
        <button className=' btn nav-rigth-btn'>get an invite</button>
      </div>
    </nav>
  );
};

export default Navbar;
