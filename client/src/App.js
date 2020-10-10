import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import './sass/App.scss';
import './css/style.css';
import Navigation from "./components/navigation.component";
import MainContent from './components/main-content.component';
import Footer from "./components/footer.component";


export default function App() {
  return (

    <Router>
    <div className="App">
      <Navigation />

      <div className="banner">
        <h1>Find the perfect place to call<br /> <span className="homespan">HOME</span></h1>
      </div>

      <MainContent />

      <Footer />
    </div>

    </Router>
  );
}