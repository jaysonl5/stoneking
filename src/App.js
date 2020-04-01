import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import './App.scss';
import ContactForm from './ContactForm.js';

class Header extends Component {
  render(){
    return(
      <div>
        <Navbar bg='light'>
          <Navbar.Brand>
          <img
            src="../images/stoneking_nav_logo.png"
            width="300em"
            className="align-top"
            alt="React Bootstrap logo"
          />
          </Navbar.Brand>

          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>  <FontAwesomeIcon icon={faMobile} size="lg"></FontAwesomeIcon>  Call Us: 999-999-9999</Nav.Link>
            </Nav.Item>
          </Nav>

        </Navbar>
      </div>
    );
  }
}

class Content extends Component{
  render(){
    return(
      <div>
        <ContactForm />
           
        
      </div>
    );
  }
}

class Footer extends Component {
  render(){
    return(
      <div>
        <Navbar bg="dark" fixed="bottom">

          <img
            src="../images/metrofirst_white.png"
            width="85em"
            className="align-top"
            alt="React Bootstrap logo"
          />

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
