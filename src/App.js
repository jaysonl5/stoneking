import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.scss';
import FormControl from 'react-bootstrap/FormControl';

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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
