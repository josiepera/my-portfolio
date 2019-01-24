import React, { Component } from 'react';
import Header from './Header';
import ProjectsCards from './ProjectsCards'
import Footer from './Footer';

class Projects extends Component {
  render(){
    return(
      <div>
        <Header />
        <div className="projects">
          <h1>Portfolio</h1>
          <div className="line"></div>
          <ProjectsCards/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Projects;
