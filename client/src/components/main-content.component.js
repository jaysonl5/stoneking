import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';

export default function MainContent(props){
    return(
        <Col xs="12" sm="12" md="12" lg="7" xl="8">
        <div>
            <div className="mainHeader">
                <h1 className="mainH1">Find the perfect place to call home</h1>
                
            </div>
            
            <Col xl="9">
                <p className="mainBody">Stoneking Real Estate Team is a full service real 
                estate team that is dedicated to providing outstanding service to all our 
                Clients! Contact us today to find the home of your dreams.</p>
                <hr className="separator"></hr>
            </Col>

            
        </div>
        </Col>
    );
}