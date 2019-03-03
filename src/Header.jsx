import React from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';


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
          <div className="menulist">
            <li><ScrollIntoView selector=".home">Home</ScrollIntoView></li>
            <li><ScrollIntoView selector=".scrollto">About Me</ScrollIntoView></li>
            <li><ScrollIntoView selector="#rep-card">Projects</ScrollIntoView></li>
            <li><ScrollIntoView selector=".footer">Contact Me</ScrollIntoView></li>
          </div>
          </ul>
        </div>
        </nav>
    </header>

    )
}

export default Header;
