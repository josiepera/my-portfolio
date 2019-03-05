import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Icon from '@material-ui/core/Icon'
import ScrollIntoView from 'react-scroll-into-view';
import Experience from './Experience';
import Contact from './Contact';

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

          <div>
            <ScrollIntoView selector=".scrollto">
              <a className="container-arrow scroll-to">
                  <span id="arrow">
                    <p>⌄</p>
                  </span>
              </a>
            </ScrollIntoView>
          </div>

        </div>
        <Experience/>

        <div className="projects"></div>
          <Projects/>

        <Footer/>

    </div>


      )
  }
}

export default Home;
