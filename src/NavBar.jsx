import React, { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//import './App.css'

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    //setIsSidebarOpen(true)
  };

  return (
    <div>
      <div className='header'>
        <div className='site-logo'>
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div className='header-items'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Category</a></li>
          </ul>
        </div>
        <div className='menu-icon' onClick={toggleSidebar}>
          <img src="/assets/images/icon-menu.svg" alt="icon-menu" />
        </div>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className='close-button' onClick={toggleSidebar}><img src="/assets/images/icon-menu-close.svg" alt="" /></button>
        <ul>
          <li><a sty href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Category</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
