import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Icon from '@material-ui/core/Icon'
import ScrollIntoView from 'react-scroll-into-view';
import Experience from './Experience';

//<button><Link to='/portfolio'>Explore Work</Link></button>

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

          <ScrollIntoView selector=".scrollto">
            <a className="container-arrow scroll-to">
                <span id="arrow">
                  <p>⌄</p>
                </span>
            </a>
          </ScrollIntoView>

        </div>
        <Experience/>

        <div class="projects"></div>
          <Projects/>


    </div>


      )
  }
}

export default Home;
