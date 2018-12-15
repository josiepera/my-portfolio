import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <Header/>
        <div className="home">
          <div className="title">
            <h1>Josie Peralta</h1>
            <p>Web Developer</p>
            <button><Link to='/portfolio'>Explore Work</Link></button>
          </div>
        </div>
    </div>


      )
  }
}

export default Home;
