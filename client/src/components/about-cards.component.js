import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class AboutCards extends Component {
    render(){
        return(
            <div className="cardContainer">
                <CardGroup className="allCards" >
                    <div  className="col-md-4">
                    <Card className="indiCard">
                        <Card.Img variant="top" src="../images/Sherri.jpg" />
                        <Card.Body>
                            <div class="about-card-title">
                        <Card.Title>Sherri Stoneking</Card.Title>
                            </div>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </div>
                    <div  className="col-md-4">
                    <Card className="indiCard">
                        <Card.Img variant="top" src="../images/Kevin.jpg" />
                        <Card.Body>
                            <div class="about-card-title">
                        <Card.Title>Kevin Stoneking</Card.Title>
                            </div>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    </div>
                    <div  className="col-md-4">
                    <Card className="indiCard">
                        <Card.Img variant="top" src="../images/sabrina.png" />
                        <Card.Body>
                            <div class="about-card-title">
                        <Card.Title>Sabrina Kettle</Card.Title>
                            </div>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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