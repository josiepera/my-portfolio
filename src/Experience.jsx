import React, { Component } from 'react';
import Header from './Header';

class Experience extends Component {
  render(){
    return(
    <>
      <Header/>
      <div className="experience">
        <img className="profile-pic" src="https://media.licdn.com/dms/image/C4E03AQF6gjHIuKB4aA/profile-displayphoto-shrink_200_200/0?e=1550102400&v=beta&t=3aXKoT0ip8ffjs0d3G2EUbtTU4o-v9M8nIP3hJ1gTjY" alt="mug"/>
        <h1>Summary</h1>
        <p>I am a Web Developer who is passionate about delivering clients meaningful, tangible solutions that help improve the bottom line. Holding over 3 years experience in both sales and political campaigning, I am an expert in diagnosing the root cause of any problem and championing solutions that are mutually beneficial for all parties involved. I combine my prior client-facing experience with web development to create apps compatible for a diverse set of users. I am driven by my desire to improve people's’ lives through technology one line of code at a time. </p>
        <div className="contact">
          <a href="https://www.linkedin.com/in/josieperalta/" target="_blank"><img className="social-btn" id="linkedin" src="https://i.imgur.com/fgUY2Ts.png" alt="linkedin"/></a>
          <a href="https://github.com/josiepera" target="_blank"><img className="social-btn" id="github" src="https://i.imgur.com/QCvcF5n.png" alt="github"/></a>
          <a href="mailto:jperalta.henri@gmail.com" target="_blank"><img className="social-btn" id="email" src="https://i.imgur.com/qsoAXVB.png" alt="email"/></a>
        </div>
      </div>
    </>
    )
  }
}

export default Experience;
