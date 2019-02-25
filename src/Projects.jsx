import React, { Component } from 'react';
import Header from './Header';
import ProjectsCards from './ProjectsCards'
import Footer from './Footer';

class Projects extends Component {
  render(){
    return(
      <div>

        <div className="projects">
          <h1>Projects</h1>
          <div className="line"></div>
          <ProjectsCards/>
        </div>

      </div>
    )
  }
}

export default Projects;
