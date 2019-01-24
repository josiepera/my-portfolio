import React, { Component } from 'react';
import Header from './Header';


// <div className="contact">
//   <a href="https://www.linkedin.com/in/josieperalta/" target="_blank"><img className="social-btn" id="linkedin" src="https://i.imgur.com/fgUY2Ts.png" alt="linkedin"/></a>
//   <a href="https://github.com/josiepera" target="_blank"><img className="social-btn" id="github" src="https://i.imgur.com/QCvcF5n.png" alt="github"/></a>
//   <a href="mailto:jperalta.henri@gmail.com" target="_blank"><img className="social-btn" id="email" src="https://i.imgur.com/qsoAXVB.png" alt="email"/></a>
// </div>

class Experience extends Component {
  render(){
    return(
    <>


      <div className="exp-page">
      <div className="experience">
        <h1>About Me</h1>
        <div className="line"></div>


        <img className="profile-pic" src="https://res.cloudinary.com/jperalta/image/upload/v1548063345/LRG__DSC5941.jpg" alt="mug"/>
        <div className="scrollto"></div>
        <p>I am a Web Developer who is passionate about delivering clients meaningful, tangible solutions that help improve the bottom line. Holding over 3 years experience in both sales and political campaigning, I am an expert in diagnosing the root cause of any problem and championing solutions that are mutually beneficial for all parties involved. I combine my prior client-facing experience with web development to create apps compatible for a diverse set of users. I am driven by my desire to improve people's’ lives through technology one line of code at a time. </p>
      </div>

      <div className="skills">
      <h2>Skills</h2>
      <div className="line"></div>
        <div>
          <img className="css3-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png" alt="css3"/>
          <img className="html-logo" src="https://i.imgur.com/yaljWaU.png" alt="html5"/>
          <img className="react-logo" src="https://i.imgur.com/JOcbsmm.png" alt="react"/>
          <img className="node-logo" src="https://i.imgur.com/SrJsmDN.png" alt="node"/>
       </div>
       <div>
        <img className="express-logo" src="http://amt.in/img/services/express.png" alt="express"/>
        <img className="postres-logo" src="https://www.logolynx.com/images/logolynx/7f/7f8f2aa38336184ff88630f8bd7797bc.png" alt="postgres"/>
        <img className="jq-logo" src="http://pluspng.com/img-png/jquery-logo-png--512.png" alt="jquery"/>
      </div>
      </div>

      </div>
    </>
    )
  }
}

export default Experience;
