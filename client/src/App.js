import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Row from 'react-bootstrap/Row';


import Navigation from "./components/navigation.component";
import ContactForm from './components/contact-form.component.js';

import Footer from "./components/footer.component";
import MainContent from './components/main-content.component';
import AboutCards from './components/about-cards.component';

export default function App() {
  return (

    <Router>

    <div className="App">
      <Navigation />
      <Row>
        <MainContent />
        <ContactForm />
        <AboutCards />
      </Row>
      <div className="spacer"></div>
      <Footer />
    </div>

    </Router>
  );
}
