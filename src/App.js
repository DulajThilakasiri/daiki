import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/FooterContain/FooterContainer';
import Header from './Components/HeaderContain/HeaderContainer';
import Body from './Components/BodyContain/BodyContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
          <Body />
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
