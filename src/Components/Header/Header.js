import React from 'react';
import './Header.scss'

function Header() {


  return(
    <div className="Header">
      <h1>Icon</h1>
      
      <div className="container cyan brackets">
      <a href="#link-about">
        The Writer
      </a>
      <a href="#link-projects">
        The Work
      </a>
      <a href="#link-contact">
        The Contacts
      </a>
      </div>
    </div>
  )
}

export default Header;


