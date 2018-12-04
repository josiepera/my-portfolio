import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';

class ProjectsCards extends Component {
  render(){
  return (
    <div>
      <Card>
        <CardImg top width="80%" src="https://res.cloudinary.com/jperalta/image/upload/v1543948305/Screen_Shot_2018-12-04_at_1.31.21_PM.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Hurdles</CardTitle>
          <CardSubtitle>Javascript Game</CardSubtitle>
          <a href="https://josiepera.github.io/hurdles/"><button>Go to Game!</button></a>
        </CardBody>
      </Card>
    </div>
  );
}
};

export default ProjectsCards;
