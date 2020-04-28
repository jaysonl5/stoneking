import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer (props) {
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

 