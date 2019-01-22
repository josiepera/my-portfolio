import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Icon from '@material-ui/core/Icon'
import ScrollIntoView from 'react-scroll-into-view'


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

          <ScrollIntoView selector=".card-img">
            <a class="container-arrow scroll-to">
                <span id="arrow">
                  <p>⌄</p>
                </span>
            </a>
          </ScrollIntoView>

        </div>

        <div class="projects"></div>
          <Projects/>

    </div>


      )
  }
}

export default Home;
