import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

export default function MainContent(props){
    return(
        // <Col xs="12" sm="12" md="12" lg="7" xl="8">
        <div>
            {/* <div className="mainHeader">
                <h1 className="mainH1">Find the perfect place to call home</h1>
                
            </div> */}
               <h2>Serving the OKC Metro and Surrounding Areas</h2>
            
                <p className="mainBody"><img src="../images/family_at_home.jpg" className="imgFamily"></img>Stoneking Real Estate Team is a full service real 
                estate team that is dedicated to providing outstanding service to all our 
                clients in the Oklahoma City metro and all surrounding suburbs. Our goal is to help you find a place to share your life and make memories with the people you love. Contact us today to find the home of your dreams!</p>
                <hr className="separator"></hr>
            
        </div>
        // </Col>
    );
} 