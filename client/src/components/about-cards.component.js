import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class AboutCards extends Component {
    render(){
        return(
            <div className="cardContainer">
                <CardGroup className="allCards" >
                    <div  className="col-md-3">
                    <Card className="indiCard">
                        <Card.Img variant="top" src="../images/Sherri.jpg" />
                        <Card.Body>
                        <Card.Title>Sherri Stoneking</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim. Sed blandit libero volutpat sed cras ornare. Proin nibh nisl condimentum id venenatis a condimentum. Sed velit dignissim sodales ut eu sem integer. Nibh mauris cursus mattis molestie a iaculis at erat. Lorem ipsum dolor sit amet consectetur adipiscing. Sollicitudin ac orci phasellus egestas tellus. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit amet.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </div>
                    <div  className="col-md-3">
                    <Card className="indiCard">
                        <Card.Img variant="top" src="../images/Kevin.jpg" />
                        <Card.Body>
                        <Card.Title>Kevin Stoneking</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim. Sed blandit libero volutpat sed cras ornare. Proin nibh nisl condimentum id venenatis a condimentum. Sed velit dignissim sodales ut eu sem integer. Nibh mauris cursus mattis molestie a iaculis at erat. Lorem ipsum dolor sit amet consectetur adipiscing. Sollicitudin ac orci phasellus egestas tellus. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit amet.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </div>
                    <div  className="col-md-3">
                    <Card className="indiCard">
                        <Card.Img variant="top" src="../images/sabrina.png" />
                        <Card.Body>
                        <Card.Title>Sabrina Kettle</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim. Sed blandit libero volutpat sed cras ornare. Proin nibh nisl condimentum id venenatis a condimentum. Sed velit dignissim sodales ut eu sem integer. Nibh mauris cursus mattis molestie a iaculis at erat. Lorem ipsum dolor sit amet consectetur adipiscing. Sollicitudin ac orci phasellus egestas tellus. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Proin libero nunc consequat interdum varius sit amet.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </div>
                </CardGroup>
            </div>
          );
        }
      }