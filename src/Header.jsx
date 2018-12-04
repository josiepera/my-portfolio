import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
       <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Experience'>Experience</Link></li>
          <li><Link to='/Projects'>Projects</Link></li>
        </ul>
      </nav>
    </header>

    )
}

export default Header;
