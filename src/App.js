import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './App.scss';

class Header extends Component {
  render(){
    return(
      <div>
        <Navbar bg='light'>
          <Navbar.Brand>
            Stoneking Team
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </div>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <div>
        <h1>Body Content</h1>
        <CardGroup>
  <Card>
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

class Footer extends Component {
  render(){
    return(
      <div>
        <Navbar bg="dark" fixed="bottom">
          
        </Navbar>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

