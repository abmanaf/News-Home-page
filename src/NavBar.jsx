import React from 'react'


function NavBar() {
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
            <div className='menu-icon'>
                <img src="/assets/images/icon-menu.svg" alt="icon-menu" />
            </div>
        </div>
     </div>
  )
}

export default NavBar