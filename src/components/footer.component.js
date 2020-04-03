import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Footer extends Component {
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

 