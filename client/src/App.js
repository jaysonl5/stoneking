import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './sass/App.scss';
import './css/style.css';
import Row from 'react-bootstrap/Row';


import Navigation from "./components/navigation.component";
import ContactForm from './components/contact-form.component.js';

import Footer from "./components/footer.component";
import MainContent from './components/main-content.component';

export default function App() {
  return (

    <Router>
    <div className="App">
      <Navigation />

      <div className="banner">
        <h1>Find the perfect place to call<br /> <span className="homespan">HOME</span></h1>
      </div>

      <div className="container">
        <div className="row">
        <div className="col-2-of-4"><MainContent /></div>

        <div className="col-2-of-4"><ContactForm /></div>
        </div>
      </div>
      <div className="spacer"></div>
      <Footer />
    </div>

    </Router>
  );
}