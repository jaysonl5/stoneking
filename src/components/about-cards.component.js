import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class AboutCards extends Component {
    render(){
        return(
            <div className="cardcontainer">
                <CardGroup className="Allcards" >
                <Card className="Sherri-card">
                <Card.Img variant="top" src="../images/Sherri.jpg" />
                <Card.Body>
                <Card.Title>Sherri Stoneking</Card.Title>
                <Card.Text>
                    Blah
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src="../images/Kevin.jpg" />
                <Card.Body>
                <Card.Title>Kevin Stoneking</Card.Title>
                <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                <Card>
                <Card.Img variant="top" src="../images/sabrina.png" />
                <Card.Body>
                <Card.Title>Sabrina Kettle</Card.Title>
                <Card.Text>
                Blah
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                </Card>
                </CardGroup>
            </div>
          );
        }
      }