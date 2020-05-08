import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Navigation from "./components/navigation.component";
import ContactForm from './components/contact-form.component.js';
import PropertiesList from "./components/properties-list.component"; 
import Footer from "./components/footer.component";
import MainContent from './components/main-content.component';

export default function App() {
  return (

    <Router>

    <div className="App">
      <Navigation />
      <Row>
        <ContactForm />
        <MainContent />
      </Row>
      <Footer />
    </div>

    </Router>
  );
}