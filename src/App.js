import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import './App.scss';

class Header extends Component {
  render(){
    return(
      <div>
        <Nav>
          <Nav.Item>
            <Nav.Link>Home</Nav.Link>
          </Nav.Item>
        </Nav>
        <h1 className=".info">Stoneking Team Realtors</h1>
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
