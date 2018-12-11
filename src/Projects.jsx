import React, { Component } from 'react';
import Header from './Header';
import ProjectsCards from './ProjectsCards'

class Projects extends Component {
  render(){
    return(
      <div>
        <Header />
        <div className="projects">
          <h1>Portfolio</h1>
          <ProjectsCards/>
        </div>
      </div>
    )
  }
}

export default Projects;
