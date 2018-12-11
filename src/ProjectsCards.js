import React, {Component} from 'react';


class ProjectsCards extends Component {
  render(){
  return (
    <>
      <div className="cards">
        <div className="top">

        <div className="hurdles-card">
            <img className="card-img" src="https://res.cloudinary.com/jperalta/image/upload/v1543948305/Screen_Shot_2018-12-04_at_1.31.21_PM.png" alt="Card image cap" />
              <p>Hurdles</p>
              <p>Javascript Game</p>
              <a href="https://josiepera.github.io/hurdles/"><button>Go to Game!</button></a>
        </div>

        <div className="mellow-card">
            <img className="card-img" src="https://res.cloudinary.com/jperalta/image/upload/v1543978743/Screen_Shot_2018-12-04_at_9.58.28_PM.png" alt="Card image cap" />
              <p>Mellow Home</p>
              <p>App designed by UX and built by Josie Peralta</p>
              <a href="https://mellow-home.herokuapp.com/"><button>Go to Mellow Home</button></a>
        </div>
        </div>

        <div className="bottom">
        <div className="airbnb-card">
            <img className="card-img" src="https://i.imgur.com/wLuhj2B.png" alt="Card image cap" />
              <p>AirBnB</p>
              <p>Group Project built with 3 other Developers</p>
              <a href="https://mad-donkey.herokuapp.com/"><button>Start Booking!</button></a>
        </div>

        <div className="rep-card">

            <img className="card-img" src="https://i.imgur.com/pKYIAA3.png" alt="Card image cap" />
              <p>Who Reps Me</p>
              <p>JavaScript Game that brings the nostalgia</p>
              <a href="https://josiepera.github.io/duck_hunt/"><button>Check it out!</button></a>
        </div>
        </div>

      </div>
    </>
  );
}
};

export default ProjectsCards;
