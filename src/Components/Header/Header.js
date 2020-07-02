import React from 'react';
import './Header.scss'

function Header() {


  return(
    <div className="Header">
      <h1>Icon</h1>
      <a href="#link-about">
        <p>The Writer</p>
      </a>
      <a href="#link-projects">
        <p>The Work</p>
      </a>
      <a href="#link-contact">
        <p>The Contacts</p>
      </a>
    </div>
  )
}

export default Header;