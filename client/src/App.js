import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Navigation from "./components/navigation.component";
import ContactForm from './components/contact-form.component.js';
import PropertiesList from "./components/properties-list.component"; 
import Footer from "./components/footer.component";

export default function App() {
  return (

    <Router>

    <div className="App">
      <Navigation />
      <ContactForm />
      <Route path="/" exact component={PropertiesList} />
      <Footer />
    </div>

    </Router>
  );
}