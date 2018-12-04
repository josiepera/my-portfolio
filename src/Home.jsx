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
          </div>
        </div>
    </div>


      )
  }
}

export default Home;
