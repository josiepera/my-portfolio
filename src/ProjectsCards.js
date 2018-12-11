import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';

class ProjectsCards extends Component {
  render(){
  return (
  <>
  <div className="cards">
    <div className="top">
    <div className="hurdles-card">
      <Card>
        <CardImg top width="50%" src="https://res.cloudinary.com/jperalta/image/upload/v1543948305/Screen_Shot_2018-12-04_at_1.31.21_PM.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Hurdles</CardTitle>
          <CardSubtitle>Javascript Game</CardSubtitle>
          <a href="https://josiepera.github.io/hurdles/"><button>Go to Game!</button></a>
        </CardBody>
      </Card>
    </div>
    <div className="mellow-card">
      <Card>
        <CardImg top width="50%" src="https://res.cloudinary.com/jperalta/image/upload/v1543978743/Screen_Shot_2018-12-04_at_9.58.28_PM.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mellow Home</CardTitle>
          <CardSubtitle>App designed by UX and built by Josie Peralta</CardSubtitle>
          <a href="https://mellow-home.herokuapp.com/"><button>Go to Mellow Home</button></a>
        </CardBody>
      </Card>
    </div>
    </div>

    <div className="bottom">
    <div className="airbnb-card">
      <Card>
        <CardImg top width="50%" src="https://i.imgur.com/wLuhj2B.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>AirBnB</CardTitle>
          <CardSubtitle>Group Project built with 3 other Developers</CardSubtitle>
          <a href="https://mad-donkey.herokuapp.com/"><button>Start Booking!</button></a>
        </CardBody>
      </Card>
    </div>
    <div className="rep-card">
      <Card>
        <CardImg top width="60%" src="https://i.imgur.com/pKYIAA3.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Who Reps Me</CardTitle>
          <CardSubtitle>JavaScript Game that brings the nostalgia</CardSubtitle>
          <a href="https://josiepera.github.io/duck_hunt/"><button>Check it out!</button></a>
        </CardBody>
      </Card>
    </div>
    </div>

  </div>
  </>
  );
}
};

export default ProjectsCards;
