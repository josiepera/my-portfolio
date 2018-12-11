import React, {Component} from 'react';


class ProjectsCards extends Component {
  render(){
  return (
    <>
      <div className="cards">
        <div className="top">

        <div className="card" id="hurdles-card">
            <img className="card-img" src="https://res.cloudinary.com/jperalta/image/upload/v1543948305/Screen_Shot_2018-12-04_at_1.31.21_PM.png" alt="Card image cap" />
              <div className="content">
                <p id="card-title">Hurdles</p>
                <p>Game written in Vanilla JS where the user has to clear hurdles by pressing the up keyboard up</p>
                <a href="https://josiepera.github.io/hurdles/" target="_blank"><button>Go to Game!</button></a>
              </div>
        </div>

        <div className="card" id="mellow-card">
            <img className="card-img" src="https://res.cloudinary.com/jperalta/image/upload/v1543978743/Screen_Shot_2018-12-04_at_9.58.28_PM.png" alt="Card image cap" />
              <div className="overlay"></div>
              <div className="content">
                <p id="card-title">Mellow Home</p>
                <p>App designed by UX and built by Josie Peralta</p>
                <a href="https://mellow-home.herokuapp.com/" target="_blank"><button>Go to Mellow Home</button></a>
              </div>
        </div>
        </div>

        <div className="bottom">

          <div className="card" id="airbnb-card">
            <img className="card-img" src="https://i.imgur.com/wLuhj2B.png" alt="Card image cap" />
              <div className="content">
                <p id="card-title">AirBnB</p>
                <p>Recreated the AirBnB with 3 other developers. For technologies we used React, Reactstrap, PostgreSQL, and Node.js</p>
                <a href="https://mad-donkey.herokuapp.com/" target="_blank"><button>Start Booking!</button></a>
              </div>
          </div>

          <div className="card" id="rep-card">
            <img className="card-img" src="https://i.imgur.com/pKYIAA3.png" alt="Card image cap" />
              <div className="content">
                <p id="card-title">Who Reps Me</p>
                <p>JavaScript Game that brings the nostalgia</p>
                <a href="https://josiepera.github.io/duck_hunt/" target="_blank"><button>Check it out!</button></a>
              </div>
          </div>

        </div>

      </div>
    </>
  );
}
};

export default ProjectsCards;
