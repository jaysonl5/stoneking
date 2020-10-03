import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import ContactForm from './contact-form.component.js';

export default function MainContent(props){
    return(
        <div>
               
                    <h2 className="serveBanner">Here to serve you</h2>

               <div className="row">
"
                    

                    <div className="col-3-of-4">
                    
                        <p className="mainBody">
                        
                            Stoneking Real Estate Team is a full service real estate team that is dedicated to providing outstanding service to all our 
                            clients in the Oklahoma City metro and all surrounding suburbs. Our goal is to help you find a place to share your life and make memories with the people you love. Contact us today to find the home of your dreams!
                        </p>

                        
                    </div>

                    <div className="col-3-of-4"> 
                        <img src="../images/family_at_home.jpg" className="imgFamily" alt="Mother and child enjoying their home."></img>
                    </div>

                    

                    <div className="col-1-of-4">
                    <ContactForm />
                    
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-3-of-3">
                    <h2>Meet our agents</h2>
                    </div>
                </div>
                <hr className="separator"></hr>
        </div>
    );
} 