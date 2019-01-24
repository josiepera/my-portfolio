import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <div className="footer">

        <div className="contact">
          <a href="https://www.linkedin.com/in/josieperalta/" target="_blank"><img className="social-btn" id="linkedin" src="https://i.imgur.com/fgUY2Ts.png" alt="linkedin"/></a>
          <a href="https://github.com/josiepera" target="_blank"><img className="social-btn" id="github" src="https://i.imgur.com/QCvcF5n.png" alt="github"/></a>
          <a href="mailto:jperalta.henri@gmail.com" target="_blank"><img className="social-btn" id="email" src="https://i.imgur.com/qsoAXVB.png" alt="email"/></a>
        </div>
        <h3>© 2018 Josie Peralta</h3>
      </div>

    )
  }
}

export default Footer;
