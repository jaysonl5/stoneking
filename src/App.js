import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
