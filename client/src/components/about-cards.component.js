import React, { Component } from 'react';

export default class AboutCards extends Component {
    render(){
        return(
            <div className="cardContainer row">
                <h2 className="teamTitle">Meet your team</h2>
                <div className="col-1-of-4">
                    <div className="card">
                        <img className="card__img" src="../images/Sherri.jpg" alt="Team member Sherri Stoneking"></img>
                        <h3>Sherri Stoneking</h3>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="card">
                    <img className="card__img" src="../images/Kevin.jpg" alt="Team member Kevin Stoneking"></img>
                        <h3>Kevin Stoneking</h3>
                    </div>
                </div>

                <div className="col-1-of-4">
                    <div className="card">
                    <img className="card__img" src="../images/Sabrina.png" alt="Team member Sabrina Kettle"></img>
                        <h3>Sabrina Kettle</h3>
                    </div>
                </div>
            </div>
          );
        }
      }