import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Service from './Services';
import AboutUs from './AboutUs';
import Contact from './Contact';

const BodyContainer = () => {
  return (
    <div className="body-container">

     
       <Routes>
        <Route index element = {<Home/>}></Route>
        <Route path='/AboutUs' element= {<AboutUs/>}></Route>
        <Route path='/Services' element= {<Service/>}></Route>
        <Route path='/Contact' element= {<Contact/>}></Route>
       </Routes>
      
    </div>
  );
};

export default BodyContainer;