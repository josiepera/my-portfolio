import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
       <nav>
       <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Projects'>Projects</Link></li>
            <li><Link to='/about'>About Me</Link></li>
          </ul>
        </div>
        </nav>
    </header>

    )
}

export default Header;
